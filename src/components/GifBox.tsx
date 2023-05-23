import React from 'react'

type Props = {
    gifUrl: string
}

function GifBox({ gifUrl }: Props) {
    return (
        <div className="flex items-center rounded-md justify-center w-[30%] h-[80%] relative bg-white text-white text-uppercase text-lg font-semibold tracking-wider transition-all duration-500 ease-in-out transform hover:letter-spacing-xl hover:bg-blue-500 hover:text-blue-500 hover:shadow-lg p-1 y-1">
            <div className="rounded-md object-cover w-full h-full bg-gray-800">
                <img
                    className="w-full h-full border-black border-[1px]"
                    src={gifUrl}
                    alt=""
                />
                <i></i>
            </div>
        </div>
    )
}

export default GifBox
