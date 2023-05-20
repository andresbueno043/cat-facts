import { useEffect, useState } from 'react'
import GifBox from './GifBox'
import Gif from '../@types/giphy'

function GifList() {
    const [gifs, setGifs] = useState<Array<Gif>>([])

    const apiKey = import.meta.env.VITE_API_KEY
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${'cat'}&limit=3`

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const fetchedGifs = data.data
                setGifs(fetchedGifs)
            })
            .catch((error) => {
                console.error('Error looking for the gifs: ', error)
            })
    }, [gifs])

    return (
        <div className="w-[80%] mx-auto h-72 mt-16 flex flex-row justify-between items-center">
            {gifs.map((gif) => (
                <GifBox key={gif.id} gifUrl={gif?.images.fixed_height.url} />
            ))}
        </div>
    )
}

export default GifList
