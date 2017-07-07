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

