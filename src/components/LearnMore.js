import React from "react";

const LearnMore = () => {
    return(
        <div className="bg-producing bg-cover bg-center dark:bg-gray-800">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 backdrop-filter backdrop-grayscale backdrop-blur-xs">
                <h2 className="text-3xl font-extrabold text-white dark:text-white sm:text-4xl filter drop-shadow-2xl">
                    <span className="block">
                        Be heard with the latest tracks.
                    </span>
                    <span className="block text-red-500 mt-2 shadow-2xl">
                    Never Miss a Beat.
                    </span>
                    
                </h2>
                <div className="flex flex-col my-10 max-w-4xl mx-auto overflow-hidden bg-white bg-opacity-40 rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-black md:dark:bg-gray-800">
                        <div className="px-6 py-6 md:px-8 md:py-0">
                            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates</h2>
                            
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                        <form>
                            <div className="flex flex-col overflow-hidden rounded-lg dark:border-gray-600 lg:flex-row">
                                <input className="px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email"/>
                                
                                <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnMore;