'use client';
import 'aos/dist/aos.css';
import { Fragment, useEffect } from 'react';
import AOS from 'aos';

const AOSProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                disable: 'mobile'
            });
        }
        console.log('AOS initialized');
    }, []);

    return <Fragment>{children}</Fragment>;
};

export default AOSProvider;