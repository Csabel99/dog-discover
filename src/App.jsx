import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchCountries = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
      );

      const data = await res.json();

      let countryList = [];

      for (let i = 0; i < data.length; i++) {
        let country = data[i];

        let name = "Unknown";
        if (country.name && country.name.common) {
          name = country.name.common;
        }

        let capital = "N/A";
        if (country.capital && country.capital.length > 0) {
          capital = country.capital[0];
        }

        let region = "Unknown";
        if (country.region) {
          region = country.region;
        }

        let population = 0;
        if (country.population) {
          population = country.population;
        }

        let flag = "";
        if (country.flags && country.flags.png) {
          flag = country.flags.png;
        }

        countryList.push({
          id: i + 1,
          name: name,
          capital: capital,
          region: region,
          population: population,
          flag: flag,
        });
      }

      setCountries(countryList);
    } catch (error) {
      console.log("Error:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
  const loadData = async () => {
    await fetchCountries();
  };

  loadData();
}, []);

  const filteredCountries = countries.filter((country) => {
    let search = searchBox.toLowerCase();

    let matchesSearch = false;

    if (searchBox === "") {
      matchesSearch = true;
    } else if (country.name.toLowerCase().includes(search)) {
      matchesSearch = true;
    } else if (country.capital.toLowerCase().includes(search)) {
      matchesSearch = true;
    }

    let matchesRegion = true;

    if (regionFilter !== "All") {
      if (country.region !== regionFilter) {
        matchesRegion = false;
      }
    }

    return matchesSearch && matchesRegion;
  });

  let totalCountries = countries.length;

  let regions = [];
  for (let i = 0; i < countries.length; i++) {
    if (!regions.includes(countries[i].region)) {
      regions.push(countries[i].region);
    }
  }

  let totalRegions = regions.length;

  let largePopulation = 0;
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].population > 100000000) {
      largePopulation++;
    }
  }

  return (
    <div className="app">
      <h1>Country Dashboard</h1>

      <button onClick={fetchCountries}>Refresh Countries</button>

      <div className="stats">
        <div className="card">
          <h3>Total Countries</h3>
          <p>{totalCountries}</p>
        </div>

        <div className="card">
          <h3>Total Regions</h3>
          <p>{totalRegions}</p>
        </div>

        <div className="card">
          <h3>Population Over 100M</h3>
          <p>{largePopulation}</p>
        </div>
      </div>

      <div className="controls">
        <p>Showing {filteredCountries.length} countries</p>

        <input
          type="text"
          placeholder="Search by name or capital"
          value={searchBox}
          onChange={(e) => setSearchBox(e.target.value)}
        />

        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="All">All Regions</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading countries...</p>
      ) : (
        <div className="dog-list">
          {filteredCountries.map((country) => (
            <div key={country.id} className="dog-card">
              <img src={country.flag} alt={country.name} width="200" />
              <p><b>Name:</b> {country.name}</p>
              <p><b>Capital:</b> {country.capital}</p>
              <p><b>Region:</b> {country.region}</p>
              <p><b>Population:</b> {country.population.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;