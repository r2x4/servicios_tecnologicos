import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, className }) => (
  <div className={`text-center p-6 rounded-lg ${className}`}>
    <div className="text-4xl font-bold mb-2">{value}</div>
    <div className="text-gray-700">{label}</div>
  </div>
);

export default StatCard;