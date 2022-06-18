// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// console.log(file1);

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fncallback) => {
  fs.readFile(file1, "utf-8", (err, dataYagAkanDiBaca1) => {
    if (err) {
      return fncallback(err);
    }
    fs.readFile(file2, "utf-8", (err, dataYangAkanDiBaca2) => {
      if (err) {
        return fncallback(err);
      }
      fs.readFile(file3, "utf-8", (err, dataYangAkanDiBaca3) => {
        let result =
          JSON.parse(dataYagAkanDiBaca1).message +
          " " +
          JSON.parse(dataYangAkanDiBaca2)[0].message +
          " " +
          JSON.parse(dataYangAkanDiBaca3)[0].data.message;
        fncallback(
          err,
          result
            .split(" ")
            .filter((element) => element.toLowerCase() !== "halo")
        );
      });
    });
  });
};
// function bacaData1() {
//   fs.readFile(file1, "utf-8", (err, data1) => {
//     if (err) {
//       return console.log(err);
//     }
//     let dataFix1 = JSON.parse(data1).message;
//     console.log(dataFix1.split(" ").pop());
//   });
// }

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
