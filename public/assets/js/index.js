'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    wrapper.append(Portada());
    wrapper.append(navBar());
    wrapper.append(newPortada());
    //wrapper.append(state.url(_ => render(root))); 

    root.append(wrapper);
};

const state = {
    url: Header,
    news : null
};


$( _ => {

    getJSON('/api/news/', (err, json) => {

        if (err) { return alert(err.message);}

        state.news = json;
        console.log(state.news[0]);

        const root = $('.root');
        render(root);
    });

});


/*
const paths = {
    news: 'assets/img/news/',
}
const labNews = {
    allNews: null,
    selectedNew: 0,
    allCategories: null,
    selectedCategory: null
}

$( _ => {

    getJSON('/api/news/', (err, json) => {
        labNews.allNews = json;
        console.log(labNews.allNews);
        const root = $('.root');
        render(root);
    });

    getJSON('/api/categories/', (err, json) => {
        labNews.allCategories = json;
        console.log(labNews.allCategories);
    });

    getJSON('/api/news/' + labNews.selectedNew, (err, json) => {
        labNews.selectedNew = json;
        console.log(labNews.selectedNew);
    });
*/

