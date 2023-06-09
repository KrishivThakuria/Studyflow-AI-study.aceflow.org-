import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  basePath: process.env.NEXT_PUBLIC_OPENAI_ENDPOINT
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = 
`Give me a random unique question based on the following material which may be my study notes, exam review, etc to help me practice for my upcoming test based on this information (try to be random with your question but of course relevant to the content provided, but you should try to think random as assume I have already asked you to give me a question and you have given me one and of course I wouldn't want the same question twice). Your question can be regarding any content I'll attach, any fact, statement, stat, etc; assume to ace my exam I must be able to cover literally anything from the material provided. When you generate your questions you should just give me the question and nothing else. Don't ask me for two things in one (so don't use the word and in your question) I just want one question. Analyze every word in the material I will give you, you can quiz me on literally any of the material, do not limit yourself. I'm talking who, what, when, where, why, how questions on literally any of the content you analyze. Do not use the word and! Do not ask me a question you've already asked. Don't overcomplicate the question, keep it short, sweet, and simple. Never ask me a question you've already asked me, and don't phrase it differently either. Assume I need to be quizzed on literally eery single line, sentence, or point in the attached material. Do not leave out anything. One last thing: at the end of the provided material, check what I have in the brackets (). Whatever is in the brackets () is the type of question I am looking for. For example, if I have (mc) I'm looking for multiple choice. If I have (free answer) I'm looking for free answer questions. If I dont't have any brackets () just assume I'm looking for a free answer question. Also! If needed, space out the question onto different lines for clarity! For example your question is multiple choice, you should put each option on a seperate line! Here is the material:`;

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