const newPortada = () => {
    const container = $('<div class="container newportada"></div>');
    const imgportada = $(`<img src="assets/img/news/${state.news[0].img}"/>`);
    const infonew = $('<h3>'+state.news[0].title +'</h3>');
    const brief = $('<p>'+ state.news[0].brief +'</p>');
          
    container.append(imgportada);
    container.append(infonew);
    container.append(brief);
    
    return container;
}