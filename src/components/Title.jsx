import { BsCash } from 'react-icons/bs'
import CardContainer from './CardContainer'
import classes from './Title.module.css'

const Title = () => {
  return (
    <CardContainer>
      <h1>Investment Calculator</h1>
      <span className={classes.icon}>
        <BsCash style={{ fontSize: '100px' }} />
      </span>
    </CardContainer>
  )
}

export default Title
