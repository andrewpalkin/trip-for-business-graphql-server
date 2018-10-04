const { gql } = require('apollo-server');

const Mutation = gql`
    type Mutation {
        newCustomerSite(cityId: String!,
            countryId: String!,
            name: String!,
            address: String!,
            description: String): CustomerSite
            
        newCity(name:String!,
            timeZone:String!,
            countryId:String!,
            description:String): City

        newCountry(name:String!,
            description:String):Country
    
    }
`;

export default Mutation;