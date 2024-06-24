import {formatCurrency} from "@/helpers/helpers";
import {Link} from "@inertiajs/inertia-react";
import Stars from "./Stars";
import {ShoppingBagIcon} from "@heroicons/react/solid";

const ProductItem = ({product}) => {
    return (
        <Link href={route('product', {slug: product.slug})}>
            <div
                className=" max-w-[280px] group hover:bg-yellow-500 duration-150  bg-[#F5F5F5] flex flex-col justify-between pt-6 pb-8 px-4 h-full  w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center flex-grow">
                    <img
                        src={"/storage/home/img-1.png"}
                        alt={product.img}
                        className="w-[150px] mb-4 max-h-full object-cover"
                    />
                    <h2 className="font-bold text-black text-center text-xl truncate px-6">{product.name}</h2>
                    <p className=" font-light mb-4 text-sm text-center text-black line-clamp-2">
                        {product.description_min}
                    </p>
                </div>
                <div className="flex flex-col items-center ">
                    <div
                        className="flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white fill-current text-purple-500 shadow-md py-2 px-6 bg-yellow-500  rounded-xl ">
                        <svg className="w-4  stroke-current group-hover:stroke-white" width="29" height="29"
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
                        <div className="font-primaryBold ml-4 text-md leading-none">Ajouter au panier</div>
                    </div>
                </div>


            </div>
        </Link>
    );
};

export default ProductItem;
