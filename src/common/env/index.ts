import { IEnv } from "@/interfaces/app/IEnv";

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

const Env: IEnv = {
  internalEndpointUrl: process.env.internalEndpointUrl,
  externalEndpointUrl: process.env.externalEndpointUrl,
  isStatic: process.env.NODE_ENV === "production" // 本番のみGenerateした静的ファイルをVercelでホスティングする
} as IEnv;

console.log("Env:", Env);

export default Env;
