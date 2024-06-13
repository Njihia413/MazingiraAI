import { createContext, useEffect, useState } from "react";
import { apiHost } from "../utils/apiHost";

const UserContext = createContext();

function UserDetailContextProvider({children}){
  const data = localStorage.getItem('data')
  const localStorageData = data? JSON.parse(atob(localStorage.getItem('data') || '') || null)  : null
  const [userData, setUserData] = useState(localStorageData?.user)

    useEffect(() => {
        console.log("data: ", data)
        fetch(`${apiHost}/me`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorageData?.accessToken}`
            }
          }).then(res => {
              if(res.ok){
                res.json().then(d => {
                    const data = {
                      user: d.user,
                      accessToken: d.access_token
                    }
                    localStorage.setItem('data', btoa(JSON.stringify(data)))
                    setUserData(data.user)
                })
              }else {
                localStorage.clear()
                setUserData(null)
              }
          })
    }, [])

    function logout(){
        localStorage.clear()
        setUserData(null)
    }

    return (
        <UserContext.Provider value={{logout, userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserDetailContextProvider }