import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)


  const [validamount, setvalidamount] = useState(false)
  const [validrate, setvalidrate] = useState(false)
  const [validyear, setvalidyear] = useState(false)

  const [total,setTotal]= useState(0)

  const validInput = (e) => {
    const { name, value } = e.target

    if (value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name == 'pamount') {
        setAmount(value)
        setvalidamount(true)
      }
      else if (name == 'rate') {
        setRate(value)
        setvalidrate(true)
      }
      else {
        setYear(value)
        setvalidyear(true)
      }
    }
    else{
      if (name == 'pamount') {
        setAmount(0)
        setvalidamount(false)
      }
      else if (name == 'rate') {
        setRate(0)
        setvalidrate(false)
      }
      else {
        setYear(0)
        setvalidyear(false)
      }

    }

  }


  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(amount, rate, year);
    const t= (amount*rate*year )/100
    setTotal(t)

  }
  const resetform =()=>{
    setTotal(0)
    setvalidamount(false)
    setvalidrate(false)
    setvalidyear(false)
  }
  return (
    <>
      <div className='d-flex bg-dark w-100 justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='w-50 bg-light border roundered p-5'>

          <h1>Simple Interest calculator</h1>
          <div className='p-5 text-center border rounded shadow' style={{ backgroundColor: 'lightblue', width: '100%' }}>
            <h3>₹{total}</h3>
            <p>Total Interest</p>
          </div>
          <form action="" className='mt-3' onSubmit={(e) => { handlesubmit(e) }}>
            <div className='mt-2'>
              <TextField id="outlined-basic" name='pamount' label="Principle Amount" variant="outlined" style={{ width: '100%' }} onChange={(e) => { validInput(e) }} />
              {
                !validamount && 
                <div>
                  Invalid principle amount
                </div>
              }
            </div>
            <div className='mt-2'>
              <TextField id="outlined-basic" name='rate' label="Rate of interest" variant="outlined" style={{ width: '100%' }} onChange={(e) => { validInput(e) }} />
              {
                !validrate && 
                <div>
                  Invalid rate
                </div>
              }
            </div>
            <div className='mt-2'>
              <TextField id="outlined-basic" name='year' label="Number of years" variant="outlined" style={{ width: '100%' }} onChange={(e) => { validInput(e) }} />
              {
                !validyear && 
                <div>
                  Invalid year
                </div>
              }
            </div>
            <Stack spacing={2} direction="row" className='mt-3'>
              <Button type="submit" disabled={validamount&&validrate&&validyear?false:true} style={{ color: 'black',backgroundColor:'lightblue' }}   variant="contained" className='w-50'>Submit</Button>
              <Button type="reset" onClick={()=>{resetform()}} style={{ color: 'black',backgroundColor:'lightblue' }} variant="outlined" className='w-50'>Reset</Button>
            </Stack>
          </form>
        </div>
      </div>

    </>
  )
}

export default App