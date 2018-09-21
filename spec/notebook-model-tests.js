function testNotebookInstantiate(){
  var notebook = new Notebook();

  assert.isTrue("Notebook instantitates with empty array", notebook.allNotes.length === 0);
}
testNotebookInstantiate();

function testCreateNote(){
  var notebook = new Notebook();
  notebook.createNote("I love Javascript")

  assert.isTrue("createNote adds note to array", notebook.allNotes.length ===1);
}
testCreateNote();

function testReturnNoteBookNotes(){
  var notebook = new Notebook();
  notebook.createNote("I love Javascript")

  var returnedNotes = notebook.returnAllNotes();
  assert.isTrue ("Returns the text of a note", returnedNotes[0].returnText() === "I love Javascript");
}
testReturnNoteBookNotes();

function testAddsUniqueIDtoEachNote() {
  var notebook = new Notebook();
  var firstNote = notebook.createNote("Here be some text");
  var secondNote = notebook.createNote("This is another note");

  
}

function testHasNoteCounter() {
  var notebook = new Notebook();
  assert.isTrue("Has a Note Counter", notebook.noteCounter() === 0);
}
testHasNoteCounter();

function testCounterIncrease() {
  var notebook = new Notebook();
  
  notebook.counterIncrease();

  assert.isTrue("Increases _counter by one", notebook._counter === 1);
}
testCounterIncrease();

function testCounterIncreaseWhenNoteAdded() {
  var notebook = new Notebook();
  notebook._counter = 0;
  notebook.createNote("Some more text")

  assert.isTrue("It increases the counter by one", notebook.noteCounter() === 1);
}
testCounterIncreaseWhenNoteAdded();

function testFindNote() {
  var notebook = new Notebook();
  notebook.createNote("Test Note A");
  notebook.createNote("Test Note B");

  assert.isTrue("It can find a note by ID", notebook.findNote(2).returnText() === "Test Note B")
}
testFindNote();