import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'



import { useState } from 'react'

const Input = ({setData}) => {

    const [name, setName] = useState('')
    const [income, setIncome] = useState('')
    const [bills, setBills] = useState('')
    const [food, setFood] = useState('')
    const [other, setOther] = useState('')
    const [rent, setRent] = useState('')
    const [target, setTarget] = useState('')

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {name, income, rent, bills, food, other, target}
        setData(formData)
        // console.log(formData);
    }
    
    return (
        <>
        <Form onSubmit={handleSubmit} className='form'>
        <Form.Group id='fname' className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control className='inputText' type="text" placeholder="Enter name"
           required
           value={name}
           onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIncome">
          <Form.Label>Income</Form.Label>
          <Form.Control className='inputText' type="text" placeholder="£(Monthly)" 
          required
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rent">
          <Form.Label>Rent</Form.Label>
          <Form.Control className='inputText' type="text" placeholder="£(Monthly)" 
          required
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bills">
          <Form.Label>Bills</Form.Label>
          <Form.Control className='inputText' type="text" placeholder="£(Monthly)" 
          required
          value={bills}
          onChange={(e) => setBills(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="food">
          <Form.Label>Food</Form.Label>
          <Form.Control className='inputText' type="text" placeholder="£(Monthly)" 
          required
          value={food}
          onChange={(e) => setFood(e.target.value)}
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="other">
          <Form.Label>Other</Form.Label>
          <Form.Control className='inputText' type="text" placeholder="£(Monthly)" 
          required
          value={other}
          onChange={(e) => setOther(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="target">
          <Form.Label>Target</Form.Label>
          <Form.Control className='inputText' type="text" placeholder="How much are you trying to save?" 
          required
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          />
        </Form.Group>


      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Income</th>
          <th>Rent</th>
          <th>Bills</th>
          <th>Food</th>
          <th>Other</th>
          <th>Target</th>
          <th>+/-</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>£{income}</td>
          <td>£{rent}</td>
          <td>£{bills}</td>
          <td>£{food}</td>
          <td>£{other}</td>
          <td>£{target}</td>
          <td>£{income - bills - food - other - rent}</td>
        </tr>
        
      </tbody>
    </Table>

        <Button id='submitButton' variant="primary" type="submit">
          Calculate
        </Button>
      </Form>



    </>
    )
}

export default Input;