const sharp = require('sharp');
const fs = require("fs")
const path = require("path");

module.exports = async (imagePath) => {
  const image = sharp(imagePath)
  // console.log(imagePath);
  let imageName = imagePath.split(/\.|\\/)
  imageName = imageName[imageName.length - 2]

  // console.log(imageName);
  let long = await image.metadata().then((metadata) => metadata.width > metadata.height ? metadata.height : metadata.width)
  image.resize(long, long, {
    fit: 'cover',
  })
  image.png()
  image.toFile(path.join( `./newImages/${imageName}.png`), (err, info) => {
    if (err) throw err;
    // console.log(`Processed file ${file} (${info.width}x${info.height})`);
  })

}