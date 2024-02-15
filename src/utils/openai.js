import OpenAI from "openai";
import { openai_gpt_key } from "../utils/constant";

const openai = new OpenAI({
  apiKey: openai_gpt_key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai;
