import React from 'react';

interface PersonalizedLinkProps {
  clientName: string;
  packageId: string;
}

const PersonalizedLink: React.FC<PersonalizedLinkProps> = ({ clientName, packageId }) => {
  const baseUrl = 'https://example.com/customize'; // Replace with actual base URL
  const personalizedUrl = `${baseUrl}?client=${encodeURIComponent(clientName)}&packageId=${packageId}`;

  return (
    <div className="personalized-link">
      <h2>Your Personalized Link</h2>
      <p>Share this link with your client:</p>
      <a href={personalizedUrl} target="_blank" rel="noopener noreferrer">
        {personalizedUrl}
      </a>
    </div>
  );
};

export default PersonalizedLink;