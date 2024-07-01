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
                    <Link className="hover:text-yellow-500 duration-150"
                          href={route("service")}>{routes.service.name}</Link>
                    <Link href="/#ou" className="hover:text-yellow-500 duration-150">Localisation</Link>


                    {auth.user ? (
                        <>
                            <Link href={route("shopping-cart.index")}>
                                <div className="relative">
                                    <div
                                        className="absolute inline-flex  justify-center w-5 h-5 text-xs font-bold text-white bg-purple-500 border-2 border-white rounded-full top-0 right-4">

                                        {auth.user.cartCount}

                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                         viewBox="0 0 128 128">
                                        <path fill="#65878d"
                                              d="m95.84 41.06l-9.21.97l4.02-19.64a9.985 9.985 0 0 1 6.92-7.57l18.49-5.56c3.67-1.1 7.37 1.64 7.37 5.48c0 3.61-3.59 6.13-6.98 4.9l-2.57-.58l-10.36 3.07a6.019 6.019 0 0 0-4.13 4.34zm-9.55 41.69L79.88 110l-7.79-2.75l4.8-24.5z"/>
                                        <path fill="#65878d" d="M81.76 102H18.84v8.33h61.5z"/>
                                        <path fill="#fac136"
                                              d="M1.95 48.08L9.36 84.2c.57 2.8 3.03 4.8 5.88 4.8h68.52a2 2 0 0 0 1.95-1.55l12.02-52.01c.31-1.33-.77-2.56-2.13-2.44L7.29 40.9a5.995 5.995 0 0 0-5.34 7.18m13.95 1.09l4.26-.38a3.001 3.001 0 0 1 3.27 2.99v4.82c0 1.66-1.34 3-3 3h-4.48c-1.42 0-2.65-1-2.94-2.4l-.66-3.24a3.981 3.981 0 0 1 3.55-4.79m38.21 18.42h5.68c1.66 0 3 1.34 3 3V77c0 1.66-1.34 3-3 3h-5.68c-1.66 0-3-1.34-3-3v-6.41c0-1.66 1.34-3 3-3m5.68-8h-5.68c-1.66 0-3-1.34-3-3v-7.83c0-1.55 1.19-2.85 2.73-2.99l5.68-.51a3.001 3.001 0 0 1 3.27 2.99v8.34c0 1.66-1.34 3-3 3m-16.68 11V77c0 1.66-1.34 3-3 3h-5.68c-1.66 0-3-1.34-3-3v-6.41c0-1.66 1.34-3 3-3h5.68c1.66 0 3 1.34 3 3m-3-11h-5.68c-1.66 0-3-1.34-3-3v-6.07c0-1.55 1.19-2.85 2.73-2.99l5.68-.51a3.001 3.001 0 0 1 3.27 2.99v6.58c0 1.66-1.34 3-3 3m45.74-12.74l-2.41 10.41a2.995 2.995 0 0 1-2.92 2.32h-6.73c-1.66 0-3-1.34-3-3V47c0-1.55 1.19-2.85 2.73-2.99l9.13-.82c2.04-.18 3.66 1.68 3.2 3.66M75.01 80H72.8c-1.1 0-2-.9-2-2v-7.41c0-1.66 1.34-3 3-3h3.49c1.93 0 3.36 1.8 2.92 3.68l-1.3 5.64a4.01 4.01 0 0 1-3.9 3.09m-59.26-9.44c-.32-1.54.86-2.98 2.43-2.98h2.25c1.66 0 3 1.34 3 3v6.93a2.48 2.48 0 0 1-2.48 2.48c-1.9 0-3.54-1.34-3.92-3.2z"/>
                                        <circle cx="75.54" cy="106.33" r="11" fill="#2f2f2f"/>
                                        <circle cx="75.54" cy="106.33" r="5.13" fill="#65878d"/>
                                        <circle cx="22.7" cy="106.33" r="11" fill="#2f2f2f"/>
                                        <circle cx="22.7" cy="106.33" r="5.13" fill="#65878d"/>
                                        <circle cx="118.59" cy="16.25" r="7.41" fill="#65878d"/>
                                    </svg>
                                </div>

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

                    <ResponsiveNavLink href="/#ou">Localisation</ResponsiveNavLink>

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
