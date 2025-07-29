import React from 'react';
import { useHistory } from 'react-router-dom';
import PackageGenerator from '../components/PackageGenerator';
import PersonalizedLink from '../components/PersonalizedLink';

const Packages = () => {
    const history = useHistory();
    const [packages, setPackages] = React.useState([]);
    const [clientInfo, setClientInfo] = React.useState(null);

    const handlePackageGeneration = (generatedPackages, clientDetails) => {
        setPackages(generatedPackages);
        setClientInfo(clientDetails);
    };

    const navigateToCustomize = (packageId) => {
        history.push(`/customize/${packageId}`);
    };

    return (
        <div className="packages-container">
            <h1>Available Packages</h1>
            <PackageGenerator onGenerate={handlePackageGeneration} />
            {packages.length > 0 && (
                <div>
                    <h2>Generated Packages</h2>
                    <ul>
                        {packages.map(pkg => (
                            <li key={pkg.id}>
                                <span>{pkg.name} - {pkg.id}</span>
                                <button onClick={() => navigateToCustomize(pkg.id)}>Customize</button>
                            </li>
                        ))}
                    </ul>
                    <PersonalizedLink clientInfo={clientInfo} packages={packages} />
                </div>
            )}
        </div>
    );
};

export default Packages;