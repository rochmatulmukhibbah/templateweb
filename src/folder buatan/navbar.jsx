const Navbar= () => {
    return (
        <nav className="flex justify-between items-center p-3 bg-gray-600 text-white">
          <div className="flex ml-5">
        <img src="analytics.png" alt="gambaratas" className="w-8 h-8" />
        <div className="text-lg font-bold pl-3">
          My Website
        </div>
          </div>
          <div>
        <div className="space-x-7 mr-5">
          <a href="#home" className="hover:text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </div>
          </div>
      </nav>
    )
}
export default Navbar