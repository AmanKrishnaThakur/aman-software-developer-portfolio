import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const astroCli = join(root, "node_modules", "astro", "bin", "astro.mjs");
const child = spawn(process.execPath, [astroCli, ...process.argv.slice(2)], {
  cwd: root,
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
