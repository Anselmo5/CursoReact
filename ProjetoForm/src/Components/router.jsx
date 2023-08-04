import React from 'react'
import { Router, BrowserRouter} from "react-router-dom"

import Home from './Home'

const router = () => {
  return (
    <div>
      <BrowserRouter>
        <Router component = {Home} path="./Home" exact />
      </BrowserRouter>
    </div>
  )
}

export default router
