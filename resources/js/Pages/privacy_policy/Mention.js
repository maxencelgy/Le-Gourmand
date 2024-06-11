import AppLayout from "@/Layouts/AppLayout";
import BannerHero from "@/componentss/BannerHero";

const Mention = (props) => {
    return (
        <AppLayout>
            <BannerHero img={props.page.img} title="Mentions Legales" />
            <div className="container py-content max-w-5xl">
                <div className="terms space-y-10">
                    <div>
                        <h5>Identité de l'Éditeur</h5>
                        <p>
                            Nom de l'entreprise : Burgers à Emporter
                            <br />
                            Adresse : 123 Rue des Gourmets, 75000 Paris
                            <br />
                            Téléphone : +33 1 23 45 67 89
                            <br />
                            Email : contact@burgers-a-emporter.fr
                        </p>
                    </div>
                    <div>
                        <h5>Directeur de la Publication</h5>
                        <p>
                            Le directeur de la publication est [Nom du Directeur].
                        </p>
                    </div>
                    <div>
                        <h5>Hébergeur du Site</h5>
                        <p>
                            Nom de l'hébergeur : Hébergement Web S.A.
                            <br />
                            Adresse : 456 Avenue de l'Hébergeur, 75000 Paris
                            <br />
                            Téléphone : +33 1 98 76 54 32
                        </p>
                    </div>
                    <div>
                        <h5>Propriété Intellectuelle</h5>
                        <p>
                            Tous les contenus présents sur ce site (textes, images, logos) sont la propriété exclusive de Burgers à Emporter, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Burgers à Emporter.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Mention;
