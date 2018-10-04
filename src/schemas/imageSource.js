const { gql } = require('apollo-server');

const ImageSource = gql`
    type ImageSource{
        id: ID
        source: String
        type: String
    }
`;

export default ImageSource;