"use client"
import React from 'react';
import Navbar from '../Navbar/page';
import HeroSection from '../HeroSection/page';
import SearchSection from '../SearchSection/page';
import CategoriesGrid from '../CategoriesGrid/page';
import WorkersSection from '../WorkersSection/page';
import StatsCard from '../StatsCard/page';
import CTASection from '../CTASection/page';
import Footer from '../Footer/page';
import { categories, workers} from '../../data/constant'

export default function page() {
        const handleCategorySelect = (category) => {
            console.log('Selected category:', category);
            // Handle category selection (e.g., filter workers, navigate to category page)
        };

        const handleWorkerBook = (worker) => {
            console.log('Booking worker:', worker);
            // Handle worker booking (e.g., open booking modal, navigate to booking page)
        };

        const handleViewAllWorkers = () => {
            console.log('View all workers');
            // Handle view all workers (e.g., navigate to workers listing page)
        };

    return (
        <div>
            <Navbar />
            <HeroSection />
            <SearchSection
                categories={categories}
            />
            <CategoriesGrid
                categories={categories} 
                onCategorySelect={handleCategorySelect}
            />
            <WorkersSection 
                workers={workers} 
                onBook={handleWorkerBook}
                onViewAll={handleViewAllWorkers}
            />
            <StatsCard />
            <CTASection />
            <Footer />
        </div>
    )
}
