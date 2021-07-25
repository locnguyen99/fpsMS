$(document).ready( function() {
    $('.container-fluid').first().removeClass('container-fluid').addClass('fps-container');
    $('#main').parent().removeClass('row');
    $('.breadcrumbsWrapper').parent().addClass('container-fluid ');
    $('.navbar').parent().addClass('no-padding-left');
    $('.footer hr').remove();
    $('.logo-footer').parent().removeClass('container');

    $('#main .container-fluid').removeClass('container-fluid');
    $('#main .container').removeClass('container');

    //update layout
    $('.breadcrumbsWrapper .row:first').removeClass('row').addClass('flex-space-between');
    $('.flex-space-between .col-md-6:first').removeClass('col-md-6');
    $('.flex-space-between .col-md-6:first').removeClass('col-md-6');


    // load logo
    $('#sidebar-wrapper a:first').replaceWith(logo);
    // load left menu
    $('ul.sidebar-nav.list-unstyled').replaceWith(menu);
});

