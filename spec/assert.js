var assert = {
  isTrue: function(description, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log(`Test passed: ${description}`);
    }
  },

  include: function(description, thingToCheck, thingToInclude) {
    if (thingToCheck.includes(thingToInclude)) {
      console.log(`Test passed: ${description}`);
    } else {
      throw new Error(`Assertion failed: '${thingToCheck}' does not include '${thingToInclude}'`)
    }
  }

}