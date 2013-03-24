( function ( views ){

	views.SettingsView = Backbone.View.extend({
		tagName : 'nav',
		className: 'settings',
		setting: 'full',

		variables: {
			setting: 'full'
		},
		template: _.template($('#settings-template').html(), this.variables),

		events: {
			'click a': 'clickHandler'
		},

		
	
		initialize: function() {
			this.collection.bind('change', this.render, this);
			// this.model.bind('destroy', this.remove, this);
			// this.collection.trigger('change');
			console.log(this.variables);
			this.render();

		},

		hide: function() {
			this.$el.toggleClass('active');
		},

		render : function () {
			// var variables = { setting: this.setting };
			this.$el.html(this.template());
			this.$el.prependTo('body');
			$('body').removeClass().addClass(this.setting);
			return this;
		},
		clickHandler: function(e) {
			e.preventDefault();
			var setting = e.currentTarget.hash;
			this.setting = setting.replace('#','');
			this.collection.models[0].trigger('change');
			this.hide();
			// this.render();
			// console.log($('#cards').find('.' + setting));
		}
			
	});

})( app.views );