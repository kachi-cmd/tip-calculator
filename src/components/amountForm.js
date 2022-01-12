import {useState, useEffect} from 'react'


const AddamountForm = ()=>{
  
    const [amount, setAmount]= useState(0)
    const [total, setTotal]= useState(0)
    const [user, setUser]= useState(0)
    const [tip, setTip] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)

    const perFunc = (e)=>{
        if (e) {
            e.preventDefault() 
        }
      // to devide amount 
      setTip(e.target.value)
    }

// to multiply amount by the number of users in other to get the total sum
    useEffect(()=>{
       setTipAmount( tip*amount)
       setTotal(tipAmount*user)
    },[user, amount, tip])

// to reset all the values back to zero. i.e clean slate    
    const resetFunc = ()=>setAmount(0)

// custom styling 
const style_custom = {width: 75, height: 28}    

    return(
        <div>
            <div className= 'B-wrapper'>
                    <h1>TIP CALCULATOR</h1>

                <div className= 'M-wrapper'>       
                        
                    <form  >
                        <div className= 'G-input'>         
                            <p> Bill </p>    
                                <input className= 'input' placeholder='bill amount'
                                onChange = {(e)=> setAmount(e.target.value)} 
                                />
                            
                            <p> Select Tip </p>
                            <div className='btn-group'>
                                <button className='btn' value={0.05} onClick={perFunc} > 5% </button>
                                <button className='btn' value={0.1} onClick={perFunc} > 10% </button>
                                <button className='btn' value={0.15} onClick={perFunc} > 15% </button>
                                <button className='btn' value={0.25} onClick={perFunc} > 25% </button>
                                <button className='btn' value={0.5} onClick={perFunc} > 50% </button>
                                <input  className='btn-custom' placeholder='Custom' 
                                 style={style_custom}
                                // value = {custom}
                                onChange = {(e)=>setTip(e.target.value/100)}
                                />
                            </div>

                            <p> Number of people </p>
                                <input className= 'input'  placeholder='people' 
                                   // value = {user}
                                onChange = {(e)=> setUser(e.target.value)}
                                />
                        </div>        

                        <div className='output'> 

                            <div className='inner'> 
                                <div>Tip Amount <br /> <h6>/person </h6>  </div>
                                <div className='amount'> ${tipAmount} </div>
                            </div>
                            <div className='inner'>
                                <div>Total <br /> <h6>/person </h6> </div>
                                <div className='amount'> ${total} </div>
                            </div>
                            <div className='button-reset' >
                            <button className='button-reset_fill' onClick={resetFunc} > RESET </button>  
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddamountForm;