import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import CardContainer from './CardContainer'
import classes from './InvestmentForm.module.css'

const InvestmentForm = () => {
  const [savings, setSavings] = useState(0)
  const [yearInvestment, setYearInvestment] = useState(0)
  const [interest, setInterest] = useState(0)
  const [period, setPeriod] = useState(0)

  return (
    <CardContainer>
      <div className={classes.formContainer}>
        <Form className='my-3'>
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
              <Form.Label>Interest per Year</Form.Label>
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
            <Button variant='secondary'>Reset</Button>
            <Button type='submit' variant='primary'>
              Calculate
            </Button>
          </div>
        </Form>
      </div>
    </CardContainer>
  )
}

export default InvestmentForm
