// Next, React
import {FC, useEffect, useState} from "react";
import Link from "next/link";

// Components
import {AppBar} from "../../components/AppBar";
import {HeroSection} from "../../components/HeroSection";
import {AboutSection} from "../../components/AboutSection";
import {JoinSection} from "../../components/JoinSection";
import {EventSection} from "../../components/events/EventSection";

export const HomeView: FC = ({}) => {
    return (
        <>
            <AppBar/>
            <HeroSection/>
            <AboutSection/>
            <EventSection />
            <JoinSection/>
        </>
    );
};
