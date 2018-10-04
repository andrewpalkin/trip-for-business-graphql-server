const { gql } = require('apollo-server');

const City = gql`
    type City{
        id: ID
        updated_at: String
        countryId: String
        created_at: String
        name: String
        description: String
        timeZone: String
        links: [Link]
        imgSources: [ImageSource]
        googleInfo: GoogleInfo
        customerSites: [CustomerSite]
    }
`;

export default City;