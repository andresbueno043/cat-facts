// FactContext.tsx
import { useEffect, useState, createContext, ReactNode } from 'react'
import { FactContextProps } from '../@types/context'

// Create the FactContext
const FactContext = createContext<FactContextProps>({
    catFact: '',
})

interface FactContextProviderProps {
    children: ReactNode
}

function FactContextProvider({ children }: FactContextProviderProps) {
    const [catFact, setCatFact] = useState<string>('')

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then((response) => response.json())
            .then((data) => {
                const fact: string = data.fact
                setCatFact(fact)
            })
            .catch((error) => {
                console.error('Error fetching cat fact:', error)
            })
    }, [])

    return (
        <FactContext.Provider value={{ catFact }}>
            {children}
        </FactContext.Provider>
    )
}

export { FactContext, FactContextProvider }
