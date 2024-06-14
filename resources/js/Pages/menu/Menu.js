import { useState } from 'react';
import BannerHero from "@/componentss/BannerHero";
import AppLayout from "@/Layouts/AppLayout";
import MenuSectionList from "./MenuSectionList";

const Menu = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(prevCategory => prevCategory === category ? null : category);
    };

    const filteredMenu = selectedCategory
        ? props.menu.data.filter(category => category.name === selectedCategory)
        : props.menu.data;

    return (
        <AppLayout>
            <BannerHero
                img={props.page.img}
                title={props.page.title}
            />
            <div className="container">
                <h2 className=" mb-4">Voir uniquement les burgers :</h2>
                {/* FILTRE */}
                <div className="flex items-center gap-4 ">
                    {props.menu.data.map((category) => (
                        <div
                            onClick={() => handleCategoryClick(category.name)}
                            className={`font-light hover:text-purple-500 cursor-pointer group hover:bg-yellow-500 duration-150  bg-[#F5F5F5] flex py-2 px-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${selectedCategory === category.name ? '!bg-yellow-500 !text-purple-500' : ''}`}>
                            {category.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="container ">
                {filteredMenu.map((category) => (
                    <MenuSectionList key={category.slug} category={category} />
                ))}
            </div>
        </AppLayout>
    );
};

export default Menu;
