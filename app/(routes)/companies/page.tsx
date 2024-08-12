import React from 'react';
import { HeaderCompanies } from './components/HeaderCompanies';
import { ListCompanies } from './components/ListCompanies';

const CompaniesPage = () => {
  return (
    <div>
      <HeaderCompanies />
      <ListCompanies />
    </div>
  );
};

export default CompaniesPage;
