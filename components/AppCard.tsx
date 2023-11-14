import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
// import MyLayout from "../layouts/MyLayout";
import styles from './AppCard.module.scss'
import Misc from '../classes/Misc';

// type GreetFunction = (a: string) => void;
/*
type SomeConstructor = {
  new (s: string): SomeObject;
};
*/



type propsType = {
  name:string,
  appData:appType,
  onAdd:Function,
  onRemove:Function,
}


function AppCard (props:propsType) {



const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(props.appData)
    // console.log(event.target.checked)

    console.log('selected',event.target.checked)
    if (event.target.checked) {
        console.log('AppCard', 'calling props.onAdd')
        props.onAdd(props.appData)
    } else {
        props.onRemove(props.appData)
    }

    //this.props.onNameChange(event.target.value)
  }


 let uid = Misc.getUID();



//  console.log('AppCard data', props.appData)
    return (
        // let selected = false;
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
              // isChecked={this.props.appData.selected}
            />
            <label htmlFor={`app-${uid}`}>test lbl</label>
        </div>
    )
  }

  export default AppCard
