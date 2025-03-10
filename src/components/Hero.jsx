import React from 'react';
import { ReactTyped } from 'react-typed';

export const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#800080] font-bold p-2 uppercase'>Này Cô Kia...! Tôi đã phải lòng Em rồi</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#00df9a]'>Em là Cục Nợ của Anh ❤️ ...</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Tôi Yêu Em </p>
                    <ReactTyped
                        className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#FF0000]'
                        strings={['Trần', 'Thị', 'Bích', 'Ngọc']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
            </div>
        </div>
    );
};
