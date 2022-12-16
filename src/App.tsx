import { useState } from "react";
import { Tweet } from "./componentes/tweets"
import './App.css'

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'tweet 1',
    'tweet 2',
    'tweet 3',
    'tweet 4',
  ])
  function createTweet() {
    setTweets([...tweets,'tweet 5'])
  }

  return (
    <div>
      {tweets.map(tweet => {
        return <Tweet text={tweet } />
      })}

      <button
        onClick={createTweet}
        style={{
          backgroundColor: "white",
          border: 0,
          padding: '6px 12px'
        }}
      >
        add
      </button>
    </div>
  );
}

export default App
