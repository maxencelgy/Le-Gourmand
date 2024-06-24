import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon, ShoppingBagIcon} from "@heroicons/react/solid";
import {Fragment, useEffect, useState} from "react";
import Logo from "../Logo";
import routes from "../routes";
import {Link, usePage} from "@inertiajs/inertia-react";
import ProfileDropdown from "./ProfileDropdown";

import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Button from "@/Components/Button";
import LinkBtn from "@/Components/LinkBtn";

//import ProfileDropdown from "./ProfileDropdown"
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const {auth} = usePage().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <nav
            className={` py-2 sticky top-0 z-[999] duration-150 mt-[-8rem] inset-x-0 ${scrolled ? 'bg-purple-600 text-white shadow-2xl   ' : 'bg-transparent text-gray-800'} lg:text-white`}>
            <div className="container h-16 lg:h-20 flex items-center justify-between lg:py-5">
                <div className="text-2xl">
                    <Link href="/">
                        <Logo className="w-[70%]"/>
                    </Link>
                </div>

                {/* Desktop */}
                <div className="hidden lg:flex items-center space-x-8  text-lg z-40 ">
                    <Link className="hover:text-yellow-500 duration-150" href={route("menu")}>{routes.menu.name}</Link>
                    <Link href="/#equipe" className="hover:text-yellow-500 duration-150"> Notre équipe</Link>
                    <Link className="hover:text-yellow-500 duration-150" href={route("service")}>{routes.service.name}</Link>
                    <Link href="/#ou" className="hover:text-yellow-500 duration-150">Localisation</Link>


                    {auth.user ? (
                        <>
                            <Link href={route("shopping-cart.index")}>
                                <svg className="w-6  stroke-current group-hover:stroke-white" width="29" height="29"
                                     viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.33341 27.4167C10.0468 27.4167 10.6251 26.8384 10.6251 26.125C10.6251 25.4117 10.0468 24.8334 9.33341 24.8334C8.62005 24.8334 8.04175 25.4117 8.04175 26.125C8.04175 26.8384 8.62005 27.4167 9.33341 27.4167Z"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M23.5417 27.4167C24.255 27.4167 24.8333 26.8384 24.8333 26.125C24.8333 25.4117 24.255 24.8334 23.5417 24.8334C22.8283 24.8334 22.25 25.4117 22.25 26.125C22.25 26.8384 22.8283 27.4167 23.5417 27.4167Z"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M1.64795 1.64795H4.23128L7.66712 17.6904C7.79315 18.278 8.12006 18.8032 8.59158 19.1757C9.06309 19.5482 9.6497 19.7446 10.2504 19.7313H22.8829C23.4709 19.7303 24.0409 19.5289 24.4989 19.1602C24.9568 18.7914 25.2753 18.2776 25.4017 17.7034L27.5329 8.10628H5.61337"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Link>
                            <ProfileDropdown user={auth.user}/>
                        </>
                    ) : (
                        <LinkBtn href={route("login")}>Connexion</LinkBtn>
                    )}
                </div>

                {/* burger mobil */}
                <div className="-mr-2 flex items-center justify-end lg:hidden">
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState
                            )
                        }
                        className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    !showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* list link mobil */}
            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " lg:hidden"
                }
            >
                <div className="space-y-1 pt-2 pb-3 ">
                    <ResponsiveNavLink
                        href={route("home")}
                        active={route().current("home")}
                    >
                        {routes.home.name}
                    </ResponsiveNavLink>

                    <ResponsiveNavLink
                        href={route("menu")}
                        active={route().current("menu")}
                    >
                        {routes.menu.name}
                    </ResponsiveNavLink>

                    <ResponsiveNavLink href="/#ou" >Localisation</ResponsiveNavLink>

                    <ResponsiveNavLink
                        href={route("service")}
                        active={route().current("service")}
                    >
                        {routes.service.name}
                    </ResponsiveNavLink>


                </div>
                {auth.user && (
                    <div className="border-t border-gray-200 pt-4 pb-1 ">
                        <div className="px-4">
                            <Link href={route("my_account")}>
                                {auth.user.name}
                            </Link>

                            <div>
                                <span className="font-text text-sm text-gray-500">
                                    {auth.user.email}
                                </span>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                <div>Déconexion</div>
                            </ResponsiveNavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

const MenuHeader = ({title, data}) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center ">
                <span className=" ">{title}</span>
                <ChevronDownIcon className="h-5 w-5"/>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute right-0 w-60 mt-2 origin-top-right bg-yellow-500 divide-y divide-yellow-600 divide-opacity-30  shadow-lg focus:outline-none text-white uppercase font-bold text-sm tracking-wide rounded font-sans">
                    {data.map((item, key) => (
                        <Menu.Item key={key}>
                            <Link
                                href={route(item.path)}
                                className="py-3 px-3 block"
                            >
                                {item.name}
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
export default Navbar;
