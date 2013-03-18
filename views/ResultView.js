( function ( views ){

	views.ResultView = Backbone.View.extend({
		tagName : 'dl',
		className: 'card',
		template: _.template($('#card-template').html()),

		events: {
			'click': 'activateCard',
			'swipeLeft' : 'swipeLeft',
			'swipeRight' : 'swipeRight'
		},

		swipeLeft: function(e) {
			this.model.collection.nextPage();
		},

		swipeRight: function(e) {
			this.model.collection.previousPage();
		},
	
		initialize: function() {
			this.model.bind('change', this.render, this);
			this.model.bind('destroy', this.remove, this);
			this.model.bind('swipeLeft', this.swipeLeft, this);
		},

		render : function () {
			this.$el.html(this.template(this.model.toJSON()));
			this.delegateEvents();
			this.$el.find('.' + app.views.settings.setting).show().siblings().hide();
			return this;
		},
		activateCard: function(e) {
			console.log(e);
			this.$el.toggleClass('active');
		}
	});

})( app.views );