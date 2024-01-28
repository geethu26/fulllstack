import { useState } from 'react'

const App = () => {
  
  const [anecdotes, setAnnecdotes] =useState( [
    {quote:'Adding manpower to a late software project makes it later!',vote:0},
    {quote:'If it hurts, do it more often.',vote:0},
    {quote:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',vote:0},
    {quote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',vote:0},
    {quote:'Premature optimization is the root of all evil.',vote:0},
    {quote:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',vote:0},
    {quote:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',vote:0},
    {quote:'The only way to go fast, is to go well.',vote:0}
  ])
 
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [maxVotes, setMaxVotes] = useState(0)
  
  const handleVote = () => {
    const copy = [...anecdotes];
    copy[currentQuoteIndex].vote++;
    setAnnecdotes(copy);
    if (copy[currentQuoteIndex].vote > copy[maxVotes].vote) {
      setMaxVotes(currentQuoteIndex);
    }
  };
  const randomAnecdote = Math.floor(Math.random()*anecdotes.length)
  return (
    <div>
      <p>{anecdotes[currentQuoteIndex].quote}</p>
      <p>This anecdote has {anecdotes[currentQuoteIndex].vote} votes.</p>
      <button onClick = {handleVote}>Vote</button>
      <button onClick = {()=>{setCurrentQuoteIndex(randomAnecdote)}}>next anecdote</button>
      <h3>Annecdote with maximum votes</h3>
      <p>{anecdotes[maxVotes].quote}</p>
      <p>It has: {anecdotes[maxVotes].vote} votes</p>

    </div>
  )
  }
  
export default App

