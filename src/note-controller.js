(function(exports) {
  function NoteController(notebook = new Notebook) {
    this.notebook = notebook
  }

  exports.NoteController = NoteController;
})(this);