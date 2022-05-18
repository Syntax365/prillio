module.exports = {
  getUserData: getData,
};

async function getData(
  bucketName = "gs://prill-tech.appspot.com",
  fileName = "user_pool.json"
) {
  try {
    return await getMetadata(bucketName, fileName);
  } catch {
    console.error;
  }
}

async function getMetadata(bucketName, fileName) {
  const { Storage } = require("@google-cloud/storage");
  return await new Storage()
    .bucket(bucketName)
    .file(fileName)
    .download()
    .then((file) => {
      return JSON.parse(file[0].toString("utf8"));
    });
}
