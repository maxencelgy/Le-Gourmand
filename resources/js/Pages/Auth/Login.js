import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import AppLayout from "@/Layouts/AppLayout";
import { LinkAuthenticationElement } from "@stripe/react-stripe-js";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: 1,
    });

    useEffect(() => {
        return () => {
            reset("password");
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

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="Loginn | React Restaurant" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Adresse mail" />

                    <Input
                        type="text"
                        name="email"
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Mot de passe" />

                    <Input
                        type="password"
                        name="password"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Se souvenir de moi
                        </span>
                    </label>

                    <p className="text-sm">
                        <span> Pas de compte ? </span>
                        <Link
                            className="font-bold text-yellow-500 hover:text-yellow-400"
                            href="/register"
                        >
                            S'inscrire
                        </Link>
                    </p>
                </div>
                <div className="text-left text-sm mt-4 font-medium text-gray-300">
                    <span className="block">admin: user@user.com</span>
                    <span className="block">invité: user@user2.com</span>
                    <span className="block">mot de passe : password</span>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Mot de passe oublié ?
                        </Link>
                    )}

                    <Button className="ml-4" processing={processing}>
                        Se connecter
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
