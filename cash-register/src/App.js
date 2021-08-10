import './App.css';
import {useState} from "react";
function App() 
{
  const [isNextClicked, setNextClicked] = useState(false);
  const [isSubmitClicked, setSubmitClicked] = useState(false);

  return (
    <div className="App">
      <div className = "container">
        <h1 className = "app-heading">Cash Register Manager</h1>
        <p className = "app-description">Enter the bill amount and cash given by the customer 
          and know minimum number of notes to return.
        </p>

        
        <div className = "bill-amount-container">
          <label for = "bill-amount" className = "label">Bill Amount</label>
          <input type = "number" id = "bill-amount" className = "input-bill-amount"></input>
          <button onClick = {() => setNextClicked(true)} className = "button">Next</button>
        </div>

        {isNextClicked == true && 
        <div className = "amount-received-container">
          <label for = "amount-received" className = "label">Cash Given</label>
          <input type = "number" id = "amount-received" className = "input-amount-received"></input>
          <button onClick = {() => setSubmitClicked(true)} className = "button">Submit</button>
        </div>
        }
        
        {isSubmitClicked == true && 
        <div className = "notes-to-be-returned-container">
           <label for = "notes-table" className = "label">Return Change</label>
          <table className = "notes-table">
            <tbody>
            <tr>
              <th>No of notes</th>
              <td>Notes</td>
            </tr>
            <tr>
               <th>2000</th>
               <td>0</td>
            </tr>
            <tr>
               <th>1000</th>
               <td>0</td>
            </tr>
            <tr>
               <th>500</th>
               <td>0</td>
            </tr>
            <tr>
               <th>200</th>
               <td>0</td>
            </tr>
            <tr>
               <th>100</th>
               <td>0</td>
            </tr>
            <tr>
               <th>50</th>
               <td>0</td>
            </tr>
            <tr>
               <th>20</th>
               <td>0</td>
            </tr>
            <tr>
               <th>10</th>
               <td>0</td>
            </tr>
            <tr>
               <th>5</th>
               <td>0</td>
            </tr>
            <tr>
               <th>2</th>
               <td>0</td>
            </tr>
            <tr>
               <th>1</th>
               <td>0</td>
            </tr>
            </tbody> 
          </table>
          <h1>Total Required Notes Are:</h1>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
