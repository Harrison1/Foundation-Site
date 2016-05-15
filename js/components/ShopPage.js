import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import NewestProducts from './NewestProducts';
import SectionTitle from './SectionTitle';

import 'script!jquery';
import Main from '../../public/js/main';

export default class extends React.Component {
	constructor() {
		super();
    	this.state = {data: []};
 	 }

  loadDataFromServer() {
    $.ajax({
      url: this.props.data,
      dataType: 'json',
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.data, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadDataFromServer();
  }

  render() {

    return (
			<div>

				<Navbar />

				<Slider />

				<SectionTitle title="Shop Page" />

				<NewestProducts data={this.state.data} />

				<Footer />

			</div>

    );
  }
}

