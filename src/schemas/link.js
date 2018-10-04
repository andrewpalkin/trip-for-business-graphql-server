const { gql } = require('apollo-server');

const Link = gql`
    type Link{
        id: String
        type: String
        name: String
        url: String
    }
`;

export default Link;