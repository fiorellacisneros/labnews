const Portada = () => {
    const contportada = $('<div class="container portada"></div>');
    const logo = $('<img src="assets/img/logoicon.png" alt="logo">');
    const portada_info = $('<div class="portada__info"></div>');
    const info = $('<p>Lunes, Junio 12 de 2017</p>|<img src="assets/img/cloud.png" alt=""><span>22°</span>');
    
    contportada.append(logo);
    portada_info.append(info);
    contportada.append(portada_info);
    
    return contportada;
}