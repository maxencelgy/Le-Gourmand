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
                    <Link className="hover:text-yellow-500 duration-150"
                          href={route("service")}>{routes.service.name}</Link>


                    {auth.user ? (
                        <>
                            <Link href={route("shopping-cart.index")}>
                                <ShoppingBagIcon className="h-8 w-8"/>
                            </Link>
                            <ProfileDropdown user={auth.user}/>
                        </>
                    ) : (
                        <LinkBtn href={route("login")}>Connexion</LinkBtn>
                    )}
                </div>

                {/* burger movil */}
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

            {/* list link movil */}
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
