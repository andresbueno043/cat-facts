import FactBox from './components/FactBox'
import GifList from './components/GifList'

function App() {
    return (
        <>
            <FactBox />
            <GifList />
            <div className="flex items-center justify-center">
                <a href="#">
                    <span>Button</span>
                    <i></i>
                </a>
            </div>
        </>
    )
}

export default App
