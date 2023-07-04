import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const InvestmentForm = () => {
  const [savings, setSavings] = useState(0)
  const [yearInvestment, setYearInvestment] = useState(0)
  const [interest, setInterest] = useState(0)
  const [period, setPeriod] = useState(0)

  return (
    <Form>
      <h1>What is your investment plan?</h1>
      <Form.Group controledId='initialValue'>
        <Form.Label>Current Savings for Investment</Form.Label>
        <Form.Control
          type='number'
          value={savings}
          onChange={(event) => setSavings(event.target.value)}
        />
      </Form.Group>
      <Form.Group controledId='yearInvestment'>
        <Form.Label>Yearly Investment</Form.Label>
        <Form.Control
          type='number'
          value={yearInvestment}
          onChange={(event) => setYearInvestment(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Interest per Year</Form.Label>
        <Form.Control
          type='number'
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Years</Form.Label>
        <Form.Control
          type='number'
          value={period}
          onChange={(event) => setPeriod(event.target.value)}
        />
      </Form.Group>
      <Button>Reset</Button>
      <Button type='submit' variant='primary'>
        Calculate
      </Button>
    </Form>
  )
}

export default InvestmentForm
