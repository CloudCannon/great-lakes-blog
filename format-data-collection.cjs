const fs = require('fs');

// TODO: Get dataCollections as an env
const dataCollections = ['profiles', 'locations']

for (let i = 0; i < dataCollections.length; i++) {
  const dataCollection = dataCollections[i];
  console.log(`📝 Formatting ${dataCollection} data files now...`)
  
  // Get all the files in the locations folder
  const files = fs.readdirSync(`./data/temp-${dataCollection}`, 'utf8', function(err, files){
    
    if(err){
      console.log(err);
      return;
    }
  
    return files;
  });
  
  // Write multiple json files to one file
  for (let j = 0; j < files.length; j++) {
    const fileName = files[j];
    const filePath = `./data/temp-${dataCollection}/${fileName}`;
    const destPath = `./data/${dataCollection}.json`;
    
    const data = fs.readFileSync( filePath )
    const file = JSON.parse(data);
  
    let formattedFile = `${data},\n`
    if (j === 0) {
      formattedFile = `[\n${data},\n`
    }
    if (j === files.length - 1) {
      formattedFile = `${data}\n]`
    }
  
    console.log(`Writing ${fileName} to ${destPath}`)
    fs.appendFileSync(destPath, formattedFile, { encoding: "utf8" })
  };
  
}


