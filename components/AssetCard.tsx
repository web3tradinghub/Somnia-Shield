import React from 'react';

interface AssetCardProps {
  name: string;
  amount: string;
  value: string;
}

const AssetCard: React.FC<AssetCardProps> = ({ name, amount, value }) => {
  return (
    <div style={{ border: '1px solid #00ff00', padding: '10px', backgroundColor: '#050505' }}>
      <p className="glowing-text">{name}</p>
      <p className="glowing-text">{amount}</p>
      <p className="glowing-text">{value}</p>
    </div>
  );
};

export default AssetCard;
