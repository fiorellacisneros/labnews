const principalNews = () => {
    const contprincipal = $('<div class="newsfav container"></div>');
    const row = $('<div class="row"></div>');
    const col6 = $('<div class="col-md-6">');
    const new1 = $(`<img class="img-responsive" src="assets/img/news/${state.news[1].img}"/>`);
    const infonew1 = $('<div class="newsfav__info1"><p>'+ state.news[1].title+'</p></div>');
    const col3 = $('<div class="col-md-3">');
    const new2 = $(`<img class="img-responsive" src="assets/img/news/${state.news[2].img}"/>`);
    const infonew2 = $('<div class="newsfav__info"><p>'+ state.news[2].title+'</p><div>');
    const col_3 = $('<div class="col-md-3">');
    const infonew3 = $('<div class="newsfav__info"><p>'+ state.news[3].title+'</p></div>');
    const new3 = $(`<img class="img-responsive" src="assets/img/news/${state.news[3].img}"/>`);
    
    col6.append(new1);
    col6.append(infonew1);
    row.append(col6);
    col3.append(new2);
    col3.append(infonew2);
    row.append(col3);
    col_3.append(new3);
    col_3.append(infonew3);
    row.append(col_3);
    contprincipal.append(row);

    return contprincipal;
}