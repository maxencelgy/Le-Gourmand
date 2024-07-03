import React, { useEffect, useState } from "react";
import BannerHero from "@/componentss/BannerHero";
import AppLayout from "@/Layouts/AppLayout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {Link, useForm} from "@inertiajs/inertia-react";

import CartItem from "./CartItem";
import CartResumen from "./CartResumen";
import Form from "./Form";
import Button from "@/Components/Button";

const ShoppingCart = (props) => {
    const stripePromise = loadStripe("pk_test_51PRVd5KqAdv5rNAQSlVk164qYNuAFntFK7CwdnohPYpQunByWwaLqdqusgrcAjXtLXnvlNOZoHncVppGstX2HFQh00uIrxK314");

    const { data, setData, post, processing } = useForm({
        id: null,
        quantity: 1,
    });

    const [selectedBoisson, setSelectedBoisson] = useState(null);

    useEffect(() => {
        if (selectedBoisson) {
            post(route("shopping-cart.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    console.log(`${selectedBoisson.name} ajouté au panier`);
                },
            });
        }
    }, [selectedBoisson]);

    const handleAddToCart = (boisson) => {
        setData("id", boisson.id);
        setSelectedBoisson(boisson);
    };

    return (
        <AppLayout title="Panier">
            <BannerHero
                title="Panier"
                img="shopping_cart/banner.jpg"
            />
            <div className="container">
                <div className="py-content max-w-5xl mx-auto">
                    {props.products.data.length === 0 ? (
                        <div className="text-center text-2xl font-primary">
                            Pas de burgers dans le panier
                        </div>
                    ) : (
                        <>
                            <div>
                                <h2 className="text-black text-4xl">
                                    Liste des burgers
                                </h2>
                                <div className="mx-auto divide-y divide-gray-200 mt-10">
                                    {props.products.data.map((product) => (
                                        <CartItem
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </div>
                                <div className="text-center">
                                    <h2 className="text-black my-4 text-2xl text-center">
                                        Ajouter un burger en plus
                                    </h2>
                                    <Link href={route("menu")}>
                                        <Button className="ml-4 text-center">
                                            Ajouter
                                        </Button>
                                    </Link>


                                </div>

                                <h2 className="text-black text-center my-4 text-2xl">
                                    Ajouter une boisson
                                </h2>
                                <div
                                    className=" flex items-center justify-center mx-auto divide-y divide-gray-200  flex-wrap">
                                    {Array.isArray(props.boissons) && props.boissons.map((boisson) => (
                                        <div
                                            className={`px-4 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none cursor-pointer ${selectedBoisson === boisson ? 'bg-yellow-500' : 'bg-purple-500'}`}
                                            key={boisson.id}
                                            style={{
                                                whiteSpace: 'nowrap',
                                                display: 'inline-block',
                                                marginRight: '8px',
                                                marginBottom: '8px'
                                            }}
                                            onClick={() => handleAddToCart(boisson)}
                                        >
                                            {boisson.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <br/>
                            <div className="mt-24 wrap2 pr-4">
                                <h2 className="text-black text-4xl">
                                    Paiement
                                </h2>
                                <div className="grid lg:grid-cols-12 gap-8 mt-10 ">
                                    <div className="lg:col-span-7">
                                        <Elements stripe={stripePromise}>
                                            <Form/>
                                        </Elements>
                                    </div>
                                    <div className="lg:col-span-5">
                                        <CartResumen meta={props.meta} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </AppLayout>
    );
};

export default ShoppingCart;
