import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FruitList from './List/Task-1_List_of_Items'
import Components from './Hooks/Redux_UseSelector_UseDispatch/Components'
import FetchData from './Hooks/Task_2_useEffect_Hooks'
import Counter from './Hooks/Task_1_useState_Hooks'
import Task_4_useRef_Hooks from './Hooks/Task_4_useRef_Hooks'
import CRUD from './LocalStorage_CRUD/CRUD'
import API from './API_Project/LifeCycleMethod'
import Message from './API_Project/Message'
import UserList from './List/UsersLists'

function App() {

  return (
    <>
      <FruitList />
      <Counter />
      <FetchData />

      <h1>UseSelector & UseDispatch Example</h1>
      <Components />
      <Task_4_useRef_Hooks />

      <h1>LocalStorage Assignment</h1>
      <CRUD />

      <h1>API PROJECT</h1>
      <API />

      <h1>LifeCycle Method Example</h1>
      <Message />

      <h1>Users</h1>
      <UserList />
    </>
  )
}

export default App


