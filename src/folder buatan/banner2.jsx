const Banner2 = () => {
    return (
<div>
        <div className="w-full h-99 bg-gray-700 flex">
        <div className="w-2/5 h-99 pl-25">
            <img src="Open Peeps - Bust.png" alt="org"/>
            </div>
            <div className="w-3/5 h-99">
            <div className="flex">
            <h1 className="text-white text-2xl font-bold pl-7 pt-15">Unleash Your Creativity</h1>
            <img 
  src="wired-outline-120-folder-hover-adding-files.gif" 
  className="h-10 w-12 rounded-lg pl-3 mt-15 object-cover" 
  alt="Contoh Gambar" 
/>
            </div>
        <h1 className="text-red-500 text-2xl font-bold pl-7 pt-3">Right Now</h1>
        <p className="text-white text-base pl-7 pt-3">Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow these simple steps to turn your vision into reality.</p>
        <a href="#" className="mt-2 inline-block bg-red-500 text-white py-2 px-4 rounded 
             border border-transparent hover:border-white hover:bg-red-400 hover:text-black 
             transition duration-200 ml-7 mt-4">Go somewhere</a>
            </div>
        </div>
        </div>
    )
}
export default Banner2