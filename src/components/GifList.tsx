import GiftBox from './GiftBox'

function GifList() {
    return (
        <div className="w-[80%] mx-auto h-72 mt-16 flex flex-row justify-between items-center">
            <GiftBox gifUrl="https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif" />
            <GiftBox gifUrl="https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif" />
            <GiftBox gifUrl="https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif" />
        </div>
    )
}

export default GifList
