
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);

const Doughnuts = (props) => {



    const expenseData = {
        datasets: [{
            data: [props.data.bills, props.data.food, props.data.other, props.data.rent],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'limegreen'
              ]
        }],
    
        labels: [
            'Bills',
            'Food',
            'Other',
            'Rent'
        ]    
    };

    let monthlySavings = props.data.income - props.data.rent - props.data.food - props.data.other - props.data.bills
    let monthlyDebt = props.data.income - props.data.rent - props.data.food - props.data.other - props.data.bills
    monthlySavings < 0 ? monthlySavings = 0 : monthlySavings = monthlySavings
    monthlyDebt > 0 ? monthlyDebt = 0 : monthlyDebt = monthlyDebt *= -1

   console.log(monthlyDebt);

    const savingsData = {
        datasets: [{
            data: [props.data.income, monthlySavings, monthlyDebt *= -1],
            backgroundColor: [
                'black',
                'limegreen',
                'red'
              ]
        }],
    
        labels: [
            'Income',
            'Savings',
            'Debt'
        ]    
    };



 
    return (
        <>
        <div className='doughnut'>
        <Doughnut data={expenseData}/>
        <Doughnut data={savingsData}/>
        </div>
        </>
    )

}


export default Doughnuts;