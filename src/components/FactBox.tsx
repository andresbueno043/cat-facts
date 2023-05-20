import { useState, useEffect, useContext } from 'react'
import { FactContext } from '../context/FactContext'

function FactBox() {
    const { catFact } = useContext(FactContext)

    return (
        <div className="flex justify-center items-center rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-36 w-[60%] mx-auto mt-8">
            <div className="flex justify-center items-center w-[98%] h-[90%] rounded-md bg-gray-800 px-10 py-6">
                <h1 className="text-white text-xl">{catFact}</h1>
            </div>
        </div>
    )
}

export default FactBox
