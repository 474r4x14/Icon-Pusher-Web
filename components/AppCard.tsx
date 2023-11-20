import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import styles from './AppCard.module.scss'
import Misc from '../classes/Misc';

type propsType = {
  name:string,
  appData:appType,
  onAdd:Function,
  onRemove:Function,
  setSearchKeyword:Function,
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

  const color = props.selected ? "bg-green-400" : "bg-blue-400";


  return (
    // <div className={styles.appCard}>
    <div className="relative">
      <Link
        href={`/package/${props.appData.packageName}`}
        onClick={()=>{props.setSearchKeyword("")}}
      >
        <img src={props.appData.icon} className="rounded" />
        <p className="text-center dark:text-green-400 transitionc-olor duration-500">{props.appData.name}</p>
      </Link>
      <input
        type="checkbox"
        onChange={handleInputChange}
        // value="test??"
        id={`app-${uid}`}
        checked={props.selected}
        className="hidden"
      />
      <label htmlFor={`app-${uid}`} className={`block h-8 w-8 ${color} absolute z-10 inset-0`} />
    </div>
  )
}

export default AppCard
