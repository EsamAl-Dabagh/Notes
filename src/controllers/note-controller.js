(function(exports) {
  function NoteController(notebook = new Notebook(), view = NotebookView, singleView = SingleNoteView) {
    this.notebook = notebook;
    this.view = new view(this.notebook)
    this.singleView = singleView;
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

  NoteController.prototype.createSingleView = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage());
  }

  NoteController.prototype.showNoteForCurrentPage = function() {
    this.showNote(this.getNoteFromURL(window.location.href));
  }

  NoteController.prototype.getNoteFromURL = function(url) {
    console.log(url.hash.split("#notes/")[1]);
    return url.hash.split("#notes/")[1];  
  }

  NoteController.prototype.showNote = function(id) {

    var note = this.notebook.findNote(id);

    var htmlString = new this.singleView(note).returnHtml();

    document.getElementById("app").innerHTML = htmlString;


  }

  exports.NoteController = NoteController;
})(this);