import CardContainer from './CardContainer'
import classes from './Table.module.css'

const Table = () => {
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
          <tr className={classes.tableRow}>
            <td className={classes.tableData}>1</td>
            <td className={classes.tableData}>11700</td>
            <td className={classes.tableData}>500</td>
            <td className={classes.tableData}>500</td>
            <td className={classes.tableData}>11200</td>
          </tr>
        </tbody>
      </table>
    </CardContainer>
  )
}

export default Table
