import React from 'react';
import { useLocation } from 'react-router-dom';

const Customize = () => {
    const location = useLocation();
    const { packageId, packageName, customizationOptions } = location.state || {};

    return (
        <div className="customize-container">
            <h1>Customize Your {packageName} Package</h1>
            <p>Package ID: {packageId}</p>
            <div className="customization-options">
                {customizationOptions && customizationOptions.map((option, index) => (
                    <div key={index} className="customization-option">
                        <h2>{option.title}</h2>
                        <ul>
                            {option.choices.map((choice, idx) => (
                                <li key={idx}>
                                    <label>
                                        <input type="checkbox" />
                                        {choice}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button className="submit-customization">Submit Customization</button>
        </div>
    );
};

export default Customize;