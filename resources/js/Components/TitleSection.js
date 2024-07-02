import React from 'react';

const TitleSection = ({ title }) => {
    return (
        <div className="title-section wrap flex items-center justify-center relative mx-auto mb-16">
            <img className=" w-[30%]" src="storage/home/bg-title.png" alt=""/>
            <h3 className="absolute text-4xl font-title text-purple-500 mb-4">{title}</h3>
        </div>
    );
};

export default TitleSection;
