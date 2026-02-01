import { FlatCompat } from "@eslint/eslintrc";
import { includeIgnoreFile } from "@eslint/compat"; // 追加
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // .gitignore を読み込んで ignores として適用する
  includeIgnoreFile(resolve(__dirname, ".gitignore")),

  ...compat.extends("next/core-web-vitals", "next/typescript"),

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
