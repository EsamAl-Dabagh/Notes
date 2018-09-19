// MOCKS
function NoteDouble() {}
NoteDouble.prototype.returnText = function() {
  return "Some text";
}

function NotebookDouble() {
  this.allNotes = [new NoteDouble()];
}



// TESTS
function testSingleNoteViewInstantiation() {
  var singleNoteView = new SingleNoteView(new NotebookDouble());

  assert.isTrue("SingleNoteView instantiates with a Notebook instance", singleNoteView.notebook !== undefined);
}
testSingleNoteViewInstantiation();