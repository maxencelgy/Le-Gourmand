import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import { Head } from "@inertiajs/inertia-react";
import {useEffect} from "react";
const AppLayout = ({ children, title = "" }) => {
// exclude # from the URL

    useEffect(()=>{
        if (location.hash) return;
        window.scrollTo(0,0)

    },[location.pathname])

    return (
        <>
            <Head title={(title && title + " | ") + "Restaurant"} />
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default AppLayout;
