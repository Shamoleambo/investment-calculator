import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import CardContainer from './CardContainer'
import classes from './InvestmentForm.module.css'

const InvestmentForm = ({ calculateInvestment, resetTable }) => {
  const [savings, setSavings] = useState(0)
  const [yearInvestment, setYearInvestment] = useState(0)
  const [interest, setInterest] = useState(0)
  const [period, setPeriod] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    calculateInvestment(+savings, +yearInvestment, +interest, +period)
  }

  const handleReset = () => {
    resetTable()
    setSavings(0)
    setYearInvestment(0)
    setInterest(0)
    setPeriod(0)
  }

  return (
    <CardContainer>
      <div className={classes.formContainer}>
        <Form className='my-3' onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center' }}>What is your investment plan?</h1>
          <div className={classes['form-fields']}>
            <Form.Group className='p-3' controlId='initialValue'>
              <Form.Label>Current Savings for Investment</Form.Label>
              <Form.Control
                type='number'
                value={savings}
                onChange={(event) => setSavings(event.target.value)}
              />
            </Form.Group>
            <Form.Group className='p-3' controlId='yearInvestment'>
              <Form.Label>Yearly Investment</Form.Label>
              <Form.Control
                type='number'
                value={yearInvestment}
                onChange={(event) => setYearInvestment(event.target.value)}
              />
            </Form.Group>
            <Form.Group className='p-3' controlId='interest'>
              <Form.Label>Interest per Year (%)</Form.Label>
              <Form.Control
                type='number'
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
              />
            </Form.Group>
            <Form.Group className='p-3' controlId='years'>
              <Form.Label>Years</Form.Label>
              <Form.Control
                type='number'
                value={period}
                onChange={(event) => setPeriod(event.target.value)}
              />
            </Form.Group>
          </div>
          <div className={classes.buttons}>
            <Button variant='secondary' onClick={handleReset}>
              Reset
            </Button>
            <Button type='submit' variant='warning'>
              Calculate
            </Button>
          </div>
        </Form>
      </div>
    </CardContainer>
  )
}

export default InvestmentForm
