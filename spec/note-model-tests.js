(function(exports){
  function testNoteTakesAnArgument(){
    var note = new Note("our first note");

    if (note._text !== "our first note") {
      throw new Error("Note is empty")
    } else {
      console.log("Test passed: Note created.")
    }
  }
  testNoteTakesAnArgument();
})(this);


(function(exports) {
  function testNoteReturnsText() {
    var note = new Note ("our first note");

    if (note.returnText() !== "our first note") {
      throw new Error("Did not match text")
    } else {
      console.log("Test Passed: returnText worked.");
    }
  }

  testNoteReturnsText();
})(this);