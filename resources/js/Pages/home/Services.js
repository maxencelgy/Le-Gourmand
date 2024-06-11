import LinkBtn from "@/Components/LinkBtn";

const Services = () => {
    return (
        <div className="wrap pb-8">
            <div className="flex items-center justify-center relative mx-auto mb-8">
                <img className="w-[30%]" src="storage/home/bg-title.png" alt=""/>
                <h3 className="absolute text-4xl font-title text-purple-500 mb-4">Nos Services</h3>
            </div>


            <div className="flex items-top justify-between gap-4">
                <div className="w-[68%] text-black">
                    <h2 className="font-title  text-4xl mb-8">Deux types de livraisons</h2>
                    <p className="font-normal mb-6">Bienvenue sur notre site ! Nous sommes ravis de vous offrir deux services
                        pour répondre à vos besoins culinaires : la livraison en moins de 30 minutes pour ceux qui
                        préfèrent se faire livrer à domicile, et le retrait à emporter en moins de 15 minutes pour ceux
                        qui sont en déplacement. Nous nous engageons à vous offrir une expérience rapide et de qualité,
                        que vous choisissiez de profiter de nos plats chez vous ou en chemin. Commandez maintenant et
                        savourez la différence !</p>
                    <LinkBtn href={route("service")}>Voir plus</LinkBtn>

                </div>
                <img className="rounded-xl w-[33%]" src="/storage/home/livraison.png" alt=""/>
            </div>
        </div>
    );
};

export default Services;
