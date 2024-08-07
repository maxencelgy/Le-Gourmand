const BannerHero = ({ title = "...", img, breadcrumb='' }) => {
    return (
        <div className="pb-content ">
            <div className="pt-44 pb-[2rem] md:pt-20  md:pb-20 lg:pt-36 lg:pb-32 relative z-[-1] bg-gray-200">
                <div className="text-center text-white  ">
                    <div className="text-sm font-roboto font-bold uppercase leading-none">{breadcrumb}</div>
                    <h2 className="text-5xl font-title mt-4">{title}</h2>
                </div>
                <div className="absolute inset-0 z-[-1] overflow-x-hidden">
                    <img src={'/storage/'+img} alt="" className=" max-h-full  w-full object-cover brightness-50 bann" />
                </div>
            </div>
        </div>
    )
}

export default BannerHero
