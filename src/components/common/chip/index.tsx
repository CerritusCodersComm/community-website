import React from 'react';

const Chip = (props) => {
    return (
        <span
            className="px-4 rounded-full text-black bg-gray-200 font-semibold text-sm w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            {props.name}
        </span>
    );
};

export default Chip;