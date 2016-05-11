import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import NewestProductsTitle from './NewestProductsTitle';
import NewestProducts from './NewestProducts';
import CalloutSection from './CalloutSection';
import SectionTitle from './SectionTitle';
import OtherProducts from './OtherProducts';

import 'script!jquery';
import Lazy from 'lazyload/jquery.lazyload';
import Main from '../../public/js/main';

export default class extends React.Component {
  render() {

    return (
			<div>

				<Navbar />

				<Slider />

				<NewestProductsTitle />

				<NewestProducts />

				<CalloutSection />

				<SectionTitle />

				<OtherProducts />

				<Footer />

			</div>

    );
  }
}

