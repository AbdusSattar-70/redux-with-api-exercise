import React from 'react'
import { useSelector } from "react-redux";


const UsersView = () => {
  const userData = useSelector((state)=> state.user);
  const { users, isLoading, error } = userData;

  return (
    <div>
      { isLoading && <p>Please wait for a while data is loading...</p>}
      { error && <p>Oops! an error is occured</p>}
      { users && users.map((user) => {
        return ( <ul key={user.id}>
                  <li>{user.firstname}</li>
                   <li>{user.lastName}</li>
                </ul> )
        })}
    </div>
  )
}

export default UsersView