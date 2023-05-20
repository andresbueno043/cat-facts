import React from 'react'

type Props = {
    gifUrl: string
}

function GifBox({ gifUrl }: Props) {
    return (
        <div className="flex items-center border-black border-[2px] rounded-[30px] justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-[30%] h-[80%]">
            <div className="rounded-[30px] object-cover w-[95%] h-[94%] bg-gray-800">
                <img
                    className="w-full h-full rounded-[30px] border-black border-[2px]"
                    src={gifUrl}
                    alt=""
                />
            </div>
        </div>
    )
}

export default GifBox
