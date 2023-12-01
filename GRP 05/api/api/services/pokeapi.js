const https = require("https");

const options = {
  hostname: "pokeapi.co",
  path: "/api/v2/pokemon/1/",
  method: "GET",
};

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    console.log("requisitando dados...");
    data += chunk;
  });
  res.on("end", () => {
    console.log("{");
    console.log("", "abilities: ", JSON.parse(data)["abilities"].length);
    console.log("", "name:", JSON.parse(data)["name"]);
    console.log("", "back_default: ",JSON.parse(data)["sprites"]["back_default"]);
    console.log("}");
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
