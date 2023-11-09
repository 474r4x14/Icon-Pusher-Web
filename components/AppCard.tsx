import React, { useState } from "react";
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
  appData:{
    packageName:string,
    name:string,
    icon:string,
  }
}


function AppCard (props:propsType) {


/*
handleInputChange = event => {
    console.log(this.props.appData)
    console.log('selected',event.target.checked)
    if (event.target.checked) {
        console.log('AppCard', 'calling props.onAdd')
        this.props.onAdd(this.props.appData)
    } else {
        this.props.onRemove(this.props.appData.id)
    }
    //this.props.onNameChange(event.target.value)
  }
  */

 let uid = Misc.getUID();



 console.log('AppCard data', props.appData)
    return (
        // let selected = false;
        <div className={styles.appCard}>
            <Link href={`/package/${props.appData.packageName}`}>
                    <img src={props.appData.icon} />
                    <p>{props.appData.name}</p>
            </Link>
            <input
              type="checkbox"
              // onChange={this.handleInputChange}
              value="test??"
              id={`app-${uid}`}
              // isChecked={this.props.appData.selected}
            />
            <label htmlFor={`app-${uid}`}>test lbl</label>
        </div>
    )
  }

  export default AppCard
