const { gql } = require('apollo-server');

import LocationInfo from './schemas/locationInfo';
import GoogleInfo from './schemas/googleInfo';
import ImageSource from './schemas/imageSource';
import Link from './schemas/link';
import CustomerSite from './schemas/customerSite';
import City from './schemas/city';
import Country from './schemas/country';

import CountryResolver from './resolvers/countryResolver';

import Query from './resolvers/queries'
import Mutation from './resolvers/mutations'

const schema = gql`
    schema {        
        query: Query
        mutation: Mutation
    }
`;

module.exports = {
    typeDefs : [LocationInfo, GoogleInfo, ImageSource, Link, CustomerSite, City, Country, Query, Mutation, schema],
    resolvers : [CountryResolver]
};


