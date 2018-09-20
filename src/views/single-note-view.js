(function (exports) {

  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.returnHtml = function() {
    return `<div class='noteSingle'>${this.note.returnText()}</div>`
  }

  exports.SingleNoteView = SingleNoteView;
})(this);