(function(exports){
  function Note(text, id) {
    this._text = text;
    this._id = id;
  }

  Note.prototype.returnText = function() {
    return this._text;
  }

  Note.prototype.returnID = function() {
    return this._id;
  }

 exports.Note = Note;
})(this);
