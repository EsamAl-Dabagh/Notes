// MOCKS
function NoteDouble() {}

NoteDouble.prototype.returnText = function() {
  return "Some text";
}

function NotebookDouble() {
  this.allNotes = [new NoteDouble()];
}

var createNoteCounter = 0;

NotebookDouble.prototype.createNote() {
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
var controller = new NoteController()


// TEST

function testNoteControllerInstantiation() {

}