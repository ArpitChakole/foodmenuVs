import React, { useState } from 'react';

const PackageCustomizer = ({ selectedPackage, onCustomize }) => {
  const [customOptions, setCustomOptions] = useState({
    snacks: [],
    mainCourse: '',
    dessert: '',
  });

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setCustomOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCustomize(customOptions);
  };

  return (
    <div className="package-customizer">
      <h2>Customize Your {selectedPackage.name} Package</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="snacks">Select Snacks:</label>
          <select name="snacks" onChange={handleOptionChange} multiple>
            <option value="Chips">Chips</option>
            <option value="Cookies">Cookies</option>
            <option value="Fruit">Fruit</option>
          </select>
        </div>
        <div>
          <label htmlFor="mainCourse">Select Main Course:</label>
          <select name="mainCourse" onChange={handleOptionChange}>
            <option value="Pizza">Pizza</option>
            <option value="Pasta">Pasta</option>
            <option value="Salad">Salad</option>
          </select>
        </div>
        <div>
          <label htmlFor="dessert">Select Dessert:</label>
          <select name="dessert" onChange={handleOptionChange}>
            <option value="Ice Cream">Ice Cream</option>
            <option value="Cake">Cake</option>
            <option value="Brownie">Brownie</option>
          </select>
        </div>
        <button type="submit">Customize Package</button>
      </form>
    </div>
  );
};

export default PackageCustomizer;