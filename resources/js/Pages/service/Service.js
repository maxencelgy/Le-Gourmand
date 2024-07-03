import BannerHero from "@/componentss/BannerHero";
import AppLayout from "@/Layouts/AppLayout";
import LinkBtn from "@/Components/LinkBtn";

const Service = (props) => {
    return (
        <AppLayout>
            <BannerHero
                img={props.page.img}
                title={props.page.title}
                breadcrumb="Notre Service"
            />
            <div className="container pt-20 pb-24">
                <div className="mb-16">
                    <h2 className="text-3xl font-title font-bold text-center my-8">Retrait de votre commande en moins de 30 minutes</h2>
                    <p className="text-center">
                        Bienvenue sur notre site ! Nous sommes ravis de vous offrir un service de retrait de commande en moins de 30 minutes pour répondre à vos besoins culinaires. Que vous soyez en déplacement ou préfériez récupérer votre commande rapidement, nous nous engageons à vous offrir une expérience rapide et de qualité. Commandez maintenant et savourez la différence !
                    </p>
                </div>
                <div className=" mb-16 flex items-start justify-center ">
                    {/*<img src="/storage/home/sac.jpg" className="w-[33%] mr-4" alt="Retrait" />*/}
                    <div className="text-center">
                        <h2 className="text-3xl font-title font-bold my-8">Comment Ca Marche ?</h2>
                        <p className="">
                            <ol className=" ">
                                <li><strong>Choisissez vos plats :</strong> Parcourez notre menu en ligne et sélectionnez vos plats préférés.</li>
                                <li><strong>Passez votre commande :</strong> Ajoutez les articles à votre panier et confirmez votre commande.</li>
                                <li><strong>Récupérez en 30 minutes :</strong> Votre commande sera prête en moins de 30 minutes, prête à être retirée à notre point de retrait.</li>
                            </ol>
                        </p>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-title font-bold my-8">Pourquoi Choisir Notre Service de Retrait ?</h2>
                    <p className="mx-auto w-[75%]">
                        <ul className=" ">
                            <li><strong>Rapidité :</strong> Votre commande prête en moins de 30 minutes.</li>
                            <li><strong>Qualité :</strong> Des plats préparés avec des ingrédients frais et de qualité.</li>
                            <li><strong>Commodité :</strong> Un processus de commande en ligne simple et rapide.</li>
                        </ul>
                    </p>
                </div>
                <div className="flex justify-center mt-8">
                <LinkBtn href="/menu">Voir le Menu et Commander</LinkBtn>
                </div>
            </div>
        </AppLayout>
    );
};

export default Service;
