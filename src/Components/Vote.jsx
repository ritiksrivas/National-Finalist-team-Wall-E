import React from 'react';

const Vote = (props) => {
    return (
    //     <div className='metamask' style={{display:"flex", justifyContent:"space-evenly",
    //         width:"100%",
    //     }}>
    //         <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', width:'100%' }}>
    // <div className='card' style={{ width: '500px',height:'500px' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
    //   <h3>How To Vote and Connect MetaMask</h3>
    //   <ul>
    //     <li>Install MetaMask from the browser extension store.</li>
    //     <li>Create a MetaMask wallet or import an existing one.</li>
    //     <li>Connect to an Ethereum test network (e.g., Goerli).</li>
    //     <li>Fund your test account with test Ether.</li>
    //     <li>Open the voting dApp and connect MetaMask.</li>
    //     <li>Choose your preferred candidate in the dApp.</li>
    //     <li>Confirm the transaction in MetaMask.</li>
    //     <li>Wait for the transaction confirmation on the blockchain.</li>
    //     <li>You've successfully cast your vote!</li>
    //     <li>Connect to an Ethereum test network (e.g., Goerli).</li>
    //     <li>Fund your test account with test Ether.</li>
    //     <li>Open the voting dApp and connect MetaMask.</li>
    //     <li>Choose your preferred candidate in the dApp.</li>
    //     <li>Confirm the transaction in MetaMask.</li>
    //     <li>Wait for the transaction confirmation on the blockchain.</li>
    //     <li>You've successfully cast your vote!</li>
    //   </ul>
    // </div>
    // </div>

        <div className="login-container">
            <h1 className="welcome-message">Welcome to decentralized voting application</h1>
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask</button>
        </div>
        //</div>
    )
}

export default Vote;
