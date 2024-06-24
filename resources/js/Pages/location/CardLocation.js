const CardLocation = ({ title, phone = "0232560606", address, img }) => {
    return (
        <div className="w-full">
            <div className="overflow-hidden">
                <img
                    src={ img}
                    alt={img}
                    className="object-cover w-full md:h-96 transition duration-500 transform hover:scale-110 hover:brightness-75  "
                />
            </div>
            <div className="py-9 px-5 text-center space-y-2">
                <h5 className=" font-title text-red-500 text-5xl ">{title}</h5>
                <h6 className=" text-2xl">Téléphone: {phone}</h6>

                <h6 className=" text-2xl" >Adresse : {address} </h6>
                <h6 className=" text-2xl">Ouvert : 7j/7 </h6>

            </div>
        </div>
    )
}

export default CardLocation
