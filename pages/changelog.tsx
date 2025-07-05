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
import { IconBrowser, IconBrandAndroid } from '@tabler/icons-react';

import stream from 'stream';
import { promisify } from 'util';

const Beta: NextPage = () => {

  const router = useRouter()
  const { packageName } = router.query




  return (
    <div className={styles.container}>
      <Head>
        <title>Changelog information | Icon Pusher</title>
        <meta name="description" content="Iconpusher Changelog Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Changelog</h1>
        <p>Hello icon pack artists/creators</p>
        <p>I felt happy enough with the current state of the beta version of IconPusher v2.0 so I&apos;ve put it live.</p>
        <p>There are still a few pieces left to polish off, but nothing which couldn&apos;t be done once the rest of the changes were live</p>
        <p>This page will now act as a changelog for both the site (<IconBrowser className='inline' />), and the app (<IconBrandAndroid className='inline' />)</p>

        <p>All feedback is welcome: <a href="mailto:feedback@iconpusher.com?subject=Feedback">feedback@iconpusher.com</a></p>
        <h2>Issues I&apos;m aware of:</h2>
        <ul>
          <li><IconBrowser className='inline' /> Option to clear selection</li>
          <li><IconBrowser className='inline' /> Responsive design is incomplete</li>
          <li><IconBrowser className='inline' /> General styling</li>
          <li><IconBrowser className='inline' /> Save app selection on reload</li>
          <li><IconBrowser className='inline' /> Light to dark theme fade on reload</li>
          <li><IconBrowser className='inline' /> Apps with the same name will probably conflict/overwrite in zip download</li>
          <li><IconBrowser className='inline' /> There are a number of broken icons for the latest versions of apps. Issue has been fixed, but might have to roll the broken version numbers back</li>
          <li><IconBrandAndroid className='inline' /> Error feedback</li>
          <li><IconBrandAndroid className='inline' /> Uploading a new version of an existing app may error</li>
        </ul>

        <h2>Upcoming features:</h2>
        <ul>
          <li><IconBrowser className='inline' /> App icon versions</li>
          <li><IconBrowser className='inline' /> Pagination</li>
          <li><IconBrowser className='inline' /> Popular apps</li>
          <li><IconBrowser className='inline' /> Feedback form instead of email</li>
          <li><IconBrandAndroid className='inline' /> Dark mode</li>
          <li><IconBrandAndroid className='inline' /> Search filter</li>
          <li><IconBrandAndroid className='inline' /> Refresh list</li>
        </ul>

        <h2>Nice ideas</h2>
        <ul>
          <li><IconBrandAndroid className='inline' /> Detecting new/updated apps</li>
          <li><IconBrowser className='inline' /> Showcase of icon packs</li>
        </ul>

        <h2>Change log:</h2>
        <ul className={styles.changelog}>
          <li>
            <strong>v2.1.0 (2025-07-05)</strong><br />
            <IconBrowser className='inline' /> Improved general performance of the website
          </li>
          <li>
            <strong>v2.0.2 (2024-08-10)</strong><br />
            <IconBrowser className='inline' /> Added donation page
          </li>
          <li>
            <strong>v2.0.1 (2024-07-26)</strong><br />
            <IconBrowser className='inline' /> Fixed upload issue which caused icons not displaying due to naming inconsistency
          </li>
          <li>
            <strong>v2.0 🥳 (2024-07-21)</strong><br />
            <IconBrowser className='inline' /> Fixed encoding issues<br />
            <IconBrowser className='inline' /> Added latest version updates to homepage<br />
            <IconBrowser className='inline' /> Fixed version numbers containing &lsquo;/&rsquo; breaking icons (lookin&apos; at you MS teams!)<br />
            <IconBrandAndroid className='inline' /> Fixed an issue where updates weren&apos;t uploaded correctly
          </li>
          <li>
            <strong>v2.0 pre-5 (2024-05-16)</strong><br />
            <IconBrowser className='inline' /> Added device app list<br/>
            <IconBrowser className='inline' /> Added new page to view all selected apps<br/>
            <IconBrowser className='inline' /> Added the logo
          </li>
          <li>
            <strong>v2.0 pre-4 (2024-05-07)</strong><br />
            <IconBrowser className='inline' /> Added feedback to copy buttons<br/>
            <IconBrowser className='inline' /> Fixed copy buttons not working<br />
            <IconBrowser className='inline' /> Styled &lsquo;More Results&rsquo; button<br />
            <IconBrowser className='inline' /> Sync with live version is now automated<br />
            <IconBrowser className='inline' /> Fixed some broken icons
          </li>
          <li>
            <strong>v2.0 pre-3 (2024-01-19)</strong><br />
            <IconBrowser className='inline' /> Fixed - Some responsive styling
          </li>
          <li>
            <strong>v2.0 pre-2 (2024-01-01)</strong><br />
            <IconBrowser className='inline' /> Fixed - Some app icons are broken<br />
            <IconBrowser className='inline' /> Update - Attempted to fix latest icons not appearing
          </li>
          <li>
            <strong>v2.0-pre-1 (2023-12-22)</strong><br />
            <IconBrowser className='inline' /> The initial version featuring mutliple app selection &amp; download as zip
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Beta
