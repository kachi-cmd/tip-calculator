import AmountContext from '../store/amount-context'
import AddamountForm from './amountForm'


function App() {

  return (
    <AmountContext.Provider  >
      <AddamountForm />   
    </AmountContext.Provider>
  );
}

export default App;
