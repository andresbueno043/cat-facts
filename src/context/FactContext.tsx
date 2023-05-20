import { useEffect, useState, createContext, ReactNode } from 'react'
import Gif from '../@types/giphy'

interface FactContextProps {
    catFact: string
    gifs: Gif[]
}

interface FactContextProviderProps {
    children: ReactNode
}

// Creamos el contexto FactContext
const FactContext = createContext<FactContextProps>({
    catFact: '',
    gifs: [],
})

function FactContextProvider({ children }: FactContextProviderProps) {
    const [catFact, setCatFact] = useState<string>('')
    const [gifs, setGifs] = useState<Gif[]>([])

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then((response) => response.json())
            .then((data) => {
                const fact: string = data.fact
                setCatFact(fact)

                const apiKey = 'TU_API_KEY' // Reemplaza con tu propia API key de Giphy
                const searchTerm: string = encodeURIComponent(fact)

                const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=3`

                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        const fetchedGifs: Gif[] = data.data
                        setGifs(fetchedGifs)
                    })
                    .catch((error) => {
                        console.error('Error al buscar los GIFs:', error)
                    })
            })
            .catch((error) => {
                console.error(
                    'Error al obtener el dato curioso sobre gatos:',
                    error
                )
            })
    }, [])

    const contextValue: FactContextProps = { catFact, gifs }

    return (
        <FactContext.Provider value={contextValue}>
            {children}
        </FactContext.Provider>
    )
}

export { FactContext, FactContextProvider }
