const { gql } = require('apollo-server');

const GoogleInfo = gql`
    type GoogleInfo{
        id:ID
        googlePlaceId: String
        locationInfo: LocationInfo
    }
`;

export default GoogleInfo;