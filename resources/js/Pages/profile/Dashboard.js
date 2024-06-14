import {Link} from "@inertiajs/inertia-react";

import MyAccount from "./MyAccount";

const Dashboard = () => {
    return (
        <MyAccount active="dashboard" title="Dashboard">
            <div>
                Depuis le tableau de bord de votre compte, vous pouvez consulter vos
                <Link href="/" className="font-bold underline px-1 ">
                    Dernières commandes
                </Link>
                , gérer le
                <Link
                    href={route("account_details")}
                    className="font-bold underline px-1 "
                >
                    détails de vos factures
                </Link>
                et
                <Link href="/" className="font-bold underline px-1 ">
                    changez votre mot de passe.
                </Link>
                .
            </div>
        </MyAccount>
    );
};

export default Dashboard;
