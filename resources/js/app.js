require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Restaurant";
const cleanApp = () => {
    document.getElementById('app').removeAttribute('data-page');
};
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>,
            el
        );
    },
}).then(cleanApp);

InertiaProgress.init({ color: "#FBBF5D", showSpinner: true });
