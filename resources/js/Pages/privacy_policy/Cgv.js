import AppLayout from "@/Layouts/AppLayout";
import BannerHero from "@/componentss/BannerHero";

const Ggv = (props) => {
    return (
        <AppLayout>
            <BannerHero img={props.page.img} title="Conditions Generales de Vente" />
            <div className="container py-content max-w-5xl">
                <div className="terms space-y-10">
                    <div>
                        <h5>Produits et Services</h5>
                        <p>
                            Nous offrons une gamme variée de burgers à emporter et en livraison. Nos produits sont préparés avec des ingrédients frais et de qualité pour garantir votre satisfaction.
                        </p>
                    </div>
                    <div>
                        <h5>Prix et Paiement</h5>
                        <p>
                            Les prix affichés sur notre site sont en euros, toutes taxes comprises. Nous acceptons plusieurs méthodes de paiement sécurisées pour faciliter vos achats en ligne.
                        </p>
                    </div>
                    <div>
                        <h5>Livraison</h5>
                        <p>
                            Nos délais de livraison sont de moins de 30 minutes. Les frais de livraison sont calculés en fonction de votre emplacement. Vous serez informé du délai estimé lors de votre commande.
                        </p>
                    </div>
                    <div>
                        <h5>Rétractation et Retour</h5>
                        <p>
                            Vous avez le droit de retourner un produit s'il ne correspond pas à votre commande ou s'il est endommagé. Veuillez nous contacter pour organiser un retour et obtenir un remboursement.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Ggv;
