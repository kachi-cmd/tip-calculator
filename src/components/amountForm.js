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
    if (!!custom && custom > 0) {
        setAmount(amount/(custom/100)) 
        setCustom(custom = false) 
    }

// to multiply amount by the number of users in other to get the total sum
    useEffect(()=>{
        if (!!user && user > 1) {
            setAmount(amount*user)
            setUser(user = false)
        }
    },[user, amount])

console.log(amount)

// to reset all the values back to zero. i.e clean slate    
    const resetFunc = ()=>setAmount(0)

// custom styling 
const style_custom = {width: 75, height: 28}    

    return(
        <div>
            <div className= 'B-wrapper'>
                    <h1>SPLITTER</h1>

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
                                onChange = {(e)=> setCustom(e.target.value)}
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
                                <p>Tip Amount <br /> <h6>/person </h6>  </p>
                                <div className='amount'> ${amount} </div>
                            </div>
                            <div className='inner'>
                                <p>Total <br /> <h6>/person </h6> </p>
                                <div className='amount'> ${0} </div>
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