import {config} from "dotenv"
config({});

/**
 * You can  export all your environmental variables from here
 */
export const { PORT, MONGO_URI, ENV } = process.env;