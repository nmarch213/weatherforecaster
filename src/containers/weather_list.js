import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

	renderWeather(cityData){

		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);

		//destructuring
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;

		const { lon, lat } = cityData.city.coord;

		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units="K"/></td>
				<td><Chart data={pressure} color="teal" units="hPa"/></td>
				<td><Chart data={humidity} color="black" units="%"/></td>
			</tr>
		);
	}

	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			);
	}
}

function mapStateToProps({weather}){
	return { weather }; //{weather} === { weather : weather }
}

export default connect(mapStateToProps)(WeatherList);

