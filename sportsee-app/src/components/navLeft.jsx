
import PropTypes from 'prop-types';
import React from 'react';
import MeditationIcon from "../assets/icons/meditation.svg?react";
import NatationIcon from "../assets/icons/natation.svg?react";
import VeloIcon from "../assets/icons/velo.svg?react";
import MusculationIcon from "../assets/icons/musculation.svg?react";

const icons = [
    { component: MeditationIcon, alt: 'Méditation' },
    { component: NatationIcon, alt: 'Natation' },
    { component: VeloIcon, alt: 'Vélo' },
    { component: MusculationIcon, alt: 'Musculation' },
];
/**
 * IconButton component that renders a button with a given icon component.
 *
 * @param {Object} props - The component props
 * @param {React.ElementType} props.IconComponent - The icon component to render inside the button
 * @returns {JSX.Element} The rendered IconButton component
 */

function IconButton({ IconComponent }) {
    return (
        <button className="bg-white rounded-md flex items-center justify-center w-[64px] h-[64px]">
            <IconComponent className="w-16 h-16" />
        </button>
    );
}

IconButton.propTypes = {
    IconComponent: PropTypes.elementType.isRequired,
};

function NavLeft() {
    return (
        <nav className="bg-black w-[117px] min-h-screen flex flex-col items-center">
            <div className="flex flex-col items-center justify-center flex-grow gap-8">
                {icons.map(({ component: IconComponent }, index) => (
                    <IconButton key={index} IconComponent={IconComponent} />
                ))}
            </div>
            <p className="text-white rotate-[-90deg] whitespace-nowrap mb-[100px] text-sm">
                Copyright, SportSee 2020
            </p>
        </nav>
    );
}

export default NavLeft;
