import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
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

				<SectionTitle title="Our Newest Products"/>

				<NewestProducts data={this.props.data}/>

				<CalloutSection />

				<SectionTitle title="Other Neat Games"/>

				<OtherProducts />

				<Footer />

			</div>

    );
  }
}

