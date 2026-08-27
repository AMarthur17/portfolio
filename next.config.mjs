import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixa a raiz neste projeto para o Turbopack não subir a árvore de
  // diretórios em busca de um lockfile fora do repositório.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
