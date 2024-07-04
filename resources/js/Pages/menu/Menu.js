import { useState, useEffect } from 'react';
import BannerHero from "@/componentss/BannerHero";
import AppLayout from "@/Layouts/AppLayout";
import MenuSectionList from "./MenuSectionList";

const Menu = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [topPosition, setTopPosition] = useState('top-100');

    const handleCategoryClick = (category) => {
        setSelectedCategory(prevCategory => prevCategory === category ? null : category);
    };

    const filteredMenu = selectedCategory
        ? props.menu.data.filter(category => category.name === selectedCategory)
        : props.menu.data;

    const handleScroll = () => {
        if (window.scrollY > 1) {
            setTopPosition('top-[80px] md:top-[95px] bg-yellow-500 shadow-md');
        } else {
            setTopPosition('top-100');
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppLayout>
            <BannerHero
                img={props.page.img}
                title={props.page.title}
            />
            <div className="container">
                <h2 className="mb-4">Voir uniquement les burgers :</h2>
                {/* FILTRE */}
                <div className={`fixed ${topPosition} right-0  bg-white z-10 py-4 transition-all duration-300 w-full`}>
                    <div className="flex items-center gap-4 px-8  wrap2  overflow-x-auto ">
                        {props.menu.data.map((category) => (
                            <div
                                key={category.name}
                                onClick={() => handleCategoryClick(category.name)}
                                className={`font-light whitespace-nowrap hover:text-purple-500 cursor-pointer group hover:bg-yellow-500 duration-150 bg-[#F5F5F5] flex py-2 px-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${selectedCategory === category.name ? '!bg-purple-500 !text-white' : ''}`}>
                                {category.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-4"></div>
            <div className="container mt-4">
                {filteredMenu.map((category) => (
                    <MenuSectionList key={category.slug} category={category} />
                ))}
            </div>
        </AppLayout>
    );
};

export default Menu;
