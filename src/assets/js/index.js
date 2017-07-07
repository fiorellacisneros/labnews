'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    wrapper.append(Portada());
    //wrapper.append(state.url(_ => render(root))); 

    root.append(wrapper);
};

const state = {
    url: Header
};

$( _ => {
    const root = $('.root');
    render(root);
});