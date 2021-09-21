import './App.css';
import {useState} from "react";
function App() 
{
  const[billAmount, setBillAmount] = useState(0);
  const[cashGiven, setCashGiven] = useState(0);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isSubmitClicked, setSubmitClicked] = useState(false);
  const [requiredNumberOf2000Notes, setRequiredNumberOf2000Notes] = useState(0);
  const [requiredNumberOf500Notes, setRequiredNumberOf500Notes] = useState(0);
  const [requiredNumberOf200Notes, setRequiredNumberOf200Notes] = useState(0);
  const [requiredNumberOf100Notes, setRequiredNumberOf100Notes] = useState(0);
  const [requiredNumberOf50Notes, setRequiredNumberOf50Notes] = useState(0);
  const [requiredNumberOf20Notes, setRequiredNumberOf20Notes] = useState(0);
  const [requiredNumberOf10Notes, setRequiredNumberOf10Notes] = useState(0);
  const [requiredNumberOf5Notes, setRequiredNumberOf5Notes] = useState(0);
  const [requiredNumberOf2Notes, setRequiredNumberOf2Notes] = useState(0);
  const [requiredNumberOf1Notes, setRequiredNumberOf1Notes] = useState(0);
  const[totalRequiredNotes, setTotalRequiredNotes] = useState(0);
  function onNextClicked()
  {
    if(billAmount > 0)
    {
      setNextClicked(true);
    }
    else{
      alert("Please Enter a valid amount");
    }  
  }

  function onSubmitClicked()
  {
    let temp = cashGiven;   
    let totalRequiredNotes = 0; 
    if(parseInt(temp, 10) >= parseInt(billAmount, 10))
    {
      let index = 0;
      let notesArray = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
      let numberOfNotesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      temp = temp - billAmount;
      
      //This is the logic for calculating the minimum number of notes required
      while(temp >= 0 && index < 10)
      {
        while(temp >= notesArray[index])
        {
          temp = temp - notesArray[index];
          numberOfNotesArray[index]++;
          totalRequiredNotes++;
        }
        index++;
      }
      setRequiredNumberOf2000Notes(numberOfNotesArray[0]);
      setRequiredNumberOf500Notes(numberOfNotesArray[1]);
      setRequiredNumberOf200Notes(numberOfNotesArray[2]);
      setRequiredNumberOf100Notes(numberOfNotesArray[3]);
      setRequiredNumberOf50Notes(numberOfNotesArray[4]);
      setRequiredNumberOf20Notes(numberOfNotesArray[5]);
      setRequiredNumberOf10Notes(numberOfNotesArray[6]);
      setRequiredNumberOf5Notes(numberOfNotesArray[7]);
      setRequiredNumberOf2Notes(numberOfNotesArray[8]);
      setRequiredNumberOf1Notes(numberOfNotesArray[9]);
      setTotalRequiredNotes(totalRequiredNotes);
      setSubmitClicked(true);
    }
    else{
      alert("Please Enter a valid amount");
    }
  }

  
  
  return (
    <div className="App">
      <div className = "container">
        <h1 className = "app-heading">Cash Register Manager(Mark 10)</h1>
        <p className = "app-description">Enter the bill amount and cash given by the customer 
          and know minimum number of notes to return.
        </p>

        
        <div className = "bill-amount-container">
          <label for = "bill-amount" className = "label">Bill Amount:</label>
          <input type = "number" id = "bill-amount" className = "input" onChange = {(e) => setBillAmount(e.target.value)}></input>
          <button onClick = {() => onNextClicked()} className = "button">Next</button>
        </div>

        {isNextClicked == true && 
        <div className = "amount-received-container">
          <label for = "amount-received" className = "label">Cash Given:</label>
          <input type = "number" id = "amount-received" className = "input" onChange = {(e) => setCashGiven(e.target.value)}></input>
          <button onClick = {() => onSubmitClicked()} className = "button">Submit</button>
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
               <td>{requiredNumberOf2000Notes}</td>
            </tr>
            <tr>
               <th>500</th>
               <td>{requiredNumberOf500Notes}</td>
            </tr>
            <tr>
               <th>200</th>
               <td>{requiredNumberOf200Notes}</td>
            </tr>
            <tr>
               <th>100</th>
               <td>{requiredNumberOf100Notes}</td>
            </tr>
            <tr>
               <th>50</th>
               <td>{requiredNumberOf50Notes}</td>
            </tr>
            <tr>
               <th>20</th>
               <td>{requiredNumberOf20Notes}</td>
            </tr>
            <tr>
               <th>10</th>
               <td>{requiredNumberOf10Notes}</td>
            </tr>
            <tr>
               <th>5</th>
               <td>{requiredNumberOf5Notes}</td>
            </tr>
            <tr>
               <th>2</th>
               <td>{requiredNumberOf2Notes}</td>
            </tr>
            <tr>
               <th>1</th>
               <td>{requiredNumberOf1Notes}</td>
            </tr>
            </tbody> 
          </table>
          <h1>Total Required Notes Are: {totalRequiredNotes}</h1>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
