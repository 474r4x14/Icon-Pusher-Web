import React, { ReactElement, useState } from "react";
import Link from "next/link";
import style from './SelectedApps.module.scss';

type appCardsType = {
  packageName:string,
  id:number,
  name:string,
  icon:string,
}

type propData = {
  appData:appCardsType[],
  setSearchKeyword:Function,
}

function SelectedApps (props:propData) {
  console.log('selectedApps',props)
  const [selectedAppData, setSelectedAppData] = useState<appCardsType[]>([]);

  const renderSelected = () => {
    if (selectedApps.length > 5) {
      const slice = selectedApps.slice(0,5)
      const overflow = selectedApps.length - 5
      return (<>{slice} +{overflow}</>)
    }
    return selectedApps
  }

  let selectedApps:ReactElement[] = [];
  props.appData.forEach((app) => {
    console.log('state app data',app)
    selectedApps.push(
      <Link
      href={`/package/${app.packageName}`}
      onClick={()=>{props.setSearchKeyword("")}}
    >
      <img src={app.icon} className="w-16" />
      </Link>
    )
  })
    return(
      <div className={style.selected}>
        <h1>Selected</h1>
        <div className="flex">
          {renderSelected()}
        </div>
      </div>
    )
  }

  export default SelectedApps
