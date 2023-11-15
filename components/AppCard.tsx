import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import styles from './AppCard.module.scss'
import Misc from '../classes/Misc';

type propsType = {
  name:string,
  appData:appType,
  onAdd:Function,
  onRemove:Function,
  selected:boolean,
}

function AppCard (props:propsType) {

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      console.log('AppCard', 'calling props.onAdd')
      props.onAdd(props.appData)
    } else {
      props.onRemove(props.appData)
    }
  }

  let uid = Misc.getUID();

  return (
    <div className={styles.appCard}>
      <Link href={`/package/${props.appData.packageName}`}>
        <img src={props.appData.icon} className="rounded" />
        <p className="content-center">{props.appData.name}</p>
      </Link>
      <input
        type="checkbox"
        onChange={handleInputChange}
        value="test??"
        id={`app-${uid}`}
        checked={props.selected}
      />
      <label htmlFor={`app-${uid}`}>test lbl</label>
    </div>
  )
}

export default AppCard
