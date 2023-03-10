import { Configuration, OpenAIApi } from "openai";



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "Request failed due to an an issue with authenticating API call.",
      }
    });
    return;
  }



  const question = req.body.question || '';
  if (question.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please ask a question.",
      }
    });
    return;
  }
  try {
    const answer = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(question),
      temperature: 1,
      max_tokens: 100,
      top_p: 0.1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    
    // To-do Token limit reached clause

    
    if (answer.data.choices[0].finish_reason === 'length') {
      answer_limit = true
      console.log('Token limit was reached for this request. Answer body was truncated.')
			
    
    }

    // To-do: display token limit message on DOM.

		// const answer_limit = answer.data.choices[0].finish_reason;
		// if (answer_limit === 'length') {
			
		// }
    
    res.status(200).json({ result: answer.data.choices[0].text });
    // Log answer to console
    console.log(answer.data.choices)





  } catch(error) {
    
    // Error handling for API response.

    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}


function generatePrompt(question) {
  if (question === "Who are you?" || question === "What are you") {
    return "I am Athena. An Artificial Inteligence that can answer most questions. Please. Ask me anything."  
    } else {
      const capitalizedAnswer =
    question[0].toUpperCase() + question.slice(1).toLowerCase();
      return capitalizedAnswer;
    }
  
}