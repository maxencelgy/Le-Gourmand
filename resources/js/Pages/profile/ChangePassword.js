import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import NotificationSuccess from "@/componentss/NotificationSuccess";
import { useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import MyAccount from "./MyAccount";

const ChangePassword = () => {
    const { data, setData, processing, post, errors, reset } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("store_change_password"), {
            preserveScroll: true,
            onSuccess: () =>
                reset("current_password", "password", "password_confirmation"),
        });
    };
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    // useEffect(() => {
    //     return () => {};
    // }, []);
    return (
        <MyAccount active="password" title="Changer le mot de passe">
            <ValidationErrors errors={errors} />
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-4">
                    <div>
                        <Label
                            forInput="current_password"
                            value="Mot de passe actuel *"
                        />
                        <Input
                            className="w-full mt-1"
                            required={true}
                            type="password"
                            handleChange={onHandleChange}
                            value={data.current_password}
                            name="current_password"
                        />
                    </div>

                    <div>
                        <Label forInput="password" value="Nouveau mot de passe *" />
                        <Input
                            className="w-full mt-1"
                            required={true}
                            type="password"
                            handleChange={onHandleChange}
                            value={data.password}
                            name="password"
                        />
                    </div>
                    <div>
                        <Label
                            forInput="password_confirmation"
                            value="Confirmer le nouveau mot de passe *"
                        />
                        <Input
                            className="w-full mt-1"
                            required={true}
                            type="password"
                            handleChange={onHandleChange}
                            value={data.password_confirmation}
                            name="password_confirmation"
                        />
                    </div>
                </div>
                <Button processing={processing}>
                    Changer le mot de passe
                </Button>
            </form>
        </MyAccount>
    );
};

export default ChangePassword;
