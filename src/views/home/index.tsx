// Next, React
import {FC} from "react";

// Components
import {HeroSection} from "../../components/HeroSection";
import {AboutSection} from "../../components/AboutSection";
import {JoinSection} from "../../components/join-section/JoinSection";
import {EventSection} from "../../components/event/EventSection";

export const HomeView: FC = ({}) => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <EventSection />
        </>
    );
};
