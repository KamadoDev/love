import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleToggleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white px-4">
            <h1 className="w-full text-3xl font-bold uppercase text-[#FF69B4]">
                Love❤️.
            </h1>

            {/* Menu cho Desktop */}
            <ul className="hidden md:flex w-full justify-end">
                <li><a href="" className="p-2">Tình Yêu</a></li>
                <li><a href="" className="p-2">Lãng Mạn</a></li>
                <li><a href="" className="p-2">Hẹn Hò</a></li>
                <li><a href="" className="p-2">Cảm Xúc</a></li>
                <li><a href="" className="p-2">Liên Hệ</a></li>
            </ul>

            {/* Icon Menu */}
            <div className="md:hidden" onClick={handleToggleNav}>
                {nav ? (
                    <AiOutlineClose size={20} className="cursor-pointer" />
                ) : (
                    <AiOutlineMenu size={20} className="cursor-pointer" />
                )}
            </div>

            {/* Menu Mobile */}
            <div
                className={`fixed top-0 left-0 w-[60%] h-full bg-[#000300] border-r border-gray-900 p-4 transition-transform duration-300 ${nav ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <ul className="uppercase flex flex-col">
                    <li className="py-3 border-b border-gray-600 cursor-pointer"><a href="" className="p-2 block">Tình Yêu</a></li>
                    <li className="py-3 border-b border-gray-600 cursor-pointer"><a href="" className="p-2 block">Lãng Mạn</a></li>
                    <li className="py-3 border-b border-gray-600 cursor-pointer"><a href="" className="p-2 block">Hẹn Hò</a></li>
                    <li className="py-3 border-b border-gray-600 cursor-pointer"><a href="" className="p-2 block">Cảm Xúc</a></li>
                    <li className="py-3"><a href="" className="p-2">Liên hệ</a></li>
                </ul>
            </div>
        </div>
    );
};
