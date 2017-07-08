const Mundo = () => {
    const contmundo = $('<div class="newsfav container"></div>');
    const title = $('<h2>MUNDO</h2>');
    const hr = $('<hr>');
    const row = $('<div class="row pd-top-20"></div>');
    const col6 = $('<div class="col-md-3">');
    const new1 = $(`<img class="img-responsive" src="assets/img/news/${state.news[4].img}"/>`);
    const infonew1 = $('<div class="newsfav__info"><p>'+ state.news[4].title+'</p></div>');
    const col3 = $('<div class="col-md-3">');
    const new2 = $(`<img class="img-responsive" src="assets/img/news/${state.news[5].img}"/>`);
    const new_2 = $(`<img class="img-responsive" src="assets/img/news/${state.news[8].img}"/>`);
    const new__2 = $(`<img class="img-responsive" src="assets/img/news/${state.news[9].img}"/>`);
    const col_3 = $('<div class="col-md-3">');
    const infonew2 = $('<div class="newsfav__info"><p>'+ state.news[5].title+'</p><div>');
    const infonew3 = $('<div class="newsfav__info"><p>'+ state.news[6].title+'</p></div>');
    const new3 = $(`<img class="img-responsive" src="assets/img/news/${state.news[6].img}"/>`);
    const col__3 = $('<div class="col-md-3">');
    const infonew_3 = $('<div class="newsfav__info"><p>'+ state.news[7].title+'</p></div>');
    const new_3 = $(`<img class="img-responsive" src="assets/img/news/${state.news[7].img}"/>`);
    
    contmundo.append(title);
    contmundo.append(hr);
    col6.append(new1);
    col6.append(infonew1);
    row.append(col6);
    col3.append(new2);
    col3.append(infonew2);
    col3.append(new_2);
    col3.append(new__2);
    row.append(col3);
    col_3.append(new3);
    col_3.append(infonew3);
    row.append(col_3);
    col__3.append(new_3);
    col__3.append(infonew_3);
    row.append(col__3);
    contmundo.append(row);
    
    return contmundo;
}