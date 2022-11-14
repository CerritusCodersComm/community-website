import React from "react";
import Chip from "./common/chip";
import {ellipsisText} from "../utils";

export interface ProjectProps {
    idx: number;
    name: string;
    description: string;
    link: string;
    techStack: TechStackProps[];
    category: string[];
    author: string
}

export interface TechStackProps {
    idx: number;
    name: string;
}

export const ProjectCard = ({
                                idx,
                                name,
                                description,
                                link,
                                techStack,
                                category,
                                author,
                            }: ProjectProps) => {

    return (
        <div className="card w-96 bg-white min-h-[260px] shadow-xl">
            <div className="p-6 text-left">
                <div className="-mt-4 flex space-x-2 text-xl items-center">
                    <span className="font-bold text-primary" onClick={
                        () => window.open(link, "_blank")
                    } style={{cursor: 'pointer'}}
                    >{idx + 1 + "."}&nbsp;&nbsp; {name}</span>

                </div>
                <div className="grid grid-cols-1 text-s mb-2">
                    <div className="flex space-x-2 items-center">
                        <h2>By {author}</h2>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 grid-flow-row">
                    {techStack.map((props, idx) => (
                        <Chip key={idx} {...props} idx={idx}/>
                    ))}
                </div>

                <p className="my-5">{ellipsisText(description, 150)}</p>
            </div>
        </div>
    );
};
