import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Link from 'next/link';
import { WalletMultiButton } from "../components/connect_button/WalletMultiButton";
import { useWallet, useConnection } from '@solana/wallet-adapter-react';


export default function Home() {
  const { connected } = useWallet();
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();
  const [staticQuestion, setStaticQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true)
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
      setResult(data.result);
      setQuestionInput("");
      setStaticQuestion(questionInput);
      console.log("Query: ", staticQuestion)
      console.log("Response: ", data)
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <div>
      <Head>
        <title>Athena AI</title>
        <link rel="icon" href="/athena.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <WalletMultiButton/>
      
 
      
    


      
      {/* Conditional Render */}
      {connected 
      ? 
      <main className={styles.main}>
        <img src="/athena.png" className={styles.icon} />
       
        <p>I can give you answers to any question that is rooted in the truth.</p>
        <div>
        <Link href="/">
            
        </Link>
        <Link href="/about">
            About
        </Link>
        </div>
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
       

        <center><br></br>
        <div>You asked me: <br></br><b>{staticQuestion}</b></div>
        </center>

        {isLoading ? <div class={styles.loader}></div> : <div className={styles.result}>{result}</div> }
     
      </main> 
      : 'Connect your Solana wallet to continue. Learn more aboout Athena AI'}
      
      

    


      
    </div>
  );
}
