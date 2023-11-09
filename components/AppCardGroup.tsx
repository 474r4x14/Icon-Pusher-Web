import React, { useState } from "react";
import Link from "next/link";
// import MyLayout from "../layouts/MyLayout";
import AppCard from './AppCard';
import styles from './AppCard.module.scss'

type appCardsType = {
  packageName:string,
  name:string,
  icon:string,
}

type propsType = {
  appCards:appCardsType[],
  moreLink?:string,
  useMax:boolean,
}

function AppCardGroup(props:propsType) {

  const getCards = () => {
    var cards = [];

          var results = <span>niet</span>

        if (props.appCards.length > 0) {
            var more = null;
            if (props.appCards.length >= 10 && props.moreLink) {
                more = <Link href={props.moreLink}>
                    MOAR
                </Link>
            }
            var resultList = []
            var i = 0
            var useMax = true
            // if (useMax == 'false') {
                useMax = false
            // }


            var max = props.appCards.length

            console.log('USE MAX',useMax, max, useMax)

            if (useMax && max > 9) {
                max = 9
            }

            console.log('AppCardGroup max',max)
            for (i = 0; i < max; i++) {
                var app = props.appCards[i]
                // checkSelected(app)
                console.log('ADDING CARD DATA', i,app)
                cards.push(<li>
                <AppCard
                  name={app.name}
                  appData={app}
                  // onAdd={this.addApp}
                  // onRemove={this.removeApp}
                />
                </li>)
            }
            results = <div><ul className={styles.appCardGroup}>{cards}</ul>{more}</div>
        }
        return results;
}

/*
        addApp = appData => {
        console.log('appCardGroup','add card data', appData)
//        this.props.onAdd()
console.log('AppCardGroup props',this.props)
        this.props.onAdd(appData)
    }

    removeApp = appData => {
        this.props.onRemove(appData)
    }

    checkSelected = appData => {
        this.props.onCheckSelected(appData)
    }
*/

    // var cards = this.getCards()
    return (
        <div>card group! {getCards()}</div>
    )
}
export default AppCardGroup
