import React, { useState } from "react";
import Link from "next/link";
import AppCard from './AppCard';
import styles from './AppCardGroup.module.scss'

function AppCardGroup(props:appCardGroupPropsType) {
  const getCards = () => {
    var cards = [];
    var results = <></>

    if (props.appCards.length > 0) {
      var more = null;
      if (props.appCards.length > 12 && props.moreLink) {
        more = <Link className="transition-colors p-4 rounded-lg bg-zinc-100 dark:bg-zinc-700 border-2 border-emerald-400 dark:border-emerald-400 w-full"
          href={props.moreLink}
          onClick={()=>{props.setSearchKeyword("")}}
        >
          More results
        </Link>
      }
      var i = 0

      var max = props.appCards.length

      if (props.useMax && max > 12) {
        max = 12
      }

      for (i = 0; i < max; i++) {
        var app = props.appCards[i]
        cards.push(
          <li key={`selected-${app.id}`}>
            <AppCard
              name={app.name}
              appData={app}
              onAdd={addApp}
              onRemove={removeApp}
              selected={props.onCheckSelected(app)}
              setSearchKeyword={props.setSearchKeyword}
              isLink={true}
            />
          </li>
        )
      }
      results = <div className={styles.appCardGroup}><ul>{cards}</ul>{more}</div>
    }
    return results;
  }

  const addApp = (appData:appType) => {
    props.onAdd(appData)
  }

  const removeApp = (appData:appType) => {
    props.onRemove(appData)
  }

  return (
    <div>{getCards()}</div>
  )
}
export default AppCardGroup
