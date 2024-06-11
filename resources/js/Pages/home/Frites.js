const Frites = () => {
    return (
        <div className=" bg-purple-500 pt-8 pb-16">
            <div className="wrap     flex items-center justify-center relative mx-auto mb-8">
                <img className=" w-[30%]" src="storage/home/bg-title.png" alt=""/>
                <h3 className="absolute text-4xl font-title text-purple-500 mb-4">Nos frites</h3>
            </div>

            <div className="wrap">
                <div className="flex items-top justify-between gap-4">
                    <img className="rounded-xl w-[43%]" src="/storage/home/frites.jpeg" alt=""/>
                    <div className="w-[54%] text-white">
                        <h2 className="font-title  text-4xl mb-8">Des Frites 100% maison</h2>
                        <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ipsa
                            libero natus pariatur quam quia ratione rem. Accusantium dicta dolor laudantium maiores
                            pariatur. Ab accusantium aliquam aspernatur atque consequatur doloremque earum eos facilis
                            in iusto laborum libero minus, quae quas qui quibusdam quis repellendus reprehenderit sint
                            suscipit tempora voluptas voluptates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frites;
