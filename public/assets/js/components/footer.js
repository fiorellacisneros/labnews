const Footer = () => {
    const footer = $('<footer class="container"></footer>');
    const top = $('<p class="pull-right"><a href="#">Subir</a></p>');
    const row = $('<div class="row"></div>');
    const footerleft = $('<div class="col-md-4 footer__left"></div>');
    const imgfootleft = $('<img src="assets/img/logo-footer.png" alt="logofooter">');
    const textfootleft = $('<p>© Editado por Laboratoria Av. José Pardo #601 Lima 1 Perú Copyright © Laboratoria.la         Todos los derechos reservados.</p>');
    const footercenter = $('<div class="col-md-4 footer__center"></div>');
    const textfootcenter = $('<ul><li>DIRECTOR GENERAL:</li><li class="pd-bt-12">Francisco Miró Quesada Cantuarias</li><li>DIRECTOR PERIODÍSTICO:</li><li class="pd-bt-12">Fernando Berckemeyer Olaechea</li><li>SUSCRIPCIONES:</li> <li class="pd-bt-12">suscriptores@comercio.com.pe</li><li>PUBLICIDAD ONLINE:</li><li class="pd-bt-12">fonoavisos@comercio.com.pe</li><li>CLUB EL COMERCIO:</li><li>clubelcomercio@comercio.com.pe</li><li>Compromiso de Autorregulación Comercial</li></ul>');
    const footer_right = $('<div class="col-md-4 footer__right"></div>');
    const textfootright = $('<ul><li>TÉRMINOS Y CONDICIONES DE USO</li><li>TRABAJA CON NOSOTROS</li><li>LIBRO DE RECLAMACIONES</li><li>SEDES PRINCIPALES</li><li>POLÍTICAS DE PRIVACIDAD</li></li></ul>');
    
    footer.append(top);
    footerleft.append(imgfootleft);
    footerleft.append(textfootleft);
    row.append(footerleft);
    footercenter.append(textfootcenter);
    row.append(footercenter);
    footer_right.append(textfootright);
    row.append(footer_right);
    footer.append(row);
    
    return footer;
}