import BannerHero from "@/componentss/BannerHero";
import AppLayout from "@/Layouts/AppLayout";

const Service = (props) => {
    return (
        <AppLayout>
            <BannerHero
                img={props.page.img}
                title={props.page.title}
                breadcrumb="Nos Services"
            />
            <div className="container pb-24">
                <div className="mb-16">
                    <h2 className="text-3xl font-title font-bold text-center my-8">Deux type de livraisons</h2>
                    <p className="text-center">
                        Bienvenue sur notre site ! Nous sommes ravis de vous offrir deux services pour répondre à vos besoins culinaires : la livraison en moins de 30 minutes pour ceux qui préfèrent se faire livrer à domicile, et le retrait à emporter en moins de 15 minutes pour ceux qui sont en déplacement. Nous nous engageons à vous offrir une expérience rapide et de qualité, que vous choisissiez de profiter de nos plats chez vous ou en chemin. Commandez maintenant et savourez la différence !

                    </p>

                </div>
                <div className="flex items-start justify-between ">
                    <img src="/storage/home/livraison.png"  className="w-[23%] mr-4"/>
                    <div>
                        <h2 className="text-3xl font-title font-bold  my-8 w-[54%]">Livraison</h2>
                        <p>Profitez de notre service de livraison rapide et efficace, conçu pour vous offrir une
                            expérience culinaire sans stress. Nous nous engageons à livrer vos plats préférés
                            directement chez vous en moins de 30 minutes. Que vous soyez à la maison, au bureau ou chez
                            des amis, notre équipe de livraison garantit que vos repas arrivent chauds et prêts à être
                            dégustés. Commandez en ligne et laissez-nous nous occuper du reste, pour que vous puissiez
                            savourer des mets délicieux sans attendre.</p>
                    </div>

                </div>
                <div className="flex items-start justify-between">
                    <img src="/storage/home/sac.jpg" className="w-[33%]" alt=""/>

                    <div>
                        <h2 className="text-3xl font-title font-bold  my-8">Retrait</h2>
                        <p>Pour ceux qui sont toujours en mouvement, notre service de retrait est la solution idéale.
                            Passez votre commande en ligne et récupérez-la en moins de 15 minutes dans notre
                            établissement. Plus besoin d'attendre longtemps ou de perdre du temps, nous préparons votre
                            repas avec soin et rapidité pour que vous puissiez continuer votre journée sans
                            interruption. Idéal pour les pauses déjeuner rapides ou les soirées chargées, notre service
                            de retrait est là pour simplifier votre quotidien.</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Service;
