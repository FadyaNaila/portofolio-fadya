import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../section/hero";
import Wrapper from "../layout/Wrapper.tsx";
import About from "../section/about_me.tsx";
import Gallery from "../section/gallery.tsx";
import Footer from "../section/contact.tsx";

const Home = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            offset: 80,
            duration: 600,
        });

        AOS.refresh();
    }, []);

    return (
        <Wrapper>
            <Hero />
            <About/>
            <Gallery/>
            <Footer/>
        </Wrapper>
    );
};

export default Home;
