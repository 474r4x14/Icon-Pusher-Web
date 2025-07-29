import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Blog.module.scss'
import { useRouter } from 'next/router'

const AppDelist: NextPage = () => {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>App delist | Iconpusher</title>
        <meta name="description" content="Iconpusher Donation Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>App delist</h1>
        <p>Unfortunately, the Android app is going to be delisted from the Google Play store.</p>

        <p>Over the last few years Google have restricted how apps can interact with each other to tighten how personal
          & sensitive data is handled, and this involves the option to be able to access any installed app on the device</p>
        <p>When the original Icon Pusher app was created, we could freely query any installed apps on a device to get
          the details needed & send them over to the website. When Google started tightening permissions, they stated that
          the permission could be used if  it was &ldquo;permitted core functionality&ldquo; of the app (which is is).

          Now however, the policy has been changed again so not even core functionality is a valid reason:
          </p>
          <p className='mx-20 my-10 border-t-4 border-b-4 border-emerald-700'>&ldquo;Permitted uses involve apps that must discover any and all installed apps on the device, for awareness or
            interoperability purposes may have eligibility for the permission. Permitted uses include device search,
            antivirus apps, file managers, and browsers.&ldquo;</p>

          <p>So this means that the Icon Pusher app doesn&apos;t qualify, and won&apos;t be approved by Google.
            I shall send an appeal to the rejected app, but I won&apos;t expect it to be approved</p>

          <h2>When will this happen?</h2>
          <p>The deadline I&apos;ve been given is the 10th of November.</p>

          <h2>Going forward</h2>
          <p>The only option we have going forward is to host the app releases elsewhere. It&apos;s not as convenient as
            the Google Play store, but we&apos;re out of options. The app is now open source, and on Github, so I&apos;ll start
            putting releases there. Another option could be getting it on F-Droid for a Google Play store like experience.
          </p>


      </main>
    </div>
  )
}

export default AppDelist
