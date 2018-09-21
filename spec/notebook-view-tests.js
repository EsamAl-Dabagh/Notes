function testReturnsHtml(){
  var notebook = new Notebook();
  notebook.createNote("I love Javascript")
  notebook.createNote("I love Ruby")
  var htmlString = "<ul><li><a href='#notes/1'>I love Javascript</a></li><li><a href='#notes/2'>I love Ruby</a></li></ul>"
  var notebookView = new NotebookView(notebook);

  assert.isTrue("Returns a string of HTML", notebookView.returnHtml() === htmlString);
}
testReturnsHtml();

function testOnlyShowFirst20Chars() {
  var notebook = new Notebook();
  var notebookView = new NotebookView(notebook);
  notebook.createNote("This is a note that will hopefully be over 20 characters long.");
  var displayString = "<ul><li><a href='#notes/1'>This is a note that </a></li></ul>"

  assert.isTrue("Only shows the first 20 characters of a note", notebookView.returnHtml() === displayString);
}
testOnlyShowFirst20Chars();