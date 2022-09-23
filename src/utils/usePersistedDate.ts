import { useEffect, useState } from "react";

function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(initialState);
  // const keyStorage = '@template-vite:dark-mode-1.0.0'

  // const [state, setState] = useState(() => {
  //   const storageValue = localStorage.getItem(keyStorage);

  //   if (storageValue) {
  //     return JSON.parse(storageValue);
  //   } else {
  //     return initialState;
  //   }
  // });

  // useEffect(() => {
  //   localStorage.setItem(keyStorage, JSON.stringify(state));
  // }, [keyStorage, state]);

  return [state, setState];
}

export default usePersistedState;
