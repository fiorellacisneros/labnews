const moreMundo = () => {
    const contmoremundo = $('<div class="newsfavmundo container"></div>');
    const row = $('<div class="row pd-top-20"></div>');
    const col6 = $('<div class="col-md-3">');
    const new1 = $(`<img class="img-responsive" src="assets/img/news/${state.news[10].img}"/>`);
    const infonew1 = $('<div class="newsfav__info"><p>'+ state.news[10].title+'</p></div>');
    const col3 = $('<div class="col-md-3">');
    const new2 = $(`<img class="img-responsive" src="assets/img/news/${state.news[11].img}"/>`);
    const infonew2 = $('<div class="newsfav__info"><p>'+ state.news[11].title+'</p><div>');
    const col_3 = $('<div class="col-md-3">');
    const infonew3 = $('<div class="newsfav__info"><p>'+ state.news[12].title+'</p></div>');
    const new3 = $(`<img class="img-responsive" src="assets/img/news/${state.news[12].img}"/>`);
    const col__3 = $('<div class="col-md-3">');
    const infonew_3 = $('<div class="newsfav__info"><p>'+ state.news[13].title+'</p></div>');
    const new_3 = $(`<img class="img-responsive" src="assets/img/news/${state.news[13].img}"/>`);

    col6.append(new1);
    col6.append(infonew1);
    row.append(col6);
    col3.append(new2);
    col3.append(infonew2);
    row.append(col3);
    col_3.append(new3);
    col_3.append(infonew3);
    row.append(col_3);
    col__3.append(new_3);
    col__3.append(infonew_3);
    row.append(col__3);
    contmoremundo.append(row);

    return contmoremundo;
}