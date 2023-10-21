import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message: "enter your url ",
     name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    console.log(url);
    var qr_png  = qr.image(url);    
    qr_png.pipe(fs.createWriteStream("qr_image.png"))

    fs.writeFile("url.txt",url,(err)=>{
        if(err) throw err;
        console.log("the file has been saved");
    });

  });
 