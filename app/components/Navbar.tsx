"use client"

import Link from "next/link"
import { useState } from "react"

function Navbar() {
    const [isActiveBerita, setIsActiveBerita] = useState(false);
    const [isActiveKelola, setIsActiveKelola] = useState(false);

    const handleLinkClickBerita = () => {
        setIsActiveBerita(!isActiveBerita);
        setIsActiveKelola(false); // Menetapkan isActiveKelola menjadi false saat Berita diklik
    };

    const handleLinkClickKelola = () => {
        setIsActiveKelola(!isActiveKelola);
        setIsActiveBerita(false); // Menetapkan isActiveBerita menjadi false saat Kelola diklik
    };

    return (
        <div className="navbar bg-indigo-950 shadow-lg sticky top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl text-pink-500 italic font-bold">Blogku Dong</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link
                        href={"/"}
                        onClick={handleLinkClickBerita}
                        className={`font-semibold text-lg ${isActiveBerita ? 'text-pink-500' : 'text-white'
                            } focus:text-pink-500 hover:text-pink-500 active:text-pink-500`}>Berita</Link></li>
                    <li><Link href={"/manage"} onClick={handleLinkClickKelola}
                        className={`font-semibold text-lg ${isActiveKelola ? 'text-pink-500' : 'text-white'
                            } focus:text-pink-500 hover:text-pink-500 active:text-pink-500`}>Kelola</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar