(function(exports){
  function NotebookView(notebook){
    this.notebook = notebook
  }

  NotebookView.prototype.returnHtml = function(){
    var allNotes = this.notebook.returnAllNotes();

    var joined = "<ul>"

    allNotes.forEach(function(note) {
      var text = note.returnText();
      joined = joined + "<li>" + text + "</li>";
    });

    var allNotesJoined = joined + "</ul>";
    return allNotesJoined
  }

  exports.NotebookView = NotebookView;
})(this);
