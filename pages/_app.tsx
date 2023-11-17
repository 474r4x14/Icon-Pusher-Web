import '../styles/globals.css'
import type { AppProps } from 'next/app'
//import React from "react"
import React, { useState } from "react";
import '../app/globals.css'
import SelectedApps from '@/components/SelectedApps';
import Header from '@/components/Header';

// Component is the Page being loaded
function MyApp({ Component, pageProps }: AppProps) {

    // We try to grab the Layout static var from the Page
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    // Keep a record of all selected apps
    const [selectedApps, setSelectedApps] = useState<appType[]>([]);

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

    // Remove all from selected list
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

  return (
    <Layout>
      <Header
        onAdd={addSelected}
        onRemove={removeSelected}
        onCheckSelected={appIsSelected}
      />
      <Component
        {...pageProps}
        onAdd={addSelected}
        onRemove={removeSelected}
        onCheckSelected={appIsSelected}
      />
      <SelectedApps
        appData={selectedApps}
      />
    </Layout>
  )
}

export default MyApp
