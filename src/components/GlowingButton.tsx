function GlowingButton() {
    return (
        <div className="flex items-center justify-center">
            <a
                href="#"
                className="relative bg-white text-white text-uppercase text-lg font-semibold tracking-wider py-2 px-6 transition-all duration-500 ease-in-out transform hover:letter-spacing-xl hover:bg-blue-500 hover:text-blue-500 hover:shadow-lg"
            >
                <span className="relative z-10">Button</span>
                <i className="absolute inset-0"></i>
            </a>
        </div>
    )
}

export default GlowingButton
