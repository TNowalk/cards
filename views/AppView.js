(function ( views ) {

	views.AppView = Backbone.View.extend({

		el : '#content',

		initialize : function () {

			
			var tags = this.collection;


			tags.on('add', this.addOne, this);
			tags.on('reset', this.addAll, this);
			
			tags.fetch({
				success: function(){
					tags.pager();

				},
				silent:true
			});

			/* dont know where the proper place to add this next two would be
			so adding on app initialization for now */
			if ('ontouchstart' in document.documentElement) {
				$('html').addClass('touch');
			}


			$('#settings-toggle').click(function(e) {
				e.preventDefault();
				$(this).toggleClass('active');
				$('.settings').toggleClass('active');
			});

		},
		addAll : function () {
			this.$el.empty();
			this.collection.each (this.addOne);
		},
		
		addOne : function ( item ) {
			var view = new views.ResultView({model:item});
			$('#cards').html(view.render().el);
		}

	});

})( app.views );
