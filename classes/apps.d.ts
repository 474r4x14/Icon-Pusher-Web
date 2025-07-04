type appType = {
  packageName:string,
  id:number,
  name:string,
  icon:string,
  iconDownload:string,
  selected:boolean,
  components:string[],
  version:string,
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
  appData:appType,
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
  results: searchResultstPropsType,
}

type devicePropsType = {
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
  results: searchResultstPropsType,
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

type latestPropsType = {
  apps:appType[],
  versions:appType[],
}

type searchResultstPropsType = {
  apps:appType[],
}

