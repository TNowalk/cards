(function (collections, model, paginator) {
    collections.PaginatedCollection = paginator.clientPager.extend({

        model: model,

        url: 'http://jasonlcrane.com/cards-wp/api/get_recent_posts/?count=-1&orderby=rand',
        
        // current page to query from the service
        page: 1,

        // how many results to query from the service
        count: 50,

        totalPages: 5,

        // how many results to display per 'client page'
        displayPerPage: 1,

        // request format
        format: 'json',

        parse: function (response) {
            var tags = response.posts;
            return tags;
        }

    });


})( app.collections, app.models.Item, Backbone.Paginator);