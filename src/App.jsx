import { useState } from 'react'
import Title from './components/Title'
import InvestmentForm from './components/InvestmentForm'
import Table from './components/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [investmentOverTime, setInvestmentOverTime] = useState([])
  const [hasInvestmentData, setHasInvestmentData] = useState(false)

  const onClaculateInvestment = (savings, yearSaving, interest, totalYears) => {
    setHasInvestmentData(true)
    const totalInvestments = []

    const firstYearInvestment = {}
    firstYearInvestment.year = 1
    firstYearInvestment.totalSavings =
      savings * (1 + interest / 100) + yearSaving
    firstYearInvestment.interest = savings * (interest / 100)
    firstYearInvestment.totalInterest = savings * (interest / 100)
    firstYearInvestment.investedCapital = savings + yearSaving

    totalInvestments.push(firstYearInvestment)

    for (let year = 2; year <= totalYears; year++) {
      let investment = {}
      const lastYearInvestment = totalInvestments[totalInvestments.length - 1]

      investment.year = year
      investment.totalSavings =
        lastYearInvestment.totalSavings * (1 + interest / 100) + yearSaving
      investment.interest = lastYearInvestment.totalSavings * (interest / 100)
      investment.totalInterest =
        totalInvestments.reduce((totalInterest, investment) => {
          return totalInterest + investment.interest
        }, 0) + investment.interest
      investment.investedCapital =
        lastYearInvestment.investedCapital + yearSaving

      totalInvestments.push(investment)
    }

    setInvestmentOverTime(totalInvestments)
  }

  const onResetTable = () => setHasInvestmentData(false)

  return (
    <>
      <Title />
      <InvestmentForm
        calculateInvestment={onClaculateInvestment}
        resetTable={onResetTable}
      />
      {hasInvestmentData && <Table investmentOverTime={investmentOverTime} />}
    </>
  )
}

export default App
