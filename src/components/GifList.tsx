import { useContext, useEffect, useState } from 'react'
import GifBox from './GifBox'
import Gif from '../@types/giphy'
import { FactContext } from '../context/FactContext'

function GifList() {
    const { gifs } = useContext(FactContext)

    return (
        <div className="w-[80%] mx-auto h-72 mt-16 flex flex-row justify-between items-center">
            {gifs.map((gif) => (
                <GifBox key={gif.id} gifUrl={gif?.images.fixed_height.url} />
            ))}
        </div>
    )
}

export default GifList
