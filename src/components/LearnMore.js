import React from "react";

const LearnMore = () => {
    return(
        <div className="bg-producing bg-cover bg-center dark:bg-gray-800">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 backdrop-filter backdrop-grayscale backdrop-blur-xs">
                <h2 className="text-3xl font-extrabold text-white dark:text-white sm:text-4xl filter drop-shadow-2xl">
                    <span className="block">
                        Want to be be heard with the latest tracks?
                    </span>
                    <span className="block text-red-500 mt-2 shadow-2xl">
                    Never Miss a Beat.
                    </span>
                    
                </h2>
                {/* <p className="text-xl mt-4 max-w-md mx-auto text-red-500">
                    Stay in the know with the tracks you can bring to your producer
                </p> */}
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow-2xl">
                        <button type="button" className="py-4 px-6  bg-red-400 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 
                        text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
                        focus:ring-offset-2  rounded-lg ">
                            View the catalog now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnMore;