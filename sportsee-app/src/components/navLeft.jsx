import React from 'react';
import MeditationIcon from "../assets/icons/meditation.svg?react";
import NatationIcon from "../assets/icons/natation.svg?react";
import VeloIcon from "../assets/icons/velo.svg?react";
import MusculationIcon from "../assets/icons/musculation.svg?react";

function NavLeft() {
    return (
        <nav className="bg-black w-[117px] min-h-screen flex flex-col items-center">
            <div className="flex flex-col items-center justify-center flex-grow gap-8">
                <button className=" bg-white rounded-md flex items-center justify-center w-[64px] h-[64px]">
                    <MeditationIcon className="w-16 h-16" />
                </button>
                <button className=" bg-white rounded-md flex items-center justify-center w-[64px] h-[64px]">
                    <NatationIcon className="w-16 h-16" />
                </button>
                <button className=" bg-white rounded-md flex items-center justify-center w-[64px] h-[64px]">
                    <VeloIcon className="w-16 h-16" />
                </button>
                <button className=" bg-white rounded-md flex items-center justify-center w-[64px] h-[64px]">
                    <MusculationIcon className="w-16 h-16" />
                </button>
            </div>
            <p className="text-white rotate-[-90deg] whitespace-nowrap mb-[59px] text-sm">Copyright, SportSee 2020</p>
        </nav>
    );
}

export default NavLeft;

