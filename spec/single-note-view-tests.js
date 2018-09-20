// SET UP
var singleNoteView = new SingleNoteView(new Note("Some Text"));

// TESTS
function testSingleNoteViewInstantiation() {
  assert.isTrue("SingleNoteView instantiates with an instance of Note", singleNoteView.note.returnText() === "Some Text");
}
testSingleNoteViewInstantiation();

function testReturnHtml() {
  assert.isTrue("returnHtml will return a string of HTML", singleNoteView.returnHtml() === "<div class='noteSingle'>Some Text</div>");
}
testReturnHtml();