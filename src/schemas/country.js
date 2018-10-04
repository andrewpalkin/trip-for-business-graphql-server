const { gql } = require('apollo-server');

const Country = gql`
    type Country{
        id: ID
        updated_at: String
        created_at: String
        name: String
        description: String
        links: [Link]
        imgSources: [ImageSource]
        googleInfo: GoogleInfo
        cities: [City]
    }
`;

export default Country;