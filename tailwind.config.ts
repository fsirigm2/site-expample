import type { Config } from "tailwindcss";
import tailwindConfig from "@fsirigm2/obe-example/tailwind.config.js";

const config: Config = {
  ...(tailwindConfig as Config),
};
export default config;
