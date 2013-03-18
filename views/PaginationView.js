(function (views) {

	views.PaginationView = Backbone.View.extend({

		events: {
			'click a.prev': 'gotoPrev',
			'click a.next': 'gotoNext'
	
		},

		tagName: 'div',

		className: 'pagination',

		pagingTemplate: _.template($('#pagination-template').html()),

		initialize: function () {

			this.collection.on('reset', this.render, this);
			this.collection.on('change', this.render, this);
			this.$el.insertAfter('#cards');

		},
		render: function () {
			var html = this.pagingTemplate(this.collection.info());
			this.$el.html(html);
		},

		gotoPrev: function (e) {
			e.preventDefault();
			this.collection.previousPage();
		},

		gotoNext: function (e) {
			e.preventDefault();
			this.collection.nextPage();
		}
		
	});
})( app.views );