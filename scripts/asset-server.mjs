import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "..", "public", "images");
fs.mkdirSync(OUT_DIR, { recursive: true });

const PORT = 9231;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  if (req.method !== "POST") {
    res.writeHead(200);
    res.end("asset-server up");
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);
  const name = url.searchParams.get("name");
  if (!name || /[\\/]/.test(name)) {
    res.writeHead(400);
    res.end("bad name");
    return;
  }

  const enc = url.searchParams.get("enc");
  const chunks = [];
  req.on("data", (c) => chunks.push(c));
  req.on("end", () => {
    let buf = Buffer.concat(chunks);
    if (enc === "base64") {
      buf = Buffer.from(buf.toString("utf8"), "base64");
    }
    const filePath = path.join(OUT_DIR, name);
    fs.writeFileSync(filePath, buf);
    console.log(`wrote ${name} (${buf.length} bytes)`);
    res.writeHead(200);
    res.end(JSON.stringify({ ok: true, name, bytes: buf.length }));
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`asset-server listening on http://localhost:${PORT}`);
});
