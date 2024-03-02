(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/util/mongodb */ "./src/util/mongodb.js");




const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: "Credentials",
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      username: {
        label: "username",
        type: "text",
        placeholder: "username"
      },
      password: {
        label: "Password",
        type: "password"
      }
    },

    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      const {
        db
      } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();
      const {
        username,
        password
      } = req.body;
      const user = await db.collection("users").findOne({
        username
      });

      if (user && (await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.hashedPassword))) {
        return user;
      } else {
        return null; // Redirect to error page
      }
    }

  })],
  pages: {
    signIn: "/login",
    error: "/login"
  },
  session: {
    jwt: true
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
    }
  }
};

const nextAuthFunction = (req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);

/* harmony default export */ __webpack_exports__["default"] = (nextAuthFunction);

/***/ }),

/***/ "./src/util/mongodb.js":
/*!*****************************!*\
  !*** ./src/util/mongodb.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectToDatabase": function() { return /* binding */ connectToDatabase; }
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;
let cachedClient = null;
let cachedDb = null;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!dbName) {
  throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb
    };
  }

  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = await client.db(dbName);
  cachedClient = client;
  cachedDb = db;
  return {
    client,
    db
  };
}

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcryptjs");;

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy8uL3NyYy91dGlsL21vbmdvZGIuanMiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzL2V4dGVybmFsIFwibmV4dC1hdXRoXCIiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJuYW1lcyI6WyJvcHRpb25zIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiZGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImJvZHkiLCJ1c2VyIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJiY3J5cHQiLCJoYXNoZWRQYXNzd29yZCIsInBhZ2VzIiwic2lnbkluIiwiZXJyb3IiLCJzZXNzaW9uIiwiand0IiwiY2FsbGJhY2tzIiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImlzTmV3VXNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2Vzc2lvblRva2VuIiwic2Vzc2lvblVzZXIiLCJhZ2UiLCJjaXR5IiwibW9iaWxpdHlBaWRzIiwiY29tbXV0ZUZyZXF1ZW5jeSIsImFjdGl2aXRpZXMiLCJuZXh0QXV0aEZ1bmN0aW9uIiwicmVzIiwiTmV4dEF1dGgiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJkYk5hbWUiLCJNT05HT0RCX0RCIiwiY2FjaGVkQ2xpZW50IiwiY2FjaGVkRGIiLCJFcnJvciIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBRztBQUNkQyxXQUFTLEVBQUUsQ0FDVEMsc0VBQUEsQ0FBc0I7QUFDcEI7QUFDQUMsUUFBSSxFQUFFLGFBRmM7QUFHcEI7QUFDQTtBQUNBO0FBQ0FDLGVBQVcsRUFBRTtBQUNYQyxjQUFRLEVBQUU7QUFBRUMsYUFBSyxFQUFFLFVBQVQ7QUFBcUJDLFlBQUksRUFBRSxNQUEzQjtBQUFtQ0MsbUJBQVcsRUFBRTtBQUFoRCxPQURDO0FBRVhDLGNBQVEsRUFBRTtBQUFFSCxhQUFLLEVBQUUsVUFBVDtBQUFxQkMsWUFBSSxFQUFFO0FBQTNCO0FBRkMsS0FOTzs7QUFVcEIsVUFBTUcsU0FBTixDQUFnQk4sV0FBaEIsRUFBNkJPLEdBQTdCLEVBQWtDO0FBQ2hDO0FBQ0EsWUFBTTtBQUFFQztBQUFGLFVBQVMsTUFBTUMsZ0VBQWlCLEVBQXRDO0FBQ0EsWUFBTTtBQUFFUixnQkFBRjtBQUFZSTtBQUFaLFVBQXlCRSxHQUFHLENBQUNHLElBQW5DO0FBRUEsWUFBTUMsSUFBSSxHQUFHLE1BQU1ILEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLE9BQWQsRUFBdUJDLE9BQXZCLENBQStCO0FBQUVaO0FBQUYsT0FBL0IsQ0FBbkI7O0FBQ0EsVUFBSVUsSUFBSSxLQUFLLE1BQU1HLHVEQUFBLENBQWVULFFBQWYsRUFBeUJNLElBQUksQ0FBQ0ksY0FBOUIsQ0FBWCxDQUFSLEVBQW1FO0FBQ2pFLGVBQU9KLElBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLElBQVAsQ0FESyxDQUNRO0FBQ2Q7QUFDRjs7QUFyQm1CLEdBQXRCLENBRFMsQ0FERztBQTBCZEssT0FBSyxFQUFFO0FBQ0xDLFVBQU0sRUFBRSxRQURIO0FBRUxDLFNBQUssRUFBRTtBQUZGLEdBMUJPO0FBOEJkQyxTQUFPLEVBQUU7QUFDUEMsT0FBRyxFQUFFO0FBREUsR0E5Qks7QUFpQ2RDLFdBQVMsRUFBRTtBQUNURCxPQUFHLEVBQUUsT0FBT0UsS0FBUCxFQUFjWCxJQUFkLEVBQW9CWSxPQUFwQixFQUE2QkMsT0FBN0IsRUFBc0NDLFNBQXRDLEtBQW9EO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0FkLFVBQUksS0FBS1csS0FBSyxDQUFDWCxJQUFOLEdBQWFBLElBQWxCLENBQUo7QUFDQSxhQUFPZSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JMLEtBQWhCLENBQVAsQ0FOdUQsQ0FNeEI7QUFDaEMsS0FSUTtBQVNUSCxXQUFPLEVBQUUsT0FBT0EsT0FBUCxFQUFnQlIsSUFBaEIsRUFBc0JpQixZQUF0QixLQUF1QztBQUM5QztBQUNBO0FBQ0EsWUFBTUMsV0FBVyxHQUFHbEIsSUFBSSxDQUFDQSxJQUF6QjtBQUNBLGFBQU9rQixXQUFXLENBQUNDLEdBQW5CO0FBQ0EsYUFBT0QsV0FBVyxDQUFDRSxJQUFuQjtBQUNBLGFBQU9GLFdBQVcsQ0FBQ2QsY0FBbkI7QUFDQSxhQUFPYyxXQUFXLENBQUNHLFlBQW5CO0FBQ0EsYUFBT0gsV0FBVyxDQUFDSSxnQkFBbkI7QUFDQSxhQUFPSixXQUFXLENBQUNLLFVBQW5CO0FBRUFmLGFBQU8sQ0FBQ1IsSUFBUixHQUFla0IsV0FBZjtBQUNBLGFBQU9ILE9BQU8sQ0FBQ0MsT0FBUixDQUFnQlIsT0FBaEIsQ0FBUDtBQUNEO0FBdEJRO0FBakNHLENBQWhCOztBQTJEQSxNQUFNZ0IsZ0JBQWdCLEdBQUcsQ0FBQzVCLEdBQUQsRUFBTTZCLEdBQU4sS0FBY0MsZ0RBQVEsQ0FBQzlCLEdBQUQsRUFBTTZCLEdBQU4sRUFBV3hDLE9BQVgsQ0FBL0M7O0FBRUEsK0RBQWV1QyxnQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUVBLElBQUlHLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQXRCO0FBQ0EsSUFBSUMsTUFBTSxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsVUFBekI7QUFFQSxJQUFJQyxZQUFZLEdBQUcsSUFBbkI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFFQSxJQUFJLENBQUNQLEdBQUwsRUFBVTtBQUNSLFFBQU0sSUFBSVEsS0FBSixDQUNKLHNFQURJLENBQU47QUFHRDs7QUFFRCxJQUFJLENBQUNKLE1BQUwsRUFBYTtBQUNYLFFBQU0sSUFBSUksS0FBSixDQUNKLHFFQURJLENBQU47QUFHRDs7QUFFTSxlQUFlckMsaUJBQWYsR0FBbUM7QUFDeEMsTUFBSW1DLFlBQVksSUFBSUMsUUFBcEIsRUFBOEI7QUFDNUIsV0FBTztBQUFFRSxZQUFNLEVBQUVILFlBQVY7QUFBd0JwQyxRQUFFLEVBQUVxQztBQUE1QixLQUFQO0FBQ0Q7O0FBRUQsUUFBTUUsTUFBTSxHQUFHLE1BQU1DLHdEQUFBLENBQW9CVixHQUFwQixFQUF5QjtBQUM1Q1csbUJBQWUsRUFBRSxJQUQyQjtBQUU1Q0Msc0JBQWtCLEVBQUU7QUFGd0IsR0FBekIsQ0FBckI7QUFLQSxRQUFNMUMsRUFBRSxHQUFHLE1BQU11QyxNQUFNLENBQUN2QyxFQUFQLENBQVVrQyxNQUFWLENBQWpCO0FBRUFFLGNBQVksR0FBR0csTUFBZjtBQUNBRixVQUFRLEdBQUdyQyxFQUFYO0FBRUEsU0FBTztBQUFFdUMsVUFBRjtBQUFVdkM7QUFBVixHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNwQ0Qsc0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIjtcclxuXHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvdXRpbC9tb25nb2RiXCI7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgUHJvdmlkZXJzLkNyZWRlbnRpYWxzKHtcclxuICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIC8vIFRoZSBjcmVkZW50aWFscyBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgc3VpdGFibGUgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxyXG4gICAgICAvLyBZb3UgY2FuIHNwZWNpZnkgd2hhdGV2ZXIgZmllbGRzIHlvdSBhcmUgZXhwZWN0aW5nIHRvIGJlIHN1Ym1pdHRlZC5cclxuICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwidXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcInVzZXJuYW1lXCIgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXHJcbiAgICAgICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xyXG4gICAgICAgIGlmICh1c2VyICYmIChhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5oYXNoZWRQYXNzd29yZCkpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7IC8vIFJlZGlyZWN0IHRvIGVycm9yIHBhZ2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXHJcbiAgICBlcnJvcjogXCIvbG9naW5cIixcclxuICB9LFxyXG4gIHNlc3Npb246IHtcclxuICAgIGp3dDogdHJ1ZSxcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgand0OiBhc3luYyAodG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlcikgPT4ge1xyXG4gICAgICAvLyAgXCJ1c2VyXCIgcGFyYW1ldGVyIGlzIHRoZSBvYmplY3QgcmVjZWl2ZWQgZnJvbSBcImF1dGhvcml6ZVwiXHJcbiAgICAgIC8vICBcInRva2VuXCIgaXMgYmVpbmcgc2VuZCBiZWxvdyB0byBcInNlc3Npb25cIiBjYWxsYmFjay4uLlxyXG4gICAgICAvLyAgLi4uc28gd2Ugc2V0IFwidXNlclwiIHBhcmFtIG9mIFwidG9rZW5cIiB0byBvYmplY3QgZnJvbSBcImF1dGhvcml6ZVwiLi4uXHJcbiAgICAgIC8vICAuLi5hbmQgcmV0dXJuIGl0Li4uXHJcbiAgICAgIHVzZXIgJiYgKHRva2VuLnVzZXIgPSB1c2VyKTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0b2tlbik7IC8vIC4uLmhlcmVcclxuICAgIH0sXHJcbiAgICBzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbiwgdXNlciwgc2Vzc2lvblRva2VuKSA9PiB7XHJcbiAgICAgIC8vICBcInNlc3Npb25cIiBpcyBjdXJyZW50IHNlc3Npb24gb2JqZWN0XHJcbiAgICAgIC8vICBiZWxvdyB3ZSBzZXQgXCJ1c2VyXCIgcGFyYW0gb2YgXCJzZXNzaW9uXCIgdG8gdmFsdWUgcmVjZWl2ZWQgZnJvbSBcImp3dFwiIGNhbGxiYWNrXHJcbiAgICAgIGNvbnN0IHNlc3Npb25Vc2VyID0gdXNlci51c2VyO1xyXG4gICAgICBkZWxldGUgc2Vzc2lvblVzZXIuYWdlO1xyXG4gICAgICBkZWxldGUgc2Vzc2lvblVzZXIuY2l0eTtcclxuICAgICAgZGVsZXRlIHNlc3Npb25Vc2VyLmhhc2hlZFBhc3N3b3JkO1xyXG4gICAgICBkZWxldGUgc2Vzc2lvblVzZXIubW9iaWxpdHlBaWRzO1xyXG4gICAgICBkZWxldGUgc2Vzc2lvblVzZXIuY29tbXV0ZUZyZXF1ZW5jeTtcclxuICAgICAgZGVsZXRlIHNlc3Npb25Vc2VyLmFjdGl2aXRpZXM7XHJcblxyXG4gICAgICBzZXNzaW9uLnVzZXIgPSBzZXNzaW9uVXNlcjtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IG5leHRBdXRoRnVuY3Rpb24gPSAocmVxLCByZXMpID0+IE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5leHRBdXRoRnVuY3Rpb247XHJcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmxldCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxubGV0IGRiTmFtZSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfREI7XHJcblxyXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcclxubGV0IGNhY2hlZERiID0gbnVsbDtcclxuXHJcbmlmICghdXJpKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXHJcbiAgKTtcclxufVxyXG5cclxuaWYgKCFkYk5hbWUpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICBpZiAoY2FjaGVkQ2xpZW50ICYmIGNhY2hlZERiKSB7XHJcbiAgICByZXR1cm4geyBjbGllbnQ6IGNhY2hlZENsaWVudCwgZGI6IGNhY2hlZERiIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYiA9IGF3YWl0IGNsaWVudC5kYihkYk5hbWUpO1xyXG5cclxuICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XHJcbiAgY2FjaGVkRGIgPSBkYjtcclxuXHJcbiAgcmV0dXJuIHsgY2xpZW50LCBkYiB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=