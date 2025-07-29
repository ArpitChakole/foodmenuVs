import React, { useState } from 'react';
import { generateUniqueId } from '../utils/idGenerator';
import { Package } from '../types';

const PackageGenerator: React.FC = () => {
    const [clientDetails, setClientDetails] = useState<{ name: string; email: string }>({ name: '', email: '' });
    const [packages, setPackages] = useState<Package[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setClientDetails({ ...clientDetails, [name]: value });
    };

    const generatePackages = () => {
        const eligiblePackages: Package[] = [
            { id: generateUniqueId(), name: 'Gold', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
            { id: generateUniqueId(), name: 'Silver', features: ['Feature 1', 'Feature 2'] },
            { id: generateUniqueId(), name: 'Platinum', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
        ];
        setPackages(eligiblePackages);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        generatePackages();
    };

    return (
        <div className="package-generator">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Client Name"
                    value={clientDetails.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Client Email"
                    value={clientDetails.email}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Generate Packages</button>
            </form>
            {packages.length > 0 && (
                <div className="packages-list">
                    <h2>Eligible Packages</h2>
                    <ul>
                        {packages.map(pkg => (
                            <li key={pkg.id}>
                                {pkg.name} - {pkg.features.join(', ')}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PackageGenerator;