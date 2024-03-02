import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/util/mongodb";

const options = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { db } = await connectToDatabase();
        const { username, password } = req.body;

        const user = await db.collection("users").findOne({ username });
        if (user && (await bcrypt.compare(password, user.hashedPassword))) {
          return user;
        } else {
          return null; // Redirect to error page
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      //  "user" parameter is the object received from "authorize"
      //  "token" is being send below to "session" callback...
      //  ...so we set "user" param of "token" to object from "authorize"...
      //  ...and return it...
      user && (token.user = user);
      return Promise.resolve(token); // ...here
    },
    session: async (session, user, sessionToken) => {
      //  "session" is current session object
      //  below we set "user" param of "session" to value received from "jwt" callback
      const sessionUser = user.user;
      delete sessionUser.age;
      delete sessionUser.city;
      delete sessionUser.hashedPassword;
      delete sessionUser.mobilityAids;
      delete sessionUser.commuteFrequency;
      delete sessionUser.activities;

      session.user = sessionUser;
      return Promise.resolve(session);
    },
  },
};

const nextAuthFunction = (req, res) => NextAuth(req, res, options);

export default nextAuthFunction;
