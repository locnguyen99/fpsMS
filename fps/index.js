$(document).ready( function() {
    $('.container-fluid').first().removeClass('container-fluid').addClass('fps-container');
    $('#main').parent().removeClass('row');
    $('.breadcrumbsWrapper').parent().addClass('container-fluid ');
    $('.navbar').parent().addClass('no-padding-left');
    $('.footer hr').remove();
    $('.logo-footer').parent().removeClass('container');

    $('#main .container-fluid').removeClass('container-fluid');

    // load logo
    $('#sidebar-wrapper a:first').replaceWith(logo);
    // load left menu
    $('ul.sidebar-nav.list-unstyled').replaceWith(menu);
});

