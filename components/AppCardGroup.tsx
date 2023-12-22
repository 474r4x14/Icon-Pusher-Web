import React, { useState } from "react";
import Link from "next/link";
import AppCard from './AppCard';
import styles from './AppCardGroup.module.scss'

type propsType = {
  appCards:appType[],
  moreLink?:string,
  useMax?:boolean,
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
}

function AppCardGroup(props:propsType) {
  const getCards = () => {
    var cards = [];
    var results = <></>

    if (props.appCards.length > 0) {
      var more = null;
      if (props.appCards.length > 12 && props.moreLink) {
        more = <Link
          href={props.moreLink}
          onClick={()=>{props.setSearchKeyword("")}}
        >
          More results
        </Link>
      }
      var i = 0
      // var useMax = true
      // if (useMax == 'false') {
        // useMax = false
      // }

      var max = props.appCards.length

      // console.log('USE MAX',useMax, max, useMax)

      if (props.useMax && max > 12) {
        max = 12
      }

      // console.log('AppCardGroup max',max)
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
            />
          </li>
        )
      }
      results = <div><ul className={styles.appCardGroup}>{cards}</ul>{more}</div>
    }
    return results;
  }

  const addApp = (appData:appType) => {
    props.onAdd(appData)
  }

  const removeApp = (appData:appType) => {
    props.onRemove(appData)
  }

  const checkSelected = (appData:appType) => {
      // props.onCheckSelected(appData)
  }


  return (
    <div>{getCards()}</div>
  )
}
export default AppCardGroup
