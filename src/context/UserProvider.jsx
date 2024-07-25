import React, { createContext } from 'react'

export const userContext =  createContext()

const UserProvider = () => {

  const [usuario, setUsuario] = useState(null);


  return (
    <div>UserProvider</div>
  )
}

export default UserProvider