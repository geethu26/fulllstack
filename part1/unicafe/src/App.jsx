import  { useState } from 'react'

const Statistics = ({data, feedBackGiven}) => {
  return(
    <div>
    {feedBackGiven?(
    <table>
      <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td>{row.text} </td>
          <td>{row.value}</td>
        </tr>
        ))}
      </tbody>
    </table>
    ):(
    <p>No feedback given</p>
    )}
</div>
  )
}

const Button = (props)=>{
  return(
    <div>
       <button onClick={props.click}>{props.text}</button>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedBackGiven, setFeedBackGiven] = useState(false)
  
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : ((good + bad +total) / 3);
  const positive = total === 0 ? 0 : (good / total) * 100;
  const data = [
    {text:"good",value: good},
    {text:"neutral",value: neutral},
    {text:"bad",value: bad},
    {text:"all",value: total},
    {text:"average",value: average},
    {text:"positive",value: positive+"%"}
  ]
  
  const handlefeedback = ()=>{
    setFeedBackGiven(true)
  }

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button click={()=>{setGood(good+1); handlefeedback()} } text = "Good" />
      <Button click={()=>{setNeutral(neutral+1); handlefeedback()}}  text ="Neutral"/>
      <Button click={()=>{setBad(bad+1); handlefeedback()}} text ="Bad"/>
      <hr></hr>
      <h2>Statistics</h2>
      <Statistics data = {data} feedBackGiven = {feedBackGiven}/>
      
    </div>
  )
}

export default App
