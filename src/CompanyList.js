import React from 'react'
import { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';

/** Display list of all companies
 * 
 * state: 
 *  - companies: array of all companies [{handle,name,description...},...]
 *  - isLoading: Boolean
 * 
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 * 
 */
const CompanyList = () => {
    const [ companies, setCompanies ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    console.log("companies", companies)

    useEffect(() => {
        async function getCompaniesData() {
            setCompanies(await JoblyApi.getCompanies());
        }

        getCompaniesData();
    }, []);



  return (
    <div className='CompanyList'>
        <ul>
            {companies.map((c => 
                <CompanyCard 
                    key={c.handle}
                    name={c.name} 
                    description={c.description}
                    logoUrl={c.logoUrl}
                />
            ))}
        </ul>
    </div>
  )
}

export default CompanyList