import ProductItem from "@/componentss/ProductItem"
import TitleSection from "@/Components/TitleSection";


const MenuSectionList = ({ category }) => {
    return (
        <div className="py-content">
            <div className="">
                <h3 className="text-black font-title text-5xl ">{category.name}</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9 lg:mt-16">
                {category.products.map((product) => (
                    <ProductItem key={product.slug} product={product} />
                ))}
            </div>
        </div>
    )
}

export default MenuSectionList
