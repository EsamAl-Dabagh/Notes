(function(exports) {
  function NoteController(notebook = new Notebook(), view = NotebookView) {
    this.notebook = notebook;
    this.view = new view(this.notebook)
  }

  NoteController.prototype.addNote = function(text) {
    this.notebook.createNote(text);
  }

  exports.NoteController = NoteController;
})(this);