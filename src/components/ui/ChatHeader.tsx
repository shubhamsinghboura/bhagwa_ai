'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { flag, mindAi } from '../ui/ImageAssets';
import Image from 'next/image';
const ChatHeader = () => {
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

       
           
            </nav>
        </header>
    );
};

export default ChatHeader;
