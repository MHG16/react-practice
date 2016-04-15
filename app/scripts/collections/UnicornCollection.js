import Backbone from 'backbone';

import UnicornModel from '../models/UnicornModel.js';

const UnicornsCollection = Backbone.Collection.extend({
	model: UnicornModel,
	url: 'http://tiny-za-server.herokuapp.com/collections/unicorns'

});

//instantiate it
let unicorns = new UnicornsCollection();

export default unicorns;  
