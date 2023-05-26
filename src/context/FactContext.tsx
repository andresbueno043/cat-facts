// FactContext.tsx
import { useEffect, useState, createContext, ReactNode } from 'react'
import { FactContextProps } from '../@types/context'

// Create the FactContext
const FactContext = createContext<FactContextProps>({
    catFact: '',
    fetchFact: () => {
        /* fetchFact */
    },
})

interface FactContextProviderProps {
    children: ReactNode
}

function FactContextProvider({ children }: FactContextProviderProps) {
    const [catFact, setCatFact] = useState<string>('')

    const fetchFact = () => {
        fetch('https://catfact.ninja/fact')
            .then((response) => response.json())
            .then((data) => {
                const fact: string = data.fact
                setCatFact(fact)
            })
            .catch((error) => {
                console.error('Error fetching cat fact:', error)
            })
    }

    useEffect(() => {
        fetchFact()
    }, [])

    return (
        <FactContext.Provider value={{ catFact, fetchFact }}>
            {children}
        </FactContext.Provider>
    )
}

export { FactContext, FactContextProvider }
