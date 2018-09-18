(function(exports) {
  function NoteController(notebook) {
    this.notebook = new notebook();
  }  

  NoteController.prototype.addNote = function(text) {
    this.notebook.createNote(text);
    this.createView();
  }

  NoteController.prototype.createView = function() {
    var view = new NotebookView(this.notebook);

    var htmlString = view.returnHtml();

    var element = document.getElementById("app");

    element.innerHTML = htmlString;
  }

  exports.NoteController = NoteController;
})(this);