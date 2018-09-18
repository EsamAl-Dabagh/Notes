function testReturnsHtml(){
  var notebook = new Notebook();
  notebook.createNote("I love Javascript")
  notebook.createNote("I love Ruby")
  var htmlString = "<li>I love Javascript</li><li>I love Ruby</li>"
  var notebookView = new NotebookView(notebook);

  assert.isTrue("Returns a string of HTML", notebookView.returnHtml === htmlString);
}
testReturnsHtml();
