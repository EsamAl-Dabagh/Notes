// MOCKS
function NoteDouble() {}

NoteDouble.prototype.returnText = function() {
  return "Some text";
}

function NotebookDouble() {
  this.allNotes = [new NoteDouble()];
}

var createNoteCounter = 0;

NotebookDouble.prototype.createNote = function() {
  createNoteCounter++;
}

function NotebookViewDouble() {}

NotebookViewDouble.prototype.returnHTML = function() {
  return "<ul><li><div>Some text</div></li><ul>";
}

function Element() {
  this.innerHTML = "Hello";
}

// SET-UP
var controller = new NoteController(new NotebookDouble(), NotebookViewDouble)


// TEST

function testNoteControllerInstantiation() {
  assert.isTrue("NoteController instantiates with Notebook", controller.notebook);
  assert.isTrue("NoteController instantiates with NotebookView", controller.view);
}
testNoteControllerInstantiation();

function testNoteControllerRespondsToAddNote() {
  controller.addNote("A note");
  assert.isTrue("NoteController calls createNote on Notebook", createNoteCounter === 1);
}
testNoteControllerRespondsToAddNote();