import { useState, useEffect } from 'react'

function FactBox() {
    const [fact, setFact] = useState<string>('')

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then((res) => res.json())
            .then((data) => {
                const catFact = data.fact
                setFact(catFact)
            })
            .catch((error) => {
                console.error('Error al obtener el hecho sobre gatos:', error)
            })
    }, [])

    return (
        <div className="flex justify-center items-center rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-36 w-[60%] mx-auto mt-8">
            <div className="flex justify-center items-center w-[98%] h-[90%] rounded-md bg-gray-800 px-10 py-6">
                <h1 className="text-white text-xl">{fact}</h1>
            </div>
        </div>
    )
}

export default FactBox
