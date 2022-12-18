import React from 'react';
import Announcement from '../components/Announcement';
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import Newsletter from "../components/Newsletter";
import Slider from '../components/Slider';
import Products from "../components/Products";
import { useEffect} from "react";


//Home page

const Home = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	)
}

export default Home
