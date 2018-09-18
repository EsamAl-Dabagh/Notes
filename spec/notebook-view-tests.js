function testReturnsHtml(){
  var notebook = new Notebook();
  notebook.createNote("I love Javascript")
  notebook.createNote("I love Ruby")
  var htmlString = "<ul><li>I love Javascript</li><li>I love Ruby</li></ul>"
  var notebookView = new NotebookView(notebook);

  console.log(notebookView.returnHtml());
  assert.isTrue("Returns a string of HTML", notebookView.returnHtml() === htmlString);
}
testReturnsHtml();
