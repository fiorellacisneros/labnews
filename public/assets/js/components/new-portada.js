const newPortada = () => {
    const container = $('<div class="container newportada"></div>');
    const imgportada = $(`<img src="assets/img/news/${state.news[0].img}"/>`);
    
    container.append(imgportada);
    
    return container;
}