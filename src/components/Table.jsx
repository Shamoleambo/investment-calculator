import CardContainer from './CardContainer'
import classes from './Table.module.css'

const Table = ({ investmentOverTime }) => {
  const USDollar = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return (
    <CardContainer>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr className={classes.tableRow}>
            <th className={classes.tableData}>Year</th>
            <th className={classes.tableData}>Total Savings</th>
            <th className={classes.tableData}>Interest (Year)</th>
            <th className={classes.tableData}>Total Interest</th>
            <th className={classes.tableData}>Invested Capital</th>
          </tr>
        </thead>
        <tbody className={classes.tableBody}>
          {investmentOverTime.map((investment) => {
            return (
              <tr key={investment.year} className={classes.tableRow}>
                <td className={classes.tableData}>{investment.year}</td>
                <td className={classes.tableData}>
                  {USDollar.format(investment.totalSavings)}
                </td>
                <td className={classes.tableData}>
                  {USDollar.format(investment.interest)}
                </td>
                <td className={classes.tableData}>
                  {USDollar.format(investment.totalInterest)}
                </td>
                <td className={classes.tableData}>
                  {USDollar.format(investment.investedCapital)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </CardContainer>
  )
}

export default Table
