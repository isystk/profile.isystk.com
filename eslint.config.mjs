import { includeIgnoreFile } from "@eslint/compat";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  // .gitignore を読み込んで ignores として適用する
  includeIgnoreFile(resolve(__dirname, ".gitignore")),

  ...nextCoreWebVitals,
  ...nextTypescript,

  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    }
  },
  // 個別に追加したい無視設定があればここに記述
  {
    ignores: ["next-env.d.ts"]
  }
];

export default eslintConfig;
