const dropzone = document.getElementById("dropzone");
const uploadResult = document.getElementById("uploadResult");
let allUploadResults = [];

dropzone.addEventListener("dragover", function (event) {
  event.preventDefault();
  dropzone.style.borderColor = "blue";
});

dropzone.addEventListener("drop", function (event) {
  event.preventDefault();
  dropzone.style.borderColor = "gray";

  const files = event.dataTransfer.files;

  if (files.length > 0) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("fichiers[]", files[i]);
    }

    fetch("upload.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        allUploadResults = allUploadResults.concat(data.details);
        uploadResult.innerHTML = allUploadResults.join("<br>");
      })
      .catch((error) => console.error("Erreur lors de l'upload:", error));
  }
});
