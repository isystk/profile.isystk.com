import { IEnv } from "@/interfaces/app/IEnv";

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
console.log("process.env.STATIC: ", process.env.STATIC);
console.log("process.env.BUILD_ENV: ", process.env.BUILD_ENV);

const Env: IEnv = {
  envName: process.env.envName,
  internalEndpointUrl: process.env.internalEndpointUrl,
  externalEndpointUrl: process.env.externalEndpointUrl,
  isStatic: process.env.STATIC === "true"
} as IEnv;

console.log("Env:", Env);

export default Env;
