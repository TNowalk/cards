( function ( views ){

	views.ResultView = Backbone.View.extend({
		tagName : 'dl',
		className: 'card',
		template: _.template($('#card-template').html()),

		events: {
			'click': 'activateCard',
			'swipeLeft' : 'swipeLeft',
			'swipeRight' : 'swipeRight',
			'click .speak' : 'speak'
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
			this.$el.find('.' + app.views.settings.setting).show().siblings('h1').hide();
			return this;
		},
		activateCard: function(e) {
			var target = e.target;
			if (target.className !== 'speak') {
				this.$el.toggleClass('active');
			}
		},
		// 3 year-old's one request was that it say the words to her
		speak: function(e) {
			e.preventDefault();
			console.log(app.views.settings.setting);
			var read,
				setting = app.views.settings.setting;
			if (setting.match('/first-letter/')) {
				read = this.model.attributes.title_plain.slice(0,1);
			}
			else {
				read = this.model.attributes.title_plain;
			}
			speak(read, {noWorker: true});
		}
	});

})( app.views );