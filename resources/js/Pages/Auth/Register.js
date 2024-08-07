import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Surnom" />
                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                {/*<div className="mt-4">*/}
                {/*    <Label forInput="address" value="Addresse" />*/}

                {/*    <Input*/}
                {/*        type="text"*/}
                {/*        name="address"*/}
                {/*        value={data.address}*/}
                {/*        className="mt-1 block w-full"*/}
                {/*        autoComplete="address"*/}
                {/*        handleChange={onHandleChange}*/}
                {/*        required*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="mt-4">
                    <Label forInput="phone" value="Téléphone" />

                    <Input
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                {/*<div className="mt-4">*/}
                {/*    <Label forInput="city" value="Ville" />*/}

                {/*    <Input*/}
                {/*        type="text"*/}
                {/*        name="city"*/}
                {/*        value={data.city}*/}
                {/*        className="mt-1 block w-full"*/}
                {/*        autoComplete="city"*/}
                {/*        handleChange={onHandleChange}*/}
                {/*        required*/}
                {/*    />*/}
                {/*</div>*/}

                <div className="mt-4">
                    <Label forInput="password" value="Mot de passe" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label
                        forInput="password_confirmation"
                        value="Confirmation du mot de passe"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Vous avez déjà un compte ?
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        S'inscrire
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
