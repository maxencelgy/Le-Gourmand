import LinkBtn from "@/Components/LinkBtn";
import TitleSection from "@/Components/TitleSection";

const Services = () => {
    return (
        <div className="wrap pt-4 pb-20">
            {/*<TitleSection title="Notre service"/>*/}


            <br/><br/>

            <div className="flex items-top justify-between gap-4  service">
                <div className="w-[68%] text-black">
                    <h2 className="font-title text-4xl mb-8">Retrait de votre commande </h2>
                    <p className="font-normal mb-6"> Nous sommes ravis de vous offrir un
                        service de retrait en moins de 30 minutes pour répondre à vos besoins culinaires. Que vous soyez
                        en déplacement ou préfériez récupérer votre commande rapidement, nous nous engageons à vous
                        offrir une expérience rapide et de qualité. Commandez maintenant et savourez la différence !</p>
                    <LinkBtn href={route("service")}>Voir plus</LinkBtn>


                </div>
                <img className="rounded-xl w-[23%]" src="/storage/home/pickup.png" alt=""/>
            </div>
        </div>
    );
};

export default Services;
