import React from "react";

import "./styles.scss";
const FileApi = () => {
  function handleFileChange(event) {
    // console.log(event);
    const files = event.target.files;
    // getting uploaded file information
    if (files.length === 0) console.log("no file is selected");
    else {
      const file = event.target.files[0];
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      console.log(Date(file.lastModified));
      console.log(file.lastModifiedDate);
    }

    // reading image
    handleShowImage(event);
  }

  function handleShowImage(e) {
    const files = e.target.files;

    let reader = new FileReader();
    // image files should be read using readAsDataURL()

    reader.readAsDataURL(files[0]);
    // ? reading image takes time so better to use onload event
    reader.onload = function (event) {
      const url = reader.result;
      console.log(url);

      var img = new Image();
      img.className = "img";
      img.src = url;

      // ? creating image may take time so better to use onload
      img.onload = function () {
        document.getElementsByClassName("image-cont")[0].appendChild(img);
      };
    };
  }

  function handleMultipleFileChoice(e) {
    // for multiple files you can use wildcards
    // image/*, video/*, image/jpeg, image/png,
    const files = e.target.files;

    if (files.length === 0) console.log("no file is selected");
    else {
      for (let i = 0; i < files.length; i++) {
        console.log(files[i].name);
        console.log(files[i].type);
      }
    }
  }

  function handleReadTextFile(e) {
    const files = e.target.files;

    if (files.length === 0) console.log("no file is selected");
    else {
      const fr = new FileReader();

      fr.readAsText(files[0]);

      fr.onload = () => {
        document.querySelector(".text-cont").textContent = fr.result;
      };
    }
  }

  function handleReadCsvFile(e) {
    const files = e.target.files;

    if (files.length === 0) console.log("no file is selected");
    else {
      const fr = new FileReader();

      fr.readAsText(files[0]);

      fr.onload = () => {
        document.querySelector(".csv-cont").textContent = fr.result;
      };
    }
  }
  return (
    <div className="file-cont">
      <h2>File Api, Blobs & File reader</h2>
      <input type="file" id="upload" onChange={handleFileChange} />

      <div className="image-cont"></div>

      {/* <button onClick={handleShowImage}>Show image</button> */}
      <h2>Multiple files & restricting file types</h2>
      <input
        type="file"
        id="multipleFiles"
        accept="image/*"
        multiple
        onChange={handleMultipleFileChoice}
      />
      <h2>Reading text file</h2>
      <input
        type="file"
        id="textFile"
        accept=".txt"
        onChange={handleReadTextFile}
      />

      <pre className="text-cont"></pre>
      <h2>Reading .csv file</h2>
      <input
        type="file"
        id="csvFile"
        accept=".csv"
        onChange={handleReadCsvFile}
      />

      <pre className="csv-cont"></pre>
    </div>
  );
};

export default FileApi;
