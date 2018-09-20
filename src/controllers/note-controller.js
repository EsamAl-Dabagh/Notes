(function(exports) {
  function NoteController(notebook = new Notebook(), view = NotebookView) {
    this.notebook = notebook;
    this.view = new view(this.notebook)
    this._counter = 0;
  }

  NoteController.prototype.addNote = function(text) {
    this.notebook.createNote(text, this.noteCounter() + 1);
    this.createView();
    this.counterIncrease();
  }

  NoteController.prototype.createView = function() {
    var htmlString = this.view.returnHtml();

    var element = document.getElementById("app");

    element.innerHTML = htmlString;
  }

  NoteController.prototype.noteCounter = function() {
    return this._counter;
  }

  NoteController.prototype.counterIncrease = function() {
    this._counter++;
  }

  exports.NoteController = NoteController;
})(this);