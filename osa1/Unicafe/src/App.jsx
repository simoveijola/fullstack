import { useState } from 'react'

const Header = ({ header }) => (
  <>
    <h1>
      {header}
    </h1>
  </>
)


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const StatisticLine = ({ statName, stat }) => {
  if (statName == "positive") {
    return (
      <>
        <tr>
          <th>{statName}</th>
          <td>{stat} %</td>
        </tr>
      </>
    )
  }
  else
    return (
      <>
        <tr>
          <th>{statName}</th>
          <td>{stat}</td>
        </tr>
      </>
    )
}

const App = () => {
  const header1 = 'Give feedback'
  const header2 = 'statistics'
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good + bad + neutral == 0) {
    return (
      <div>
        <Header header={header1} />
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        
        <Header header={header2} />
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <Header header={header1} />
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        
        <Header header={header2} />
        <table>
          <tbody>
            <StatisticLine statName="good" stat={good} />
            <StatisticLine statName="neutral" stat={neutral} />
            <StatisticLine statName="bad" stat={bad} />
            <StatisticLine statName="all" stat={good + bad + neutral} />
            <StatisticLine statName="average" stat={(good - bad) / (good + bad + neutral)} />
            <StatisticLine statName="positive" stat={(good / (good + bad + neutral)) * 100} />
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
