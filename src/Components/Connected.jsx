import React, { useState } from "react";

const Connected = (props) => {
    const [num,setNum]=useState(null);
    const voteHandler=(i)=>{
        console.log(num);
          setNum(i);
          props.voteFunction(i);
        //   console.log(num);
        //   console.log(i);
        }
    return (

        <div className="connected-container">
            <h1 className="connected-header">Welcome to Web-V
            <br/>Be a responsible Citizen!
            </h1>
            
            <p className="connected-account">Metamask Account: {props.account}</p>
            <p className="connected-account">Remaining Time: {props.remainingTime}</p>
            { props.showButton ? (
                <p className="connected-account">You have already voted</p>
            ) : (
                <div>
                    <input type="number" placeholder="Entern Candidate Index" value={props.number} onChange={props.handleNumberChange}></input>
            <br />
            <button className="login-button" onClick={props.voteFunction}>Vote</button>

                </div>
            )}
            
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    <td><button onClick={()=>voteHandler(candidate.index)}>Vote</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default Connected;