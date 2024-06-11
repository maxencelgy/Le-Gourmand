import BannerHero from "../../componentss/BannerHero"
import ProductItem from "../../componentss/ProductItem"
import Promo from "../../componentss/ThreeCards"
import BannerDelivery from "./BannerDelivery"
import MenuList from "./MenuList"
import AppLayout from "@/Layouts/AppLayout"
import Promos from "./Promos"
import HomeHero from "../../componentss/HomeHero";
import Frites from "@/Pages/home/Frites";
import Services from "@/Pages/home/Services";

const Home = (props) => {

    return (
        <AppLayout title="Début">
            <HomeHero/>
            <div className="container ">
                {/*<div className=" py-content">*/}
                {/*    <Promos promos={props.promos}/>*/}
                {/*</div>*/}
                <div className="mb-8">
                    <div className="flex items-center justify-center relative mx-auto">
                        <img className="w-[30%]" src="storage/home/bg-title.png" alt=""/>
                        <h3 className="absolute text-4xl font-title text-purple-500 mb-4">Nos burgers</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:mt-4 lg:mt-4">
                        {props.products_featured.data.map((product) => (
                            <ProductItem product={product} key={product.id}/>
                        ))}
                    </div>
                </div>
            </div>
            <Frites/>
            <Services/>
        </AppLayout>
    )
}

export default Home
