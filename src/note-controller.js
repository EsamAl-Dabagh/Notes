(function(exports) {
  function NoteController(notebook, view) {
    this.notebook = notebook;
    this.view = new view(this.notebook);
  }  

  NoteController.prototype.addNote = function(text) {
    this.notebook.createNote(text);
    this.createView();
  }

  NoteController.prototype.createView = function() {

    var htmlString = this.view.returnHtml();

    var element = document.getElementById("app");

    element.innerHTML = htmlString;
  }

  exports.NoteController = NoteController;
})(this);