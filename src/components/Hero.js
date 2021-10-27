import React from "react";
import rfrwhite from './rfr-white.png';

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-black to-gray text-white body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={rfrwhite}/> */}
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Sounds that sound good with anyone.</h1>
                    <p className="mb-8 leading-relaxed">Whether you're an aspiring vocalist, amateur filmmaker, or an enterprise, there's a goldmine for your goals. </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
