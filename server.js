const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();
const PORT = 9006;
const secretsFile = "./secrets.json";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let secrets = {};

// Load existing secrets
if (fs.existsSync(secretsFile)) {
  const data = fs.readFileSync(secretsFile, "utf-8");
  secrets = data ? JSON.parse(data) : {};
}

// Save secrets to file
function saveSecrets() {
  fs.writeFileSync(secretsFile, JSON.stringify(secrets, null, 2));
}

// API to create a new secret
app.post("/create", (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const id = uuidv4();
  secrets[id] = message;
  saveSecrets();

  res.json({ link: `/secret.html?id=${id}` });
});

// API to get and delete the secret
app.get("/api/secret/:id", (req, res) => {
  const { id } = req.params;
  const message = secrets[id];

  if (!message) {
    return res.status(404).json({ error: "Secret not found or already viewed" });
  }

  delete secrets[id];
  saveSecrets();

  res.json({ message });
});

// Fallback route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
