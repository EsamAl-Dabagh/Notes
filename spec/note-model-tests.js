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

(function(exports) {
  function testHasID() {
    var note = new Note("This is a note", 1);

    if (note.returnID()) {
      console.log("Test Passed: has ID")
    } else {
      throw new Error("Does not have an ID");
    }
  }

  testHasID();
})(this);