import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Pokedex, Home } from './components'
import Nav from './Nav'

import './Main.css'

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Nav/>}>
                    <Route index element={<Home />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                    <Route path="*" element={<h1>404: Page not found</h1>} />
                </Route>
            </Routes>
        </div>
    )
}