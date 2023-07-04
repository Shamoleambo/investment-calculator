import classes from './CardContainer.module.css'

const CardContainer = ({ children }) => {
  return <div className={classes.cardContainer}>{children}</div>
}

export default CardContainer
