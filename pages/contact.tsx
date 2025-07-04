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


const Beta: NextPage = () => {

  const router = useRouter()
  const { packageName } = router.query




  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | Iconpusher</title>
        <meta name="description" content="Iconpusher Contact Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Contact</h1>
        <p>If you&apos;ve got any questions, suggestions, or just wanna say &quot;hi&quot;, feel free to ping an email:</p>

        <p><a href="mailto:hi@iconpusher.com?subject=Feedback">hi@iconpusher.com</a></p>

      </main>
    </div>
  )
}

export default Beta
