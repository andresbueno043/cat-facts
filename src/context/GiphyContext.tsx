// GiphyContext.tsx
import {
    useEffect,
    useState,
    createContext,
    ReactNode,
    useContext,
} from 'react'
import { GiphyContextProps } from '../@types/context'
import Gif from '../@types/giphy'
import { FactContext } from './FactContext'

// Create the GiphyContext
const GiphyContext = createContext<GiphyContextProps>({
    gifs: [],
})

interface GiphyContextProviderProps {
    children: ReactNode
}

function GiphyContextProvider({ children }: GiphyContextProviderProps) {
    const { catFact } = useContext(FactContext)
    const [gifs, setGifs] = useState<Gif[]>([])

    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY
        const searchTerms: string[] = catFact.split(' ').slice(0, 3)
        const searchTerm: string = encodeURIComponent(searchTerms.join(' '))

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=3`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const fetchedGifs: Gif[] = data.data
                setGifs(fetchedGifs)
            })
            .catch((error) => {
                console.error('Error fetching GIFs:', error)
            })
    }, [catFact])

    return (
        <GiphyContext.Provider value={{ gifs }}>
            {children}
        </GiphyContext.Provider>
    )
}

export { GiphyContext, GiphyContextProvider }
