'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    wrapper.append(Portada());
    wrapper.append(navBar());
    //wrapper.append(state.url(_ => render(root))); 

    root.append(wrapper);
};

const state = {
    allNews: null
};

( _ => {
    getJSON('/api/news/', (err, json) => {
        labnews.allNews = json;
        console.log(labnews.allNews);
    });
});

var getJSON = (url, cb) => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
            return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
        } cb(null, xhr.response);
    });

    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
};