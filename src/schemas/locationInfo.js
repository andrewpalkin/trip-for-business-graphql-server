const { gql } = require('apollo-server');

const LocationInfo = gql`
    type LocationInfo{
        id:ID
        lng: String
        lat: String
    }
`;

export default LocationInfo;