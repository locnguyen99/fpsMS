$(document).ready(function () {
    $('.container-fluid').first().removeClass('container-fluid').addClass('fps-container');
    $('#main').parent().removeClass('row');
    $('.breadcrumbsWrapper').parent().addClass('container-fluid ');
    $('.navbar').parent().addClass('no-padding-left');
    $('.footer hr').remove();
    $('.logo-footer').parent().removeClass('container');

    $('#main .container-fluid').removeClass('container-fluid');
    $('#main .container').removeClass('container').addClass('bg-white');

    //update layout
    $('.breadcrumbsWrapper .row:first').removeClass('row').addClass('flex-space-between');
    $('.flex-space-between .col-md-6:first').removeClass('col-md-6');
    $('.flex-space-between .col-md-6:first').removeClass('col-md-6');
    //notification pgae
    $('.flex-space-between .col-md-10:first').removeClass('col-md-10');
    $('.flex-space-between .col-md-2:first').removeClass('col-md-2');


    // load logo
    $('#sidebar-wrapper a:first').replaceWith(logo);
    // load left menu
    $('ul.sidebar-nav.list-unstyled').replaceWith(menu);

    $(".toggle.btn.btn-default.off.btn-sm.fps-toggle").children().first().remove();

    //HH
    $("#main .breadcrumbsWrapper").insertBefore("#main")
    $("#main .panel-group .col-md-4").removeClass("col-md-4").addClass("col-lg-6 col-xl-4")

    // avanken local
    $('#main.locationsOverview .bg-white').removeClass('bg-white')

    //avatar
    $('i.fa.fa-user').parent().addClass('user-bg');
    $('i.fa.fa-user').remove();
    $('.user-bg').removeClass('btn');

    //checkbox
    var myCheckbox = $('.my-controls .chk-container').clone();
    $('input[type=checkbox]').replaceWith($(myCheckbox));
    
    //login and logout
    $('.logoSmall').replaceWith(logo);
    //logout
    $('.fa.fa-sign-out').parent().attr('href', './index.html');
    
});

