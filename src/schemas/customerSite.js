const { gql } = require('apollo-server');

const CustomerSite = gql`
    type CustomerSite{
        id: ID
        cityId: String
        countryId: String
        updated_at: String
        created_at: String
        name: String
        description: String
        address:String
        links: [Link]
        imgSources: [ImageSource]
        googleInfo: GoogleInfo
    }
`;

export default CustomerSite;