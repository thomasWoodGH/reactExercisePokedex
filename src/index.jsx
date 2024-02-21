import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

import Main from "./Main"

const root = createRoot(document.getElementById("root"))

root.render(
    <Router>
        <Main />
    </Router>
    )