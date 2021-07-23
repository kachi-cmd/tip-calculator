import {useState} from 'react'


const AddamountForm = ()=>{
  
    const [amount, setAmount]= useState(0)
    const [user, setUser]= useState(0)

    return(
        <div>
            <h1>Splitter</h1>
            <p>Bill</p>

            <form  >
                <input placeholder='bill amount' />
               
            <p> Select Tip </p>
                <button onSubmit={} > 5% </button>
                <button onSubmit={}> 10% </button>
                <button onSubmit={}> 15% </button>
                <button onSubmit={}> 25% </button>
                <button onSubmit={}> 50% </button>
                <textarea placeholder='Custom' />

                <button onSubmit={} > RESET </button>
            <p> Number of people </p>
                <input placeholder='people' />
            </form>
        </div>
    )
}

export default AddamountForm;