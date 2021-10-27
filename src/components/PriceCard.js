import React from "react";

const PriceCard = ({ 
    name = '', 
    price = 0, 
    currency ='$',
    features = [],
    nonfeatures = [],
    }) => {
    return (
        <div className=" flex-1 justify-center items-center px-2 py-12">
            <div className=" shadow-lg rounded-2xl bg-black dark:bg-gray-800 py-4 px-4">
                <div className="flex text-white items-center justify-between">
                    <p className="text-4xl font-medium mb-4 pr-8 lg:pr-4">
                        {name}
                    </p>
                    <p className="text-3xl font-bold flex flex-col text-green-300">
                        {currency}{price}
                        <span className="font-thin text-right text-sm">
                            one-time
                        </span>
                    </p>
                </div>
                <p className="text-white text-md mt-4">
                    Plan includes :
                </p>
                <ul className="text-sm text-white w-full mt-6 mb-6">
                    { features.map( (feature, index) => (
                        <li key={ index } className="mb-3 flex items-center ">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            {feature}
                        </li>
                    ))}
                    { nonfeatures.map( (nonfeature, index) => (
                        <li key={ index } className="mb-3 flex items-center opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        {nonfeature}
                    </li>
                    ))}
                    
                </ul>
                <div>
                    <button type="button" className="w-full px-3 py-3 text-sm shadow rounded-lg text-red-500 bg-white hover:bg-gray-100 ">
                        View License Terms
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PriceCard;
