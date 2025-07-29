export const packageOptions = [
  { id: 'gold', name: 'Gold', features: ['Feature 1', 'Feature 2', 'Feature 3'], price: 100 },
  { id: 'silver', name: 'Silver', features: ['Feature 1', 'Feature 2'], price: 70 },
  { id: 'platinum', name: 'Platinum', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'], price: 150 },
];

export const getEligiblePackages = (clientDetails) => {
  // Logic to determine eligibility based on client details
  // For simplicity, all packages are eligible in this example
  return packageOptions;
};

export const getPackageById = (id) => {
  return packageOptions.find(package => package.id === id);
};