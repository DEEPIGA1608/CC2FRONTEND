import React from 'react';
import axios from 'axios';
import { useState} from 'react';
import './CC2del.css'
function CC2delete() {
    const [patientid, setId] = useState();
    const [error, setError] = useState('');
  
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/delete/' + patientid)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    return (
        <> <div className="del"> 
            <div class="dbo">
              <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <p class="dp">DELETE RECORD BY USING PATIENT ID</p>
            <div><br></br>
            <input type="number" placeholder='Enter Patient ID' className="din" value={patientid} 
            onChange={(e) => setId(e.target.value)}/>
            </div><br/><br/>
            <button type="submit" className="dbutton" onClick={del}>Submit</button>
  
            <h2>{error}</h2>
            </div>
          </div>
        </>
    );
}

export default CC2delete;