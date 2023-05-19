import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  basePath: process.env.NEXT_PUBLIC_OPENAI_ENDPOINT
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = 
`Give me a random unique question based on the following material which may be my study notes, exam review, etc to help me practice for my upcoming test based on this information. :`;

const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}\n`);
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are ChatGPT, a large language model trained by OpenAI. Carefully heed the user's instructions. ${basePromptPrefix}`,
        },
        { role: "user", content: req.body.userInput },
      ],
    });
    console.log(completion.data)
    console.log(completion.data.choices[0].message.content);
    res.status(200).json({ output: completion.data.choices[0].message.content });
  } catch (error) {
    console.log(error);
  }
};

export default generateAction;