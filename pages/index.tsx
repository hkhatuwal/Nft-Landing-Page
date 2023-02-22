import type { NextPage } from "next";
import Head from "next/head";
import Backers from "../components/Backers/Backers";
import Blog from "../components/Blog/Blog";
import Chain from "../components/Chain/Chain";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Join from "../components/Join/Join";
import Security from "../components/Security/Security";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title> Prime Protocol - Cross Chain Prime Brokerage </title>
            </Head>
            <div>
                <Header />

                <main>
                    <Hero />
                    <Chain />
                    <Security />
                    <Blog />
                    <Backers />
                    <Join />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Home;
