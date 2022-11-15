import Link from 'next/link';
import React from 'react';
import {cn} from 'utils';
import {IconType} from "react-icons";

/**
 * Properties for a button component.
 */
type ButtonProps = {
    variant:
        | 'join'
        | 'join-small';
    className?: string;
    onClick?: (e: MouseEvent) => void;
    href?: string;
    icon?: IconType;
    iconSize?: number
    children?: React.ReactNode;
    buttonRef?: React.Ref<HTMLButtonElement>;
    id?: string;
};

/**
 * Pre-defined styling
 */
const variants = {
    join: "w-[100px] h-[100px] flex bg-[#f5f6fa] rounded-full mx-[30px] " +
        "justify-center items-center opacity-80 hover:opacity-100 hover:text-[#365b9f] " +
        "leading-[110px] shadow-[#dcdde1] shadow-md hover:shadow-xl hover:transition-all",
    "join-small": "w-[48px] h-[48px] flex bg-[#f5f6fa] rounded-full mx-[30px] " +
        "justify-center items-center opacity-80 hover:opacity-100 hover:text-[#365b9f] " +
        "leading-[110px] shadow-[#dcdde1] shadow-md hover:shadow-xl hover:transition-all"
};

/**
 * @param variant Variations relating to pre-defined styling of the element.
 * @param className Custom classes to be applied to the element.
 * @param href Custom url to be applied on click to the element.
 * @param children Child elements to be rendered within the component.
 */

const Button = ({
                    className,
                    onClick,
                    buttonRef,
                    href,
                    variant,
                    children,
                    icon,
                    iconSize
                }: ButtonProps) => (
    <button
        className={cn(
            variants[variant],
            className,
        )}
        // @ts-ignore
        onClick={onClick}
        ref={buttonRef}
    >
        {icon && React.createElement(icon, {size: iconSize})}
        {children}
    </button>
);
export default Button;