import React, { ReactElement, useState } from "react";
import style from './SelectedApps.module.scss';

type appCardsType = {
  packageName:string,
  id:number,
  name:string,
  icon:string,
}

type propData = {
  appData:appCardsType[],
}

function SelectedApps (props:propData) {
  console.log('selectedApps',props)
  const [selectedAppData, setSelectedAppData] = useState<appCardsType[]>([]);

  let selectedApps:ReactElement[] = [];
  props.appData.forEach((app) => {
    console.log('state app data',app)
    selectedApps.push(<img src={app.icon} className="w-16" />)
  })
    return(
      <div className={style.selected}>
        <h1>Selected</h1>
        <div className="flex">
          {selectedApps}
        </div>
      </div>
    )
  }

  export default SelectedApps
