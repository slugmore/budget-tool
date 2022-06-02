import Table from 'react-bootstrap/Table'

const Savings = (props) => {

    let monthlySavings = props.data.income - props.data.rent - props.data.food - props.data.other - props.data.bills
    let anualSavings = monthlySavings * 12
    let targetTime = props.data.target / monthlySavings
    // targetTime < 0 ? targetTime = 'N/A' : targetTime = targetTime

    return (
        <div className='form'>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Monthly Savings</th>
          <th>Anual Savings</th>
          <th>Target Met In</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id={monthlySavings < 0 ? 'redText' : 'greenText'}>£{monthlySavings}</td>
          <td id={monthlySavings < 0 ? 'redText' : 'greenText'}>£{anualSavings}</td>
          <td>{targetTime.toFixed(2)} Months</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    )

}

export default Savings;