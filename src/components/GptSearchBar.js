import React from "react";

const GptSearchBar = () => {

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 bg-opacity-50">
                <input
                    type="text"
                    placeholder="What would you like to watch today?"
                    className="p-4 m-4 col-span-9"
                ></input>

                <button
                    className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
                >Search</button>
            </form>
        </div>
    );
};

export default GptSearchBar;
