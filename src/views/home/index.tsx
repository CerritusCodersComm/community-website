// Next, React
import {FC} from "react";

// Components
import {HeroSection} from "../../components/HeroSection";
import {AboutSection} from "../../components/AboutSection";
import {EventSection} from "../../components/event/EventSection";
import {Testimonials} from "../../components/Testinomials/Testimonials";

export const HomeView: FC = ({}) => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <EventSection />
            <Testimonials />
        </>
    );
};
