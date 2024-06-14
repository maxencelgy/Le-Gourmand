const Description = ({description}) => {
    return (
        <div>
            <h5 className="font-bold text-black text-4xl">Description</h5>
            <div className="space-y-5 font-light mt-6">
                {description}
            </div>
        </div>
    )
}

export default Description
