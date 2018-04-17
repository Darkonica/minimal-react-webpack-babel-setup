import React, { Component } from 'react';
import './styles/styles.scss';

import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<div className="app">
      	<Header />

      	<section className="content">
      		<div>Some content will be here soon, mthrfckr</div>
      	</section>
      </div>
		);
	}
}

export default App;