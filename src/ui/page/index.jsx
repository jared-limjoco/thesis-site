import Head from 'next/head';

import MainLayout from '@/features/layout/main';

import ContributeLayout from '@/features/layout/contribute';

export default function Page({
  children, title, description, contribute,
}) {
  return (

    <>

      <Head>

        <title>{title}</title>

        <meta name="description" content={description} />

      </Head>

      {!contribute ? (

        <MainLayout>{children}</MainLayout>

      ) : (

        <ContributeLayout>{children}</ContributeLayout>

      )}

    </>

  );
}
