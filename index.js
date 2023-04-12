const sharp = require('sharp');
const sharp1 = require("./utils/sharp1")
const fs = require("fs")
const path = require("path");


let fn = async () => {
  let dirPath = path.join(__dirname, "./images")
  let file = fs.readdirSync(dirPath)
  // console.log(file);
  // file.forEach(async (item) => {
  //   let filePath = path.join(dirPath,item)
  //   await sharp1(filePath)
  // })


  // let long = await image.metadata().then((metadata) => metadata.width > metadata.height ? metadata.height : metadata.width)
  // console.log(long)
  // image.resize(long, long, {
  //   fit: 'cover',
  // })
  // image.png()
  // image.toFile("1.png")

  for (const item of file) {
    let filePath = path.join(dirPath, item)

    await sharp1(filePath)
  }
}
fn()
