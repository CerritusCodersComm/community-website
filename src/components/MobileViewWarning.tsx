import {FC} from "react";

export const MobileViewWarning: FC = () => {
    return (
        <div className="w-full flex justify-center items-center h-screen bg-white text-black">
            <p className="w-full text-center">
                Currently, this website is not responsive for mobile devices.
                Please view this website on a desktop or
                laptop computer.
            </p>
        </div>
    );
};
