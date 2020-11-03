import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Dash from "../modules/Dash"

const App = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Router>
        <Dash path="/app/dashboard" />
      </Router>
    </>
  )
}

export default App
