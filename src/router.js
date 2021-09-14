import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Home from '@/modules/Home/router'
import Eposide from '@/modules/Episode/router'

export default function App() {
  return (
    <Router>
      <Redirect from="/" to="/1" />
      <Home />
      <Eposide />
    </Router>
  )
}
