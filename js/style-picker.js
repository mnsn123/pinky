jQuery('.style-picker div').click(function() {
  var target = $(this).attr('id');
  $(this).addClass('item_color').siblings().removeClass('item_color');
  $('#' + target).show().siblings('div').hide();
});



function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
