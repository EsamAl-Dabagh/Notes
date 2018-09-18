
(function(exports) {
  
  function changeText(id, newText) {
    var divText = document.getElementById(id);
    divText.innerHTML = newText;
  }
  

  exports.changeText = changeText;
})(this);