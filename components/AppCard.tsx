import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import Image from 'next/image'

import Misc from '../classes/Misc';
import { IconCheck } from '@tabler/icons-react';

function AppCard (props:appCardPropsType) {
  var isLink = props.isLink ?? true


  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      // console.log('AppCard', 'calling props.onAdd')
      props.onAdd(props.appData)
    } else {
      props.onRemove(props.appData)
    }
  }

  let uid = Misc.getUID();

  const color = props.selected ? "bg-green-400" : "bg-blue-400";
  const tick = props.selected ? "text-black after:flex after:top-0 after:absolute after:w-full after:h-full after:justify-center after:align-center after:content-['\\2713']" : "";
  const check = props.selected ? <IconCheck className="absolute top-0" /> : <></>

var content = <>
  <Image src={props.appData.icon} className="rounded" width={200} height={200} alt={`${props.appData.name}`} />
</>
  if (isLink) {
    content = <Link
      href={`/package/${props.appData.packageName}`}
      onClick={()=>{props.setSearchKeyword("")}}
    >
      {content}
      <span className="text-center dark:text-green-400 transitionc-olor duration-500 block">{props.appData.name}</span>
    </Link>
  }

  return (
    // <div className={styles.appCard}>
    <div className="relative">
      {content}
      <input
        type="checkbox"
        onChange={handleInputChange}
        // value="test??"
        id={`app-${uid}`}
        checked={props.selected}
        className="hidden"
      />
      <label htmlFor={`app-${uid}`} className={`block h-8 w-8 border-solid border-2 border-emerald-700 absolute z-10 inset-0 rounded-md ${tick}`} >
        <span className={`block ${color}  opacity-50 w-full h-full`}></span>
        {check}
      </label>
    </div>
  )
}

export default AppCard
