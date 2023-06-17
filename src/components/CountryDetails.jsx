import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const countryDetails = countries.filter(
      (country) => country.alpha3Code === countryId
    );
    if (countryDetails) {
      setCountry(countryDetails);
    }
  }, [countryId, countries]);
  const style = { width: '30%' };

  const codeToName = (code) => {
    return countries.filter((country) => country.alpha3Code === code);
  };

  return (
    <div>
      {!country && <h3>Country not found!</h3>}
      {country && (
        <div className="col-7">
          <h1>{country[0].name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ style }}>Capital</td>
                <td>{country[0].capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country[0].area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul style={{ listStyleType: 'none' }}>
                    {country[0].borders.map((border) => {
                      return (
                        <li>
                          <Link to={`/countries/${border}`}>
                            {codeToName(border)[0].name.official}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
