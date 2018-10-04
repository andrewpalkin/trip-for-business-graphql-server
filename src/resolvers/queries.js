const { gql } = require('apollo-server');

const Query = gql`
    type Query{
        findAllCustomerSitesByCity (cityId: String!): [CustomerSite]
        findAllCustomerSitesByCountry (countryId: String!): [CustomerSite]
        getCustomerSite (id:String!): CustomerSite
        
        getCitiesByCountry (countryId: String!): [City]
        
        findAllCountries: [Country]
        getCountry (id:String!): Country
        getCountryByNameContains (nameContains: String!): [Country]
    }
`;

export default Query;