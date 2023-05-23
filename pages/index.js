import Head from "next/head";
import Image from "next/image";
import logo from "../assets/Black_and_White_Minimal_Monogram_Logo-removebg-preview.png";
import { useState } from "react";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [apiOutput2, setApiOutput2] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerating2, setIsGenerating2] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
  

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log(output)
    console.log("OpenAI replied...", JSON.stringify(output));

    setApiOutput(`${output}`);
    setIsGenerating(false);
  };
  const callGenerateEndpoint2 = async () => {
    setIsGenerating2(true);
  
console.log(userInput2, apiOutput)
    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userInput: "You are a professional tutor knowledgeable in all subjects, and I just answered a question. Is my answer:" + userInput2 + ", the right answer to the question:" + apiOutput + "? If so, shortly congratulate me (but ensure I really am right, and accurate). Make sure to always push me in the most accurate and correct direction (if my answer is kind of right but could be better, let me know how it could be better to ensure I improve; note that you are training me for my upcoming exam) However if my answer is wrong, then tell me how to solve it in max 4 sentences; since you're my tutor you need to teach me how to get things right when I get things wrong. Although I said max 4 sentences, that is the very max and the shorter your response the better. Be as concise as possible but still be a friendly tutor. Remember, as concise as possible! Don't say anything that's not needed. For example if I get it right all I want you to say is That's right, good job!"}),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", JSON.stringify(output));

    setApiOutput2(`${output}`);
    setIsGenerating2(false);
  };
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  const onUserChangedText2 = (event) => {
    console.log(event.target.value);
    setUserInput2(event.target.value);
  };
  return (
    <div className="root">
      <Head>
       <link rel="icon" href="favicon.ico"/>
       <title>Studyflow</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Studyflow</h1>
          </div>
          <div className="header-subtitle">
            <h3>
            Studying has never been easier
            </h3>
          </div>
          <div className="output-header">
            <h3>"How do I use Studyflow?"</h3>
          </div>
          <div className="output-content">
            <p><b>Step 1:</b> Paste in your study notes, teacher's exam review, or just type in something like "Grade 9 Geography Ontario" - then hit "Get Quizzed"
              <br></br><b>Step 2:</b> You should have gotten a question! Answer it in the second box and submit your answer!
              <br></br><b>Note:</b> If the button loads too long just click it again while it's loading.
            </p>
          </div>
        </div>
        {/* Add this code here*/}
        <div className="prompt-container">
        <div className="side-by-side">
        <div className="step-one-container">
          <p>Step 1</p>
          <textarea
            className="prompt-box"
            placeholder="paste in your study notes, teacher's exam review, etc right here"
            value={userInput}
            onChange={onUserChangedText}
          />
        </div>
        <div className="step-two-container">
        <p>Step 2</p>
          <textarea
            className="prompt-box"
            placeholder="write your answer here"
            value={userInput2}
            onChange={onUserChangedText2}
          />
          </div>
        </div>
          
          <div className="prompt-buttons">
            <a
              className={
                isGenerating ? "generate-button loading" : "generate-button"
              }
              onClick={() => {
                console.log("pressed me");
                callGenerateEndpoint();
              }}
            >
              <div className="generate">
                {isGenerating ? (
                  <span className="loader"></span>
                ) : (
                  <p>Get Quizzed</p>
                )}
              </div>
            </a>
            <a
              className={
                isGenerating2 ? "generate-button loading" : "generate-button"
              }
              onClick={() => {
                console.log("pressed me");
                callGenerateEndpoint2();
              }}
            >
              <div className="generate">
                {isGenerating2 ? (
                  <span className="loader"></span>
                ) : (
                  <p>Submit Answer</p>
                )}
              </div>
            </a>
          </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>{apiOutput}</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput2}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
