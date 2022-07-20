import React, {useState} from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {



    return (
        <GlobalStateContext.Provider>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
