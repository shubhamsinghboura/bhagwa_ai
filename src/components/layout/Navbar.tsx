'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {  mindAi } from '../ui/ImageAssets';
import Image from 'next/image';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: 'Features', href: '/#features' },
        { name: 'About', href: '/#about' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Contact', href: '/#contact' },
    ];
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">

                <div className="flex items-center justify-between h-16 
                        bg-black/30 backdrop-blur-xl rounded-2xl 
                        border border-white/20 shadow-lg shadow-orange-900/10 px-6">


                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2 text-orange-400">
                            <motion.div
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="w-10 h-10 flex items-center justify-center rounded-full 
                           bg-gradient-to-r from-[#FF6F00] via-[#FF8F00] to-[#FFB300] 
                           bg-[length:200%_200%] shadow-md shadow-orange-600/40"
                            >
                                <Image
                                    src={mindAi}
                                    alt="Mind AI"
                                    className="w-6 h-6 invert brightness-0"
                                />
                            </motion.div>
                            <span className="text-2xl font-bold tracking-wider font-logo bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                BhagwaAi
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item) => (
                            <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                                <Link
                                    href={item.href}
                                    className="relative text-gray-200 hover:text-orange-400 transition-colors duration-300 group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <Link
                            href="/signin"
                            className="text-gray-200 border border-gray-600 hover:border-orange-500 
                         hover:text-orange-400 font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/get-started"
                            className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 
                         text-white font-semibold py-2 px-4 rounded-lg shadow-md shadow-orange-800/30 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-200 hover:text-orange-400 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {/* <div className="relative">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="inline-block opacity-50 w-16 mt-2 ml-4"
                    >
                        <Image
                            src={flag}   // your saffron flag image
                            alt="Flag"
                            className="w-16 h-auto"
                        />
                    </motion.div>
                </div> */}

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="md:hidden mt-2 bg-black/40 backdrop-blur-xl 
                         rounded-2xl p-6 border border-white/10 shadow-lg shadow-orange-900/20"
                        >
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-200 hover:text-orange-400"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <hr className="border-gray-700" />
                                <Link
                                    href="/signin"
                                    className="text-gray-200 hover:text-orange-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/get-started"
                                    className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 
                             text-white font-semibold py-2 px-4 rounded-lg text-center shadow-md shadow-orange-900/30"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
