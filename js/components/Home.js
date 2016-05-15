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
    	this.state = {feature: [], newest: [], hardware: [], controller: [], accessories: []};
 	 }

  loadFeaturesFromServer() {
    $.ajax({
      url: this.props.feature,
      dataType: 'json',
      success: (feature) => {
        this.setState({feature: feature});
      },
      error: (xhr, status, err) => {
        console.error(this.props.feature, status, err.toString());
      }
    });
  }

    loadNewestFromServer() {
    $.ajax({
      url: this.props.newest,
      dataType: 'json',
      success: (newest) => {
        this.setState({newest: newest});
      },
      error: (xhr, status, err) => {
        console.error(this.props.newest, status, err.toString());
      }
    });
  }

      loadHardwareFromServer() {
    $.ajax({
      url: this.props.hardware,
      dataType: 'json',
      success: (hardware) => {
        this.setState({hardware: hardware});
      },
      error: (xhr, status, err) => {
        console.error(this.props.hardware, status, err.toString());
      }
    });
  }

        loadControllerFromServer() {
    $.ajax({
      url: this.props.controller,
      dataType: 'json',
      success: (controller) => {
        this.setState({controller: controller});
      },
      error: (xhr, status, err) => {
        console.error(this.props.controller, status, err.toString());
      }
    });
  }

          loadAccessoriesFromServer() {
    $.ajax({
      url: this.props.accessories,
      dataType: 'json',
      success: (accessories) => {
        this.setState({accessories: accessories});
      },
      error: (xhr, status, err) => {
        console.error(this.props.accessories, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadFeaturesFromServer();
    this.loadNewestFromServer();
    this.loadHardwareFromServer();
    this.loadControllerFromServer();
    this.loadAccessoriesFromServer();
  }

  render() {

    return (
			<div>

				<Navbar />

				<Slider />

				<SectionTitle title="Our Newest Products" />

				<NewestProducts data={this.state.feature} />

				<CalloutSection />

				<SectionTitle title="Other Neat Games" />

				<NeatGames data={this.state.newest} />

				<OtherProducts datahardware={this.state.hardware} datacontroller={this.state.controller} dataaccessories={this.state.accessories}/>

				<Footer />

			</div>

    );
  }
}

