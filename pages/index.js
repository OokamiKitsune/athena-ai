import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log(data)
      setResult(data.result);
      setQuestionInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Athena AI</title>
        <link rel="icon" href="/athena.png" />
      </Head>


    


      <main className={styles.main}>
        <img src="/athena.png" className={styles.icon} />
        
        <p>I can give you answers to any question that is rooted in the truth.</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="question"
            placeholder="Type your question..."
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
          />
          <input type="submit" value="Ask" />
        </form>
        <div className={styles.result}>{result}</div>
        <div> {questionInput}</div>
      </main>
    </div>
  );
}
