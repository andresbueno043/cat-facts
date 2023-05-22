import Gif from '../@types/giphy'

interface FactContextProps {
    catFact: string
}

interface GiphyContextProps {
    gifs: Gif[]
}

export { FactContextProps, GiphyContextProps }
