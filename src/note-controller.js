(function(exports) {
  function NoteController(notebook = new Notebook(), view = NotebookView) {
    this.notebook = notebook;
    this.view = new view(this.notebook)
  }

  NoteController.prototype.addNote = function(text) {
    this.notebook.createNote(text);
  }

  NoteController.prototype.createView = function() {

    var htmlString = this.view.returnHtml();

    var element = document.getElementById("app");

    element.innerHTML = htmlString;
  }

  exports.NoteController = NoteController;
})(this);