(function(exports){
  function NotebookView(notebook){
    this.notebook = notebook
  }

  NotebookView.prototype.returnHtml = function(){
    var allNotes = this.notebook.returnAllNotes();

    var joined = "<ul>"

    allNotes.forEach(function(note) {
      var text = note.returnText().slice(0, 20);
      joined = joined + `<li><a href='#notes/${note.returnID()}'>${text}</a></li>`;
    });

    var allNotesJoined = joined + "</ul>";
    return allNotesJoined
  }

  exports.NotebookView = NotebookView;
})(this);
