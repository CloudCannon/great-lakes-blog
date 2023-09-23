const fs = require('fs');

const dataCollection = 'profiles'

console.log("📝 Formatting data files now...")
// Get all the files in the locations folder
const files = fs.readdirSync(`./data/temp-${dataCollection}`, 'utf8', function(err, files){
  
  if(err){
    console.log(err);
    return;
  }

  return files;
});

// Write multiple json files to one file
for (let i = 0; i < files.length; i++) {
  const fileName = files[i];
  const filePath = `./data/temp-${dataCollection}/${fileName}`;
  const destPath = `./data/${dataCollection}.json`;
  
  const data = fs.readFileSync( filePath )
  const file = JSON.parse(data);

  let formattedFile = `${data},\n`
  if (i === 0) {
    formattedFile = `[\n${data},\n`
  }
  if (i === files.length - 1) {
    formattedFile = `${data}\n]`
  }

  console.log(`Writing ${fileName} to ${destPath}`)
  fs.appendFileSync(destPath, formattedFile, { encoding: "utf8" })
};


