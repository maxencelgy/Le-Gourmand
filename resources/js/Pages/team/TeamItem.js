const TeamItem = ({person}) => {
    return (
        <div>
            <div className="overflow-hidden rounded-md">
                <img src={person.img}
                     className="transition duration-500 transform hover:scale-110 hover:brightness-75   md:h-72 w-full object-cover object-top rounded-md"
                     alt={person.img}/>
            </div>
            <div className="mt-4 lg::mt-8 text-center">
                <h5 className="font-primary text-3xl md:text-2xl ">{person.name}</h5>
                <span className="text-xl text-yellow-500 font-bold">{person.job}</span>
            </div>
        </div>
    )
}

export default TeamItem
