const TeamItem = ({person}) => {
    return (
        <div className="flex flex-col items-center md:items-bottom">
            <div className="overflow-hidden rounded-md w-full  md:max-w-none">
                <img src={person.img}
                     className="transition duration-500 transform hover:scale-110 hover:brightness-75 max-h-32 md:max-h-64 md:h-42 w-full object-cover object-center rounded-md"
                     alt={person.img}/>
            </div>
            <div className="mt-4 lg:mt-8 text-center md:text-left">
                <h5 className="font-primary text-xl md:text-2xl lg:text-3xl">{person.name}</h5>
                <span className="text-lg md:text-xl text-yellow-500 font-bold">{person.job}</span>
            </div>
        </div>


    )
}

export default TeamItem
