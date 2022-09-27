// Next, React
import {FC} from "react";

// Components
import {HeroSection} from "../../components/HeroSection";
import {AboutSection} from "../../components/AboutSection";
import {JoinSection} from "../../components/JoinSection";
import {EventSection} from "../../components/events/EventSection";

export const HomeView: FC = ({}) => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <EventSection />
            <JoinSection/>
        </>
    );
};
