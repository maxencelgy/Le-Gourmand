import Stars from "@/componentss/Stars";
import {formatCurrency} from "@/helpers/helpers";
import {ShoppingBagIcon} from "@heroicons/react/solid";
import {Link, useForm} from "@inertiajs/inertia-react";
import SelectQuantity from "./SelectQuantity";

const Feature = ({product}) => {
    const {data, setData, post, processing, errors} = useForm({
        id: product.id,
        quantity: 1,
    });

    function submit(e) {
        e.preventDefault();
        post(route("shopping-cart.store"), {preserveScroll: true});
    }

    const handleChangeQuantity = (newQuantity) => {
        setData("quantity", newQuantity);
    };

    return (
        <div className="space-y-3 lg:space-y-5">
            <h1 className="font-title text-black text-5xl">{product.name}</h1>

            <div className="text-3xl  lg:text-4xl font-primary">
                <span className=" text-yellow-400">
                    {formatCurrency(product.price)}
                </span>
            </div>

            <p className="font-light text-lg">{product.description_min}</p>

            <div className="divide-y divide-gray-200">
                {product.portion_size && (
                    <div className="flex items-center justify-between py-3">
                        <div className="font-bold">Portions</div>
                        <div>{product.portion_size}</div>
                    </div>
                )}
                {product.calories && (
                    <div className="flex items-center justify-between py-3">
                        <div className="font-bold">Calories</div>
                        <div>{product.calories}</div>
                    </div>
                )}
                {product.allergies && (
                    <div className="flex items-top  justify-between py-3">
                        <div className="font-bold mr-4">Allergènes</div>
                        <div>{product.allergies}</div>
                    </div>
                )}
            </div>
            <form onSubmit={submit}>
                <div className="md:flex md:items-center md:justify-between">
                    <div>
                        <SelectQuantity
                            quantity={data.quantity}
                            stock={product.stock}
                            onChange={handleChangeQuantity}
                        />
                    </div>

                    <button
                        className="flex items-center hover:bg-purple-500 hover:text-white duration-300 shadow-lg hover:cursor-pointer  bg-yellow-500 px-6 py-2 text-purple-500 rounded-xl "
                        disabled={processing}
                    >
                        {processing && (
                            <span className=" leading-none font-light ml-2">
                                Ajouter....
                            </span>
                        )}

                        {!processing && (
                            <>
                                <svg className="w-4  stroke-current group-hover:stroke-white" width="29" height="29"
                                     viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.33341 27.4167C10.0468 27.4167 10.6251 26.8384 10.6251 26.125C10.6251 25.4117 10.0468 24.8334 9.33341 24.8334C8.62005 24.8334 8.04175 25.4117 8.04175 26.125C8.04175 26.8384 8.62005 27.4167 9.33341 27.4167Z"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M23.5417 27.4167C24.255 27.4167 24.8333 26.8384 24.8333 26.125C24.8333 25.4117 24.255 24.8334 23.5417 24.8334C22.8283 24.8334 22.25 25.4117 22.25 26.125C22.25 26.8384 22.8283 27.4167 23.5417 27.4167Z"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M1.64795 1.64795H4.23128L7.66712 17.6904C7.79315 18.278 8.12006 18.8032 8.59158 19.1757C9.06309 19.5482 9.6497 19.7446 10.2504 19.7313H22.8829C23.4709 19.7303 24.0409 19.5289 24.4989 19.1602C24.9568 18.7914 25.2753 18.2776 25.4017 17.7034L27.5329 8.10628H5.61337"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className=" leading-none  ml-2">
                                    Ajouter au panier
                                </span>
                            </>
                        )}
                    </button>
                </div>
            </form>
            <div>
                {errors.id && (
                    <span className="text-sm text-red-500">{errors.id}</span>
                )}
                {errors.slug && (
                    <span className="text-sm text-red-500">{errors.slug}</span>
                )}
                {errors.limit && (
                    <span className="text-sm text-red-500">{errors.limit}</span>
                )}
            </div>
            <div>
                <ul className="font-light list-disc  space-y-1 text-md mt-6 lg:mt-10 ml-4">
                    <li>
                        Nous acceptons les cartes de crédit ou les espèces
                    </li>
                    <li>Commandez et venez recupérer votre burger dans 30 minutes</li>
                </ul>
            </div>
        </div>
    );
};

export default Feature;
