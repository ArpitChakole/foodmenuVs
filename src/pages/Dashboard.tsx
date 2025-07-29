import React from 'react';
import ClientForm from '../components/ClientForm';
import PackageGenerator from '../components/PackageGenerator';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Sales Dashboard</h1>
            <ClientForm />
            <PackageGenerator />
        </div>
    );
};

export default Dashboard;