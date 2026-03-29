import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Services } from '../components/Services/Services';
import { Process } from '@/components/Process/Process';

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Process />
        </>
    );
}