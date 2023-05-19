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
    setIsGenerating(true);
  
console.log(userInput2, apiOutput)
    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userInput: "Tell me if the answer" + userInput2 + "is the right answer to the question" + apiOutput + "and congratulate me if you believe I'm right! However if my answer is wrong, then tell me how to solve it in 2 - 5 simple sentences in 1 paragraph."}),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", JSON.stringify(output));

    setApiOutput2(`${output}`);
    setIsGenerating(false);
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
       <title>Vocabulate</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Studyflow</h1>
          </div>
          <div className="header-subtitle">
            <h2>
            Paste in your study notes, your teacher's exam review, etc and start practicing.
            </h2>
          </div>
        </div>
        {/* Add this code here*/}
        <div className="prompt-container">
        <div className="side-by-side">
          <textarea
            className="prompt-box"
            placeholder="paste in your study notes, teacher's exam review, etc right here"
            value={userInput}
            onChange={onUserChangedText}
          />
          <textarea
            className="prompt-box"
            placeholder="write your answer here"
            value={userInput2}
            onChange={onUserChangedText2}
          />
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
                  <p>Find Your Word</p>
                )}
              </div>
            </a>
            <a
              className={
                isGenerating ? "generate-button loading" : "generate-button"
              }
              onClick={() => {
                console.log("pressed me");
                callGenerateEndpoint2();
              }}
            >
              <div className="generate">
                {isGenerating ? (
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
      <div className="badge-container grow">
        <a
          href="https://twitter.com/KrishivThakuria"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <p>Made by Krishiv Thakuria</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
