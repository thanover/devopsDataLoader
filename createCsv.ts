import converter from "json-2-csv";
import fs from "fs";

async function main() {
  let apps = [];
  let appIds: string[] = [];
  let numOfApps = 100;

  for (let i = 0; i < numOfApps; i++) {
    let appId = "ap" + getRandomInt(100000, 300000);

    while (appIds.includes(appId)) {
      appId = "ap" + getRandomInt(100000, 300000);
    }
    appIds.push(appId);
  }
  console.log(appIds);

  for (let appId of appIds) {
    const app = {
      appId,
      appName: getRandomName(),
      productId: getRandomPRId(),
    };
    apps.push(app);
  }

  console.log(apps);

  const data = [
    {
      appId: "ap123456",
      appName: "test app",
    },
  ];

  converter.json2csv(apps, (err, csv) => {
    if (err) {
      throw err;
    }

    // print CSV string
    console.log(csv);

    // write CSV to a file
    if (csv) fs.writeFileSync("devopsAppData.csv", csv);
  });
}

function getRandomName() {
  const mapping: { [Index: number]: string } = {
    1: "Awesome",
    2: "Super",
    3: "Cool",
    4: "Calculating",
    5: "Determining",
    6: "Doing",
    7: "App",
    8: "Service",
    9: "UI",
  };

  let randomNum1 = getRandomInt(1, 4);
  let randomNum2 = getRandomInt(4, 7);
  let randomNum3 = getRandomInt(7, 10);
  return `${mapping[randomNum1]} ${mapping[randomNum2]} ${mapping[randomNum3]}`;
}

function getRandomPRId() {
  const mapping: { [Index: number]: string } = {
    1: "PR000539",
    2: "PR000538",
    3: "PR108240",
  };

  let randomNum = getRandomInt(1, 4);
  return mapping[randomNum];
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

main();
