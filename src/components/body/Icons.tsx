import { useState } from "react";


interface IconsProps {
    icon: string;
    name: string;
}

export const Icons: React.FC<IconsProps> = ({ icon, name }) => {

    const [hoveredTech, setHoveredTech] = useState(false);


    return (
        <picture
            className="hover:scale-110 cursor-pointer relative transition-all duration-300"
            onMouseEnter={() => setHoveredTech(true)}
            onMouseLeave={() => setHoveredTech(false)}
        >
            <img src={icon} alt={name} />
            {hoveredTech && (
                <span className="bg-white px-1 text-sm border border-black absolute top-100  right-0 transform  transition-opacity duration-300 pointer-events-none">
                    {name}
                </span>
            )}
        </picture>
    )
}
