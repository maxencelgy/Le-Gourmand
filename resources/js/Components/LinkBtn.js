import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const LinkBtn = ({href, children, className = ""}) => {
    const defaultClasses = "hover:bg-purple-500 hover:text-white duration-300 shadow-lg hover:cursor-pointer text-lg bg-yellow-500 px-6 py-2 text-purple-500 rounded-xl !font-primaryBold";
    return (
        <Link
            className={`${defaultClasses} ${className}`}
            href={href}
        >
            {children}
        </Link>
    )
}

export default LinkBtn;
