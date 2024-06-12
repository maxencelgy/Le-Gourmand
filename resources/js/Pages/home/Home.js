import ProductItem from "../../componentss/ProductItem"
import AppLayout from "@/Layouts/AppLayout"
import HomeHero from "../../componentss/HomeHero";
import Frites from "@/Pages/home/Frites";
import Services from "@/Pages/home/Services";
import LinkBtn from "@/Components/LinkBtn";
import {useEffect} from 'react';
import TitleSection from "@/Components/TitleSection";
import Team from "@/Pages/team/Team";
import people from "@/Pages/team/people.json";
import TeamItem from "@/Pages/team/TeamItem";

const Home = (props) => {

    return (
        <AppLayout title="Début">
            <HomeHero/>
            <div className="container ">
                {/*<div className=" py-content">*/}
                {/*    <Promos promos={props.promos}/>*/}
                {/*</div>*/}
                <div className="mb-8">

                    <TitleSection title="Nos burgers"/>

                    <div className="mb-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:mt-4 lg:mt-4">
                        {props.products_featured.data.map((product) => (
                            <ProductItem product={product} key={product.id}/>
                        ))}
                    </div>
                    <div className="flex py-16 items-center justify-center">
                        <LinkBtn className=" mx-auto" href="/menu">Voir tout nos burgers</LinkBtn>
                    </div>
                </div>
            </div>
            {/*<Frites/>*/}
            <div className="bg-purple-500">

                <TitleSection title="Notre equipe"/>
                <div className="container pb-16 ">
                    <div
                        className="text-white grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 ">
                        {people.map((person) => (
                            <TeamItem person={person}/>
                        ))}

                    </div>
                </div>

            </div>
            <Services/>



        </AppLayout>
    )
}

export default Home
