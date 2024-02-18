import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch } from "react-redux";

// Access your API key (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("AIzaSyAGhHNs23ftbunEDlkHPaRammqFIdtEppM");

// export const run = async (promptIn) => {
//     const dispatch = useDispatch();

//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   const prompt = `Please provide five ${promptIn} separated by commas. only give me response in this format for example: 'Ghayal, Dilwale, Don, Pathan, Hero number one'`;
//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
//   dispatch(movieSuggestionList(text));
// };
