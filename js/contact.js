$(document).ready(function() {
  $('form').submit(function(event) {

    var formData = {
      'name' : $('input[name=name]').val(),
      'email' : $('input[name=email]').val(),
      'message' : $('input[name=message]').val()
    };
    $.ajax({
      type : 'POST',
      url : 'https://www.enformed.io/4t2byfdd',
      data: formData,
      dataType : 'json',
      accepts: 'application/json',
      success: () => alert('success!'),
      error: () => alert('failed!')
    })
  })
})