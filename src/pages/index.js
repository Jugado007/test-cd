import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Analysis from './Analysis/Analysis'

export default function Home({ formattedDate }) {
  return (
    <>
      <Head>
        <title>Small Convert Tools | Convert Any Case</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="../convertcasemain.png"></link>
    </Head>
      <Analysis />
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}