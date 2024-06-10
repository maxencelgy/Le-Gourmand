const Logo = ({ className }) => {
    return (
        <img src="/storage/logo.png" className={className} alt="Logo"/>
        // <div className={"font-roboto " + className} >
        //     <span className="font-light">React </span>
        //     <span className=" font-extrabold">Restaurant</span>
        // </div>
    );
};

export default Logo;
