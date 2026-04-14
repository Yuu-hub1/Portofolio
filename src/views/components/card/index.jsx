import React from "react";
import { Icon } from "../icon";

export default function Card({ title, icon, children, className = "" }) {
    return (
        <div
            className={
                `w-full border-b-biru border-b-2 flex flex-col p-6 shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] 
                transition-all duration-300 cursor-pointer 
                hover:shadow-lg hover:bg-biru/10 hover:scale-[1.025] ${className}`
            }
        >
            <div className="flex items-center gap-5 mb-2 flex-col">
                {icon && <Icon name={icon} className="w-16 h-16" />}
                <h1 className="text-biru font-semibold text-lg">{title}</h1>
            </div>
            <span className="text-abu-tua text-center text-justify">
                {children}
            </span>
        </div>
    );
}