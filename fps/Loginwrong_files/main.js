$(function () {
  setTimeout(function(){ $(".alert").alert("close"); }, 10000);
  
  $('[data-toggle="tooltip"]')
  	.tooltip();
  $(document).on("click",".linked-element",function(){
  	var target = $(this).attr("data-href");
  	window.location.href = target ;
  });
  $(".create-job").click(function(e){e.stopImmediatePropagation();});
});
function isValidPassword(pass){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var result = {
      'valid' : false ,
      'eclass' : '',
      'message' : ''
    };
    if (strongRegex.test( pass ) ) {
    result.eclass = 'pass-strong' ;
    result.message = 'Sterk!' ;
    result.valid = true ;
    } else {
    result.eclass = 'pass-weak' ;
    result.message = 'Zwak!' ;
    }
    return result ;
}
function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}
$('[data-rel=popover]').popover({container:'body'});
$(".closecollapseall").click(function(){
  $('.panel-collapse.in').collapse('hide');
});

$(".closecollapseall").on("hide.bs.collapse", function(){
  $(this).find(".addcaret").removeClass('caret-up');
});
$(".closecollapseall").on("show.bs.collapse", function(){
  $(this).find(".addcaret").addClass('caret-up');
});
$("#closeleftmenu").click(function(){
  var btntext = $("#closemenuicon").text();
  if(btntext == "<"){
    $("#leftsidemenudiv").addClass("active");
    $("#closemenuicon").text(">");
    $("#logofps").attr("src","/assets/images/FPS-Logo-short.png");
  }else{
    $("#leftsidemenudiv").removeClass("active");
    $("#closemenuicon").text("<");
    $("#logofps").attr("src","/assets/images/FPS-Logo.png");
  }
});

$('.menuliparent a').filter(function(){
  return this.href==location.href
}).parent().addClass('activemenu');
$('.menuliparent a').filter(function(){
  return this.href==location.href
}).parentsUntil('.closecollapseall').collapse("show");

// $('.menuliparent a').click(function(){
//   $(this).addClass('active').siblings().removeClass('active')	
// })