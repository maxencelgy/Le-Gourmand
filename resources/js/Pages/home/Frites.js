import TitleSection from "@/Components/TitleSection";

const Frites = () => {
    return (
        <div className=" bg-purple-500 pt-4 pb-20">
            <TitleSection title="Nos frites"/>
            <br/><br/>

            <div className="wrap">
                <div className="flex items-top justify-between gap-4">

                    <div className="overflow-hidden w-[43%] rounded-lg">
                        <img className="  object-cover  transition duration-500 transform hover:scale-110 hover:brightness-75  " src="/storage/home/frites.jpeg" alt=""/>
                    </div>
                    <div className="w-[51%] text-white">
                        <h2 className="font-title  text-4xl mb-8">Des Frites 100% maison</h2>
                        <p className="font-normal">Découvrez le goût authentique de nos frites 100% maison,
                            préparées
                            quotidiennement avec des pommes de terre fraîches et soigneusement sélectionnées. Cuites
                            dans une huile de qualité, elles sont croustillantes à l'extérieur et moelleuses à
                            l'intérieur. Servez-vous de nos sauces maison pour enrichir votre expérience. Parfaites
                            pour
                            toute occasion, nos frites vous offriront un moment de pur plaisir gustatif.

                        </p>
                    </div>
                </div>
            </div>
            <div id="equipe"></div>
        </div>
    );
};

export default Frites;
