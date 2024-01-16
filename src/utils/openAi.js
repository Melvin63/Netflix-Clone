import OpenAI from "openai";
import { Open_AI_Key } from "./constants";

const openai = new OpenAI({
  apiKey: Open_AI_Key,
  // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;
