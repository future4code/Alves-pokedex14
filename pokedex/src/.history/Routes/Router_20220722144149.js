import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from '../Pages/DetailsPage/Details'
import Home from '../Pages/Home/Home'
import Pokedex from '../Pages/Pokedex/Pokedex'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path=':number' element={<Home/>}></Route>
                <Route path='pokedex' element={<Pokedex />}></Route>
                <Route path='details/:id' element={<Details/>}></Route>
                <Route path='/pokedex/details/:id' element={<Details/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
