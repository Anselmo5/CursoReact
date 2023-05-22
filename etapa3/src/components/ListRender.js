import React from 'react'
import { useState } from 'react'

const ListRender = () => {

  const [users, setUsers] = useState([
    {id: 1, name: "Anselmo", age: 17},
    {id: 2, name : "Gabriel", age: 18}
  ])

const deleteRandom = () =>{
  const randomNumber = Math.floor(Math.random() *4)
  setUsers((prevUsers) => {
    return prevUsers.filter((user) => randomNumber == user.id)
  })
}

  return (
    <div>
        <ul>
        {users.map((user) => (
                <li key={user.id}> 
                  {user.name} {user.age} {/*Uma segunda forma que temos para rendenrizar uma lista */}
                </li>
              ))}
              <button onClick={deleteRandom}>delete</button>
        </ul>
    </div>
  )
}

export default ListRender