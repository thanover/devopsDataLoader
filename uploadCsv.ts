import csv from "csvtojson";
import axios from "axios";

const csvFileName = "devopsAppData.csv";

async function main() {
  const jsonData = await csv().fromFile(csvFileName);

  for (let row of jsonData) {
    axios.post("http://localhost:3000/apps", row).then(
      (response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

main();
