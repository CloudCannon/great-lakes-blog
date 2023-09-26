const fs = require('fs').promises;

// TODO: Get dataCollections as an env
const collections = ['profiles', 'locations'];
(async () =>
  Promise.all(
    collections.map(async (collectionName) => {
      console.log(`📝 Formatting ${collectionName} data files now...`);
      const collectionDir = `./data/temp-${collectionName}`;
      const files = await fs.readdir(collectionDir);

      const items = await Promise.all(files.map(async (fileName) => {
        const contents = await fs.readFile(`${collectionDir}/${fileName}`);
        return JSON.parse(contents.toString('utf8'));
      }));

      const destPath = `./data/${collectionName}.json`;
      console.log(`Writing to ${destPath}`);
      return fs.writeFile(destPath, JSON.stringify(items, null, '\t'), {
        encoding: 'utf8',
      });
    })
  ))();
