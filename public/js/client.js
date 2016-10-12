$(function() {
  console.log('document loaded');

  $('#calculator').on('submit', calculate);
  $('#clear').on('click', clear);
});

function calculate(event){
  event.preventDefault();

var data = $(this).serialize();

var array=$(this).serializeArray();
var formData = {};
array.forEach(function(input){
  formData[input.name]=input.value;
});

$.ajax({
  type: 'POST',
  url: '/math',
  data: data,
  success: function(response){
    updateDisplay(response.result);
    clearForm();
  }
});
}

function updateDisplay(textToDisplay){
  $('#display').text(textToDisplay);
}

function clearForm(){
  $('#calculator').find('input[type=number], input[type=radio]').val('');
}

function clear(){
  clearForm();
  updateDisplay('');
}
