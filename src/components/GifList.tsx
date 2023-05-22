import { useContext, useEffect, useState } from 'react'
import GifBox from './GifBox'
import { GiphyContext } from '../context/GiphyContext'

function GifList() {
    const { gifs } = useContext(GiphyContext)

    return (
        <div className="w-[80%] mx-auto h-72 mt-16 flex flex-row justify-between items-center">
            {gifs.map((gif) => (
                <GifBox key={gif.id} gifUrl={gif?.images.fixed_height.url} />
            ))}
        </div>
    )
}

export default GifList
