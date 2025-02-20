import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';
//import React from "react"
import React, { useState } from "react";
import '../app/globals.css'
import SelectedApps from '@/components/SelectedApps';
import Header from '@/components/Header';
import Link from 'next/link';

// Component is the Page being loaded
function MyApp({ Component, pageProps }: AppProps) {

  // console.log('PAGE PROPS',Component, pageProps);

    // We try to grab the Layout static var from the Page
    // const Layout = Component.Layout != undefined ? Component.Layout : React.Fragment;

    // Keep a record of all selected apps
    const [selectedApps, setSelectedApps] = useState<appType[]>([]);

    // Search keyword is kept here for access from other components
    const [searchKeyword, setSearchKeyword] = useState("");

    // Is the app already selected?
    const appIsSelected = (app:appType):boolean => {
      let isSelected = false
      selectedApps.forEach((appData) => {
        if (appData.id == app.id) {
          isSelected = true
        }
      })
      return isSelected
    }

    // Get the array index of the selected app
    const appSelectedIndex = (app:appType):number => {
      let isSelected = -1
      selectedApps.forEach((appData,index) => {
        if (appData.id == app.id) {
          isSelected = index
        }
      })
      return isSelected
    }

    // Add app to selected list
    const addSelected = (appName:appType) =>
    {
      appName.selected = true
      if (!appIsSelected(appName)) {
        setSelectedApps( // Replace the state
        [ // with a new array
          ...selectedApps, // that contains all the old items
          appName // and one new item at the end
        ]
      );
      }
    }

    // Remove app from selected list
    function removeSelected(app:appType)
    {
      var index = appSelectedIndex(app)
      setSelectedApps(
        selectedApps.filter(
          function(appCheck) {
            return appCheck.id !== app.id
          }
        )
      );
    }

  const footerPadding = selectedApps.length > 0 ? 'pb-24' : ''

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W7NBCQQ6Z8"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W7NBCQQ6Z8');
        `}
      </Script>
      <Header
        onAdd={addSelected}
        onRemove={removeSelected}
        onCheckSelected={appIsSelected}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <Component
        {...pageProps}
        onAdd={addSelected}
        onRemove={removeSelected}
        onCheckSelected={appIsSelected}
        setSearchKeyword={setSearchKeyword}
        selectedApps={selectedApps}
      />
      <SelectedApps
        appData={selectedApps}
        setSearchKeyword={setSearchKeyword}
      />
      <footer className={`bg-zinc-900 border-t-4 border-zinc-950 text-white ${footerPadding}`}>
        <div className='max-w-screen-xl m-auto '>
           <p className='py-2 text-right'><Link href="/changelog" className="py-3 inline-block">v2.0.2</Link></p>
        </div>
      </footer>
    </>
  )
}

export default MyApp
