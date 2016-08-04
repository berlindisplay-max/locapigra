$(document).ready(function() {
  $('.magnific-image').magnificPopup({type: 'image'});
  $('.card').matchHeight();
  $('.product-card-item').matchHeight();

  $('.cart-btn').tooltip();

  $('.order-address-form').validate();

  $("#flash").fadeTo(3000, 500).slideUp(500, function(){
    $("#flash").alert('close');
  });

  formLabel();
});

$(document).on("turbolinks:load", function() {
  console.log('test');
  $('.magnific-image').magnificPopup({type: 'image'});
  $('.card').matchHeight();
  $('.product-card-item').matchHeight();

  $('.cart-btn').tooltip();

  $('.order-address-form').validate();

  $("#flash").fadeTo(3000, 500).slideUp(500, function(){
    $("#flash").alert('close');
  });

  formLabel();
});

// override jquery validate plugin defaults
$.validator.setDefaults({
  highlight: function(element) {
    $(element).closest('.form-group').addClass('has-error');
  },
  unhighlight: function(element) {
    $(element).closest('.form-group').removeClass('has-error');
  },
  errorElement: 'span',
  errorClass: 'help-block',
  errorPlacement: function(error, element) {
    if(element.parent('.input-group').length) {
      error.insertAfter(element.parent());
    } else {
      error.insertAfter(element);
    }
  }
});

$(window).load(function() {
  //$('.card').matchHeight();
});


$(document).on('click', '#navbar-toggle', function() {
  $('#navbar-main').toggleClass('shown');
});

var formLabel = function formLabelF() {
  var $formInput = $('.loca-form input.form-control[type="text"], .loca-form input.form-control[type="tel"], .loca-form input.form-control[type="email"], .loca-form input.form-control[type="password"], .loca-form textarea.form-control, .loca-form select.form-control'),
      $formLabel = $('.loca-form label');

  console.log("FORM LABEL!");
  $formInput.each(function() {
    if ($(this).val() !== '') {
      $(this).prev('.loca-label').addClass('focussed');
    }
    $(this).focus(function() {
      $(this).prev('.loca-label').addClass('focussed');
      $(this).prop('placeholder', '');
    });
  });
};
