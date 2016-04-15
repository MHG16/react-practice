// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import React from 'react';
import {render} from 'react-dom';
import unicorncollection from './collections/UnicornCollection.js';
import UnicornModel from './models/UnicornModel';
import UnicornRow from './components/unicornRow.js'

const UnicornPage = React.createClass({
	componentDidMount: function () {
		console.log('the component mounted');
		console.log(this);
		this.state.unicorncollection.on('update change' , () =>  {
			console.log('the collection changed');
			console.log(this);
			this.setState({unicorncollection: unicorncollection});
		});

		this.state.unicorncollection.fetch();

	},

	getInitialState: function () {
		console.log('getInitialState');
		console.log(this);
		return {unicorncollection: unicorncollection};
	},

	addUnicorn: function (e) {
		e.preventDefault();
		console.log('event is working');
		console.log(this);
		const newUnicorn = new UnicornModel();

		newUnicorn.set({name: this.refs.name.value, color: this.refs.color.value, power: this.refs.power.value});

		unicorncollection.create(newUnicorn);


	},	


	render: function() {
		console.log('render');
		console.log(this);
		
		let unicornComponentList = this.state.unicorncollection.map(function (value, index, array) {
			
			return <UnicornRow name={value.get('name')} color={value.get('color')} power={value.get('power')} />



		});

		return (
			<section>
				<form onSubmit={this.addUnicorn}>
					<h1>Name</h1>
					<input type='text' ref='name'></input>
					<h1>Color</h1>
					<input type='text' ref='color'></input>
					<h1>Power</h1>
					<input type='text' ref='power'></input>
					<button type='submit'>Submit</button>
				</form>
			{unicornComponentList} 
			</section>
			)


	}


})
render(<UnicornPage />, document.querySelector('.app') );





// import {Router, Route, hashHistory, Link} from 'react-router'; //need to import this to use a router

// //navigation component

// const Nav = React.createClass({
// 	render: function() {
// 		return (
// 			<nav>
// 				<Link to="/">Home</Link>
// 				<Link to="/login">Login</Link>
// 				<Link to="/NewUnicorn">New Unicorn</Link>
// 				<Link to="/details">Details"</Link>
// 			</nav>
// 			)
// 	}
// });



// const Home = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<h1>Home!</h1>
// 				<Nav/>
// 			</div>
// 			)
// 	}
// });

// const Login = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<h1>Login!</h1>
// 				<Nav/>
// 			</div>
// 			)
// 	}
// });

// const NewUnicorn = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<h1>NewUnicorn!</h1>
// 				<Nav/>
// 			</div> 
// 			)
// 	}
// });


// //making a router
// //router looks at the url and then rendering different stuff based on the url.  

// const router = (

// 	<Router history= {hashHistory}>
// 		<Route path="/"/>
// 		<Route path="/login"/>
// 		<Route path="/newUnicorn"/>
// 		<Route path="details" component={UnicornDetailsPage}/>
// 	</Router>
// )



// ReactDOM.render(router, document.getElementById('app'));

