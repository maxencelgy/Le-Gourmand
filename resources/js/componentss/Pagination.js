import { Link } from "@inertiajs/inertia-react";

const Pagination = ({ data }) => {
    return (
        <nav
            role="navigation"
            aria-label="Pagination Navigation"
            className="flex justify-between"
        >
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className=" text-gray-700 leading-5 ">
                        Affichage{" "}
                        <span className="font-medium">{data.meta.from}</span> {" "}
                        <span className="font-medium">{data.meta.to}</span> sur{" "}
                        <span className="font-medium">{data.meta.total}</span>{" "}
                        résultats
                    </p>
                </div>
            </div>

            <div>
                {data.meta.total > data.meta.per_page && (
                    <nav
                        role="navigation"
                        aria-label="Pagination Navigation"
                        className="flex justify-between space-x-2 "
                    >
                        {data.links.prev === null ? (
                            <span className="px-4 py-2 font-medium text-sm bg-gray-100 border border-gray-100 text-gray-300 cursor-default rounded-md">
                                Précédent
                            </span>
                        ) : (
                            <Link
                                preserveScroll
                                href={data.links.prev}
                                className="px-4 py-2 border border-gray-300 font-medium text-sm rounded-md  bg-white hover:bg-gray-50"
                            >
                                Précédent
                            </Link>
                        )}

                        {data.links.next === null ? (
                            <span className="px-4 py-2 font-medium text-sm bg-gray-100 border border-gray-100 text-gray-300 cursor-default rounded-md">
                                Suivant
                            </span>
                        ) : (
                            <Link
                                preserveScroll
                                href={data.links.next}
                                className="px-4 py-2 border border-gray-300 font-medium text-sm rounded-md  bg-white hover:bg-gray-50"
                            >
                                Suivant
                            </Link>
                        )}
                    </nav>
                )}
            </div>
        </nav>
    );
};

export default Pagination;
