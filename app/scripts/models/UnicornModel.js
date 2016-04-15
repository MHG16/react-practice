import Backbone from 'backbone';

const UnicornModel = Backbone.Model.extend({
	defaults: {
		name: '',
		power: '',
		color: '',
	},

	rootUrl: 'http://tiny-za-server.herokkuapp.com/collections/unicorns',
	idAttribute: '_id'

});

export default UnicornModel; 