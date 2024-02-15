import React from "react";

const GptSearch = () => {
  const handleGpt = async () => {
    //   const chatCompletion = await openai.chat.completions.create({
    //     messages: [{ role: "user", content: "Say this is a test" }],
    //     model: "gpt-3.5-turbo",
    //   });

    //   console.log(chatCompletion);
  };

  return (
    <div className="pt-6 pl-[35%]">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-80 h-10 mr-2 p-2 rounded-lg text-lg"
          type="text"
          placeholder="what do you want to watch !"
        ></input>
        <button
          onClick={handleGpt}
          className="bg-red-600 w-28 h-10 rounded-lg text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
