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


    // $('#closeleftmenu .badge').html("<i class='fa fa-angle-left'></i>");
    // var target = document.querySelector('#leftsidemenudiv')
    // // create an observer instance
    // var observer = new MutationObserver(function(mutations) {
    //     if ($('#leftsidemenudiv').hasClass('active')) {
    //         $('#closeleftmenu .badge').html("<i class='fa fa-angle-right'></i>");
    //     } else {
    //         $('#closeleftmenu .badge').html("<i class='fa fa-angle-left'></i>");
    //     }  
    // });
    // // configuration of the observer:
    // var config = { 
    //     attributes: true, 
    //     attributeFilter: ['class'],
    //     childList: false, 
    //     characterData: false 
    // };
    // // pass in the target node, as well as the observer options
    // observer.observe(target, config);
});

