import React, { useState } from 'react';

const ClientForm: React.FC = () => {
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPhone, setClientPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle package generation will go here
        console.log('Client Details:', { clientName, clientEmail, clientPhone });
    };

    return (
        <form onSubmit={handleSubmit} className="client-form">
            <h2>Enter Client Details</h2>
            <div>
                <label htmlFor="clientName">Name:</label>
                <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="clientEmail">Email:</label>
                <input
                    type="email"
                    id="clientEmail"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="clientPhone">Phone:</label>
                <input
                    type="tel"
                    id="clientPhone"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Generate Packages</button>
        </form>
    );
};

export default ClientForm;