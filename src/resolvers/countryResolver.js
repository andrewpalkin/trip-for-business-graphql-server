import Country from '../schemas/country';

const CountryResolver = {
    Query:{
        findAllCountries: () => Country,
    }
};

export default CountryResolver;