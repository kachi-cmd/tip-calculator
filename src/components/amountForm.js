import {useState, useEffect} from 'react'


const AddamountForm = ()=>{
  
    const [amount, setAmount]= useState(0)
    const [custom, setCustom]= useState(0)
    const [user, setUser]= useState(0)

    const perFunc = (e)=>{
        if (e) {
            e.preventDefault() 
            console.log(e.target.value)
        }
      // to devide amount 
      setAmount(amount*e.target.value) 
    }

// to set the custom arithmetic
    if (custom= true && custom > 0) {
        setAmount(amount/(custom/100)) 
        setCustom(custom = false) 
    }

// to multiply amount by the number of users in other to get the total sum
    useEffect(()=>{
        if (user = true && user > 1) {
            setAmount(amount*user)
            setUser(user = false)
        }
    },[user, amount])

console.log(amount)

// to reset all the values back to zero. i.e clean slate    
    const resetFunc = ()=>setAmount(0)

    return(
        <div>
            <div className= 'B-wrapper'>
                    <h1>Splitter</h1>
              <div className= 'M-wrapper'>       
                        
            <form  >
                <div className= 'input'>         
                    <p>Bill</p>    
                        <input placeholder='bill amount' on
                        onChange = {(e)=> setAmount(e.target.value)} 
                        />
                    
                    <p> Select Tip </p>
                        <button value={0.05} onClick={perFunc} > 5% </button>
                        <button value={0.1} onClick={perFunc} > 10% </button>
                        <button value={0.15} onClick={perFunc} > 15% </button>
                        <button value={0.25} onClick={perFunc} > 25% </button>
                        <button value={0.5} onClick={perFunc} > 50% </button>


                        <textarea placeholder='Custom' 
                        value = {custom}
                        onChange = {(e)=> setCustom(e.target.value)}
                        />

                    <p> Number of people </p>
                        <input placeholder='people' 
                            value = {user}
                        onChange = {(e)=> setUser(e.target.value)}
                        />
                </div>        

                  <div className='output'> 
                    <p>Tip Amount <br /> /person  </p>
                        {amount}
                        <p>Total  </p>
                        {}
                        <button onClick={resetFunc} > RESET </button>
                 </div>
            </form>
              </div>
            </div>
        </div>
    )
}

export default AddamountForm;