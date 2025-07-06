import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Blog.module.scss'
import { useRouter } from 'next/router'

const Beta: NextPage = () => {

  const router = useRouter()

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
