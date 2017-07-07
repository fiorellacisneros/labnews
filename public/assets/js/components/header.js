const Header = () => {
    const container = $('<header class="container"></header>');
    const cont_options = $('<div class="cont__options"></div>');
    const options = $('<img class="cont__options--sections" src="assets/img/menu.png"/><span>SECTIONS</span>                     <img class="cont__options--search" src="assets/img/search.png"/><span>SEARCH</span>'); 
    const cont_social = $('<div class="cont__social fl-right"></div>'); 
    const social = $('<img src="assets/img/fb.png"/><img src="assets/img/tw.png"/><img src="assets/img/in.png"/>');
    
    cont_options.append(options);
    cont_social.append(social);
    container.append(cont_options);
    container.append(cont_social);
    
    return container;
}