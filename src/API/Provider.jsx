import React, { createContext } from 'react'

export const context=createContext()
export default function Provider(props) {
    return (
        <div>

            <context.Provider value={{}}>
                {props.children}
            </context.Provider>
            
        </div>
    )
}
