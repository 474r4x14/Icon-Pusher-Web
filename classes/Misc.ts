class Misc {
  static uid = 0
  static getUID()
  {
      this.uid++
      return this.uid
  }



  static getVal(key:string, defaultVal:any)
  {
  if (typeof window === "undefined") {
    return defaultVal;
  }
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return initialValue
    return item ? JSON.parse(item) : defaultVal;
  } catch (error) {
    // If error also return initialValue
    console.log(error);
  }
    return defaultVal;

  }

  static setVal(key:string, val:any){
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(val));
    }
  //} catch (error) {
  //}
  }

  static slug(str:string, delimiter:string)
  {
    let newStr = str.replace(/[\[\]{}()]/, "");
    newStr = newStr.trim()
    newStr = newStr.toLowerCase()
    newStr = newStr.replaceAll(/[\/_|+ -]+/g, delimiter);
    return newStr
  }



    /*
// Hook
static useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
    */
}
export default Misc