import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import NewestProducts from './NewestProducts';
import CalloutSection from './CalloutSection';
import NeatGames from './NeatGames';
import SectionTitle from './SectionTitle';
import OtherProducts from './OtherProducts';

import 'script!jquery';
import Lazy from 'lazyload/jquery.lazyload';
import Main from '../../public/js/main';

export default class extends React.Component {
	constructor() {
		super();
    	this.state = {data: []};
 	 }
  loadCommentsFromServer() {
    $.ajax({
      url: this.props.feature,
      dataType: 'json',
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.feature, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {

    return (
			<div>

				<Navbar />

				<Slider />

				<SectionTitle title="Our Newest Products"/>

				<NewestProducts data={this.state.data}/>

				<CalloutSection />

				<SectionTitle title="Other Neat Games"/>

				<NeatGames />

				<OtherProducts />

				<Footer />

			</div>

    );
  }
}

