document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();

    if (event.target.id === "dropzone") {
      event.dataTransfer.dropEffect = "copy";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();

    if (event.target.id === "dropzone") {
      alert("Upload en cours");
    }
  },
  false
);
