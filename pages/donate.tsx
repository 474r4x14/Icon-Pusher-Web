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
        <title>Donate | Iconpusher</title>
        <meta name="description" content="Iconpusher Donation Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Donate</h1>
        <p>Hosting a website isn&apos;t free, and while adding adverts to help cover the costs is an option, I&apos;d rather not if it can be helped</p>

        <p>If you find this site helpful, and would like to help out and make a donation, please check the options below:</p>

        <h2>Standard options:</h2>
        <ul className='list-inside'>
          <li><a href="https://ko-fi.com/474r4x14" target='blank'>Ko-Fi</a></li>
        </ul>

        <h2>Crypto</h2>
        <p>If you prefer anonymous donations, I also accept crypto.</p>
        <ul className='list-inside'>
          <li><strong>Bitcoin (BTC)</strong> : bc1q90c9t5rq2adn0l0ygtcmjqfznx2zrqcygu5wee</li>
          <li><strong>Etherium (ETH)</strong> : 0x58d899E044D23DBe6B95CaC1E030c95CBd1cB818</li>
          <li><strong>Litecoin (LTC)</strong> : ltc1q3ym5lungfs3c4s757q4x58guynephk8wc240rq</li>
          <li><strong>Solana (SOL)</strong> : 76jD72FftDv3v1iD2jCgXuiX5hi7p2vQLhQuqmu4TZFo</li>
          <li><strong>TRON (TRX)</strong> : TLFeo2SmqrYW6TuyfkuRv1WEJifTcSiB5C</li>
        </ul>

      </main>
    </div>
  )
}

export default Beta
