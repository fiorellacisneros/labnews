const navBar = () => {
    const cont_nav = $('<div class="container cont-nav"></div>');
    const nav = $('<nav class="navbar navbar-default" role="navigation"></nav>');
    const navbar_header = $('<div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><img class="navbar-brand visible-xs" src="assets/img/logoicon.png"></img></div>');
    const collapse = $('<div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav"><li><a href="#">Lo último</a></li><li><a href="#">Opinión</a></li><li><a href="#">Cultura</a></li><li><a href="#">Perú</a></li><li><a href="#">Tecnología</a></li><li><a href="#">Mundo</a></li><li><a href="#">Economía</a></li><li><a href="#">Lifestyle</a></li><li><a href="#">Deporte</a></li></ul></div>');
    
    nav.append(navbar_header);
    nav.append(collapse);
    cont_nav.append(nav);
    
    return cont_nav;
}