import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesData from './countries.json';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Routes>
              <Route
                path="/countries/:countryId"
                element={<CountryDetails countries={countries} />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
