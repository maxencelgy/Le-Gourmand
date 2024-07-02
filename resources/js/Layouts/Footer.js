import React from 'react';
import Logo from './Logo'; // Assuming you have a Logo component
import routes from './routes';
import { Link } from "@inertiajs/inertia-react"; // Assuming you have a routes file for navigation

const Footer = () => {
    return (
        <div className="py-content border-t border-gray-200 bg-black text-white">
            <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-8 pb-8">
                <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
                    <h3 className="text-2xl font-title font-bold">NOTRE CARTE</h3>
                    <Link href={route("menu")} className="text-lg hover:text-yellow-500">Voir la carte</Link>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
                    <h3 className="text-2xl font-title font-bold">{routes.service.name}</h3>
                    <Link href={route("service")} className="text-lg hover:text-yellow-500">Voir notre service</Link>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
                    <h3 className="text-2xl font-title font-bold">Informations Legales</h3>
                    <Link href={route("privacy_policy")} className="text-md hover:text-yellow-500">Politique de Confidentialité</Link>
                    <Link href={route("cgv")} className="text-md hover:text-yellow-500">Conditions Générales de Vente (CGV)</Link>
                    <Link href={route("mention")} className="text-md hover:text-yellow-500">Mentions Legales</Link>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
                    <span className="text-2xl font-title font-bold">POUR NOUS SUIVRE</span>
                    <div className="flex space-x-4">
                        <img className="hover:cursor-pointer w-9 h-9" src="/storage/social/facebook-icon.png" alt="Facebook" />
                        <img className="hover:cursor-pointer w-9 h-9" src="/storage/social/instagram-icon.png" alt="Instagram" />
                        <img className="hover:cursor-pointer w-9 h-9" src="/storage/social/twt-icon.png" alt="Twitter" />
                        <img className="hover:cursor-pointer w-9 h-9" src="/storage/social/ws-icon.png" alt="WhatsApp" />
                    </div>
                    <span className="text-xs">Pour votre santé, pratiquez une activité physique régulière : <a href="https://www.mangerbouger.fr" className="underline">www.mangerbouger.fr</a></span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
