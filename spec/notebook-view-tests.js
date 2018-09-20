function testReturnsHtml(){
  var notebook = new Notebook();
  notebook.createNote("I love Javascript")
  notebook.createNote("I love Ruby")
  var htmlString = "<ul><li>I love Javascript</li><li>I love Ruby</li></ul>"
  var notebookView = new NotebookView(notebook);

  assert.isTrue("Returns a string of HTML", notebookView.returnHtml() === htmlString);
}
testReturnsHtml();

function testOnlyShowFirst20Chars() {
  var notebook = new Notebook();
  var notebookView = new NotebookView(notebook);
  notebook.createNote("This is a note that will hopefully be over 20 characters long.");
  var displayString = "<ul><li>This is a note that </li></ul>"

  assert.isTrue("Only shows the first 20 characters of a note", notebookView.returnHtml() === displayString);
}
testOnlyShowFirst20Chars();