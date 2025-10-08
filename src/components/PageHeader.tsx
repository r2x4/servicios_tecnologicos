import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
  </div>
);

export default PageHeader;