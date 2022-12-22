const { Configuration, OpenAIApi } = require('openai');
require('dotenv/config');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async () => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: 'Generate a company name for import and export stuff.',
  });
  console.log(completion.data.choices[0].text);
})();
