document.addEventListener('DOMContentLoaded', function() {
  var inputElement = document.querySelector('input');
  var countElement = document.createElement('p');
  countElement.innerHTML = '글자 수: <span id="textCount">0</span>';
  inputElement.after(countElement);

  inputElement.addEventListener('input', function() {
      var textLength = this.value.length;
      document.getElementById('textCount').innerText = textLength;
  });
});
