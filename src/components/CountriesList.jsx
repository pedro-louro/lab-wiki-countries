import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  // const style = { maxHeight: '90vh', overflow: 'scroll' };
  return (
    <div className="list-group">
      {countries.map((country) => {
        return (
          <Link
            className="list-group-item list-group-item-action"
            to={`countries/${country.alpha3Code}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="country flag"
            />
            <p>{country.name.official}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
