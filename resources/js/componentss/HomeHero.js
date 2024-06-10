import Button from "@/Components/Button";
import LinkBtn from "@/Components/LinkBtn";

const HomeHero = () => {
    return (
        <div className=" overflow-x-hidden ">
            <div className=" pt-20 pb-20 lg:pt-36 lg:pb-32 relative ">
                <div className=" text-center text-white  ">
                    <div className="text-sm  font-bold uppercase leading-none"></div>
                    <div className="flex items-center justify-between wrap ">
                        <div className="w-[44%] text-left  pt-32">
                            <div className="leading-none relative">
                                <div className="absolute  top-[-7.6rem] left-[3.5rem]">
                                    <img src={'/storage/home/goutte.png'}
                                         className="w-16 absolute left-[-3.6rem]" alt=""/>
                                    <h2 className="text-[8rem] z-99 text-yellow-500 mt-4 font-subTitle">Spécial</h2>
                                    <img src={'/storage/home/goutte_r.png'}
                                         className="w-16 absolute top-0 right-[-5rem]" alt=""/>
                                </div>

                                <h3 className="text-[8rem] mb-6 mt-4 font-title">Burger</h3>
                            </div>
                            <p className="mb-8 max-w-md ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Ab
                                asperiores atque commodi eum expedita iure nisi pariatur? Adipisci animi blanditiis
                                commodi consequatur, debitis delectus dolore doloribus ea eaque eos </p>
                            <LinkBtn href="/menu">Commander</LinkBtn>

                        </div>
                        <div className="w-[44%] relative">
                            <img src={'/storage/home/burger-Photoroom.png'}
                                 className="top-[-350px] left-[-190px] absolute max-w-[155%]" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 z-[-1]">
                    <img src={'/storage/home/firstSectionBG.png'} alt=""
                         className=" max-h-full w-full object-cover "/>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
