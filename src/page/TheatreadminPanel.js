// src/component/AdminPanel.js
import React, { useState, useEffect } from 'react';
import CerdentialCard from 'src/component/nuclear/card/CredentialCard';
import axios from 'axios';
import Searchbar from 'src/component/searchbar/Index';

const TheatreadminPanel = () => {
    const [data, setData] = useState([]);

    const adminvalue = {
        name: "prince Kumar",
        email: "nova@gmail.com",
        password: "************"
    };

    useEffect(() => {
        axios.get('http://localhost:3000/Users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "20%", height: "100vh", backgroundColor: "#16325B", padding: "30px 5px 0px 20px", display: "flex", flexDirection: "column" }}>
                <CerdentialCard title="TheatreAdmin" value={adminvalue} />
            </div>
            <div style={{ width: "80%", height: "100vh", padding: "50px 50px", overflow: "auto" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f8f9fa', padding: "25px" }}>
                    <h1 style={{ fontSize: "20px", fontWeight: "500", alignSelf: "flex-start", marginBottom: "20px" }}>Add Theatre
                    
                    </h1>
                    <div style={{ width: '95%', display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <Searchbar />
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ borderBottom: '2px solid #dee2e6', padding: '12px' }}>Id</th>
                                <th style={{ borderBottom: '2px solid #dee2e6', padding: '12px' }}>Title</th>
                                <th style={{ borderBottom: '2px solid #dee2e6', padding: '12px' }}>Release_date</th>
                                <th style={{ borderBottom: '2px solid #dee2e6', padding: '12px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) => (
                                <tr key={i} style={{ borderTop: '1px solid #dee2e6' }}>
                                    <td style={{ padding: '12px' }}>{d.id}</td>
                                    <td style={{ padding: '12px' }}>{d.title}</td>
                                    <td style={{ padding: '12px' }}>{d.release_date}</td>
                                    <td style={{ padding: '12px' }}>
                                        <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '4px 8px', borderRadius: '4px', marginRight: '8px', border: 'none', cursor: 'pointer' }}>Edit</button>
                                        <button style={{ backgroundColor: '#dc3545', color: '#fff', padding: '4px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <button
                        style={{ height: "fit-content", backgroundColor: '#6c757d', color: '#fff', padding: '5px', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', margin: "5px" }}>    
                        Add Show</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheatreadminPanel;
