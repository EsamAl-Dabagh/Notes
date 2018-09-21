(function(exports){
  function Notebook(){
    this.allNotes = [];
    this._note = Note
    this._counter = 0;
  }

  Notebook.prototype.createNote = function(text){
    this.allNotes.push(new this._note(text, this.noteCounter() + 1));
    this.counterIncrease();
  }

  Notebook.prototype.returnAllNotes = function() {
    return this.allNotes;
  }

  Notebook.prototype.noteCounter = function() {
    return this._counter;
  }

  Notebook.prototype.counterIncrease = function() {
    this._counter++;
  }

  Notebook.prototype.findNote = function(id) {
    var matchedNote;

    this.allNotes.forEach(function(note) {
      if (note.returnID() === id) {
        matchedNote = note;
      }
    });

    return matchedNote;
  }

  exports.Notebook = Notebook;
})(this);
