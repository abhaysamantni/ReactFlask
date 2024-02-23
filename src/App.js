import './App.css';
import React, { useState, useEffect } from "react";

function App() {
     // usestate for setting a javascript
     // object for storing and using data
    const [data, setData] = useState(
        {
            'Name': "DefaultProject",
            "ID": "000",
            "Date": "02/02/2022",
            "checkedOutQty": [12, 45, 56]
        }
    )

    // Using useEffect to render fetched data fro
    
    useEffect(() => {
        //using fetch to 
        fetch("/data").then((res) => 
            res.json().then(data => {
            setData({
                'Name': data.Name,
                "ID": data.ID,
                "Date": data.Date,
                "checkedOutQty": data.checkedOutQty
            });
        })
    );
    }, []);
    



    return (
        <div className="App">
            <h2>Data from Server is </h2>
            <p><strong>{data.Name}</strong></p>
            <p><strong>{data.ID}</strong></p>
            <p><strong>{data.Date}</strong></p>
            <p><strong>{data.checkedOutQty}</strong></p>
        </div>
     );
}

export default App;
