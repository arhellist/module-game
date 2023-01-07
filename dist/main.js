(() => {
  "use strict";
  console.log("Domain module has started"),
    new (class {
      start() {
        console.log("game started");
      }
    })().start(),
    console.log("function readGameSaving monule Game"),
    console.log("function writeGameSaving monule Game");
})();
