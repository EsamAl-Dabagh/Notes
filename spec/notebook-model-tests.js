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
