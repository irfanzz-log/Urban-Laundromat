'use client'
import Link from "next/link"
import { useState } from "react"

export default function Navigation() {

    const [nav, setNav] = useState('hiddenList');
    function showNav() {
        setNav(nav === 'visibleList' ? 'hiddenList' : 'visibleList')
    }

    return (
        <div className="root-content">
            <header>
                <div className="navigation">
                    <div className="nav-icon px-4">
                        <img className="img-fluid icon" src="./img/icon/Logo_Urban_Green.png" alt="" />
                    </div>
                    <div className="nav-content">

                        <div className="nav-list">
                            <ul className="nav-ul">
                                <li><Link className="p-2" href="/">Home</Link></li>
                                <li><Link className="p-2" href="/About">About</Link></li>
                                <li><Link className="p-2" href="/Location">Location</Link></li>
                                <li><Link className="p-2" href="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="partnership">
                            <ul className="nav-ul">
                                <li><Link className="partnership-text" href="#">Laundromat</Link></li>
                            </ul>
                        </div>

                        <div className="hamburger" onClick={() => showNav()}>
                            <div className="ham-1 ham"></div>
                            <div className="ham-2 ham"></div>
                            <div className="ham-3 ham"></div>
                        </div>
                    </div>
                </div>
                <div className={nav}>
                    <ul className="nav-hidden">
                        <li className="py-2"><Link href="/">Home</Link></li>
                        <li className="py-2"><Link href="/About">About</Link></li>
                        <li className="py-2"><Link href="/Location">Location</Link></li>
                        <li className="py-2"><Link href="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}