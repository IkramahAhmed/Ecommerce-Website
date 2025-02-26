import { Loader } from "lucide-react";
import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Track from "../../components/track/Track";

const HomePage = () => {

    return (
        <Layout>
            <HeroSection />
            <Category />
            <HomePageProductCard />
            <Track />
        </Layout>
    );
}

export default HomePage;
