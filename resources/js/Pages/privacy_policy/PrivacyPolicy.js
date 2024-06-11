import AppLayout from "@/Layouts/AppLayout";
import BannerHero from "@/componentss/BannerHero";

const PrivacyPolicy = (props) => {
    return (
        <AppLayout>
            <BannerHero img={props.page.img} title="Politique de confidentialite" />
            <div className="container py-content max-w-5xl">
                <div className="terms space-y-10">
                    <div>
                        <h5>Collecte des Informations</h5>
                        <p>
                            Nous collectons diverses informations lorsque vous utilisez notre site, telles que votre nom, votre adresse e-mail, et vos informations de paiement. Ces données sont recueillies pour vous fournir un service personnalisé et améliorer votre expérience utilisateur.
                        </p>
                    </div>
                    <div>
                        <h5>Utilisation des Informations</h5>
                        <p>
                            Les informations collectées sont utilisées pour traiter vos commandes, améliorer nos services, et vous envoyer des communications promotionnelles. Vos données ne seront pas partagées avec des tiers sans votre consentement, sauf si cela est nécessaire pour fournir nos services ou respecter la loi.
                        </p>
                    </div>
                    <div>
                        <h5>Sécurité des Données</h5>
                        <p>
                            Nous prenons des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
                        </p>
                    </div>
                    <div>
                        <h5>Droits des Utilisateurs</h5>
                        <p>
                            Vous avez le droit d'accéder, de modifier, ou de supprimer vos informations personnelles à tout moment. Pour exercer ces droits, veuillez nous contacter via les coordonnées fournies sur notre site.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default PrivacyPolicy;
