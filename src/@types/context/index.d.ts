import Gif from '../@types/giphy'

interface FactContextProps {
    catFact: string
    fetchFact: () => void
}

interface GiphyContextProps {
    gifs: Gif[]
}

export { FactContextProps, GiphyContextProps }
