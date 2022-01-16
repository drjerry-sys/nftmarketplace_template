import Image from "next/image";

const Navbar = () => {
    return (
            <nav className="flex static md:fixed top-0 left-0 right-0 drop-shadow items-center justify-between flex-wrap border-y border-t-0 bg-white p-6">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
                    <Image src="/logo.jpeg" alt="logo" width="100" height="30" />
                </div>

                <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
                    <div className="text-sm sm:flex-grow">
                        <a
                            href="#"
                            className="block text-lg font-medium mt-4 sm:inline-block sm:mt-0 text-gray-800 hover:text-white mr-4"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block text-lg font-medium mt-4 sm:inline-block sm:mt-0 text-gray-800 hover:text-white mr-4"
                        >
                            Leaderboard
                        </a>
                        <a
                            href="#"
                            className="block text-lg font-medium mt-4 sm:inline-block sm:mt-0 text-gray-800 hover:text-white"
                        >
                            Explore
                        </a>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="inline-block font-medium text-sm px-4 py-2 mx-2 bg-gray-200 leading-none border rounded text-gray-800 border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
                            >Sign In
                        </a>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
