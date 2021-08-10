import './App.css';
import {useState} from "react";
function App() 
{
  const [isNextClicked, setNextClicked] = useState(false);
  const [isSubmitClicked, setSubmitClicked] = useState(false);

  return (
    <div className="App">
      <div className = "container">
        <h1>Cash Register Manager</h1>
        <p>Enter the bill amount and cash given by the customer 
          and know minimum number of notes to return.
        </p>

        
        <div className = "bill-amount-container">
          <label for = "bill-amount">Bill Amount</label>
          <input type = "number"></input>
          <button onClick = {() => setNextClicked(true)}>Next</button>
        </div>

        {isNextClicked == true && 
        <div className = "amount-received-container">
          <label for = "amount-received">Cash Given</label>
          <input type = "number"></input>
          <button onClick = {() => setSubmitClicked(true)}>Submit</button>
        </div>
        }
        
        {isSubmitClicked == true && 
        <div className = "notes-to-be-returned-container">
          <table className = "notes-table">
            <caption>Return Change</caption>
            <tbody>
            <tr>
              <th>No of notes</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td></td>
            </tr>
            <tr>
              <th>Note</th>
              <td>2000</td>
              <td>500</td>
              <td>200</td>
              <td>100</td>
              <td>50</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
            </tbody>
            
          </table>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
