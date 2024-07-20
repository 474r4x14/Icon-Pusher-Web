import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Blog.module.scss'
import Link from "next/link";
// import MyLayout from "../../layouts/MyLayout";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from "../components/Header"
import Misc from '@/classes/Misc';
import useDownloader from "react-use-downloader";

import stream from 'stream';
import { promisify } from 'util';

type componentType = {

}

type appType = {
  name:string,
  slug:string,
  icon:string,
  iconDownload:string,
  version:string,
  packageName:string,
  components:componentType[],
}

const Beta: NextPage = () => {

  const router = useRouter()
  const { packageName } = router.query




  return (
    <div className={styles.container}>
      <Head>
        <title>Iconpusher Beta information</title>
        <meta name="description" content="Iconpusher Contact Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Contact</h1>
        <p>If you've got any questions, suggestions, or just wanna say "hi", feel free to ping an email:</p>

        <p><a href="mailto:hi@iconpusher.com?subject=Feedback">hi@iconpusher.com</a></p>

      </main>
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.iconpusher.com/search/data`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
  }


export default Beta
