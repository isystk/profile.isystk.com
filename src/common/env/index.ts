import EnvLocal from "./env.local";
import { IEnv } from "@/interfaces/app/IEnv";

let Env: IEnv;
if (process.env.NODE_ENV === "production") {
  /** 本番環境： 本番のみGenerateした静的ファイルをVercelでホスティングする */
  Env = {
    internalEndpointUrl: process.env.internalEndpointUrl,
    externalEndpointUrl: process.env.externalEndpointUrl,
    isStatic: true,
  } as IEnv;
} else if (process.env.NODE_ENV === "staging") {
  /** STG環境： AWS-ECSでSSRする */
  Env = {
    internalEndpointUrl: process.env.internalEndpointUrl,
    externalEndpointUrl: process.env.externalEndpointUrl,
  } as IEnv;
} else {
  Env = EnvLocal;
}

console.log("Env:", Env, process.env.NODE_ENV);

export default Env;
