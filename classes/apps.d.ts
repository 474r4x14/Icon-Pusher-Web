type componentType = {

}

type appType = {
  packageName:string,
  id:number,
  name:string,
  icon:string,
  selected:boolean,
  components:string[],
}

type appType2 = {
  name:string,
  slug:string,
  icon:string,
  iconDownload:string,
  version:string,
  packageName:string,
  components:componentType[],
}


// Properties definitions

type homePropsType = {
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
  latestApps:{apps:appType[]},
  latestVersions:{apps:appType[]},
}


type selectedPropsType = {
  selectedApps:appType[],
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
  latest:{apps:appType[]},
}

type packageDetailsPropsType = {
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
}

type appCardGroupPropsType = {
  appCards:appType[],
  moreLink?:string,
  useMax?:boolean,
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
}

type packagePropData = {
  appData:appType[],
  setSearchKeyword:Function,
}

type searchKeywordPropsType = {
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
}

type devicePropsType = {
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
}


type headerPropsType = {
  onAdd:Function,
  onRemove: Function,
  onCheckSelected: Function,
  searchKeyword:string,
  setSearchKeyword:Function,
}

type appCardPropsType = {
  name:string,
  appData:appType,
  onAdd:Function,
  onRemove:Function,
  setSearchKeyword:Function,
  selected:boolean,
  isLink:boolean,
}

