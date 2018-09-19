(function(exports){
  function Notebook(){
    this.allNotes = [];
    this._note = Note
  }

  Notebook.prototype.createNote = function(text){
    this.allNotes.push(new this._note(text));
  }

  Notebook.prototype.returnAllNotes = function() {
    return this.allNotes;
  }

  exports.Notebook = Notebook;
})(this);
