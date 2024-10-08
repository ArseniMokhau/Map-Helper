import { EmbedsByBuilding, Buildings } from './data/Classrooms'
import { QRCodeCanvas } from 'qrcode.react';
import './App.css';
import { useState } from 'react';

function GetBuildingByName(name) {
  return Buildings.find(building => building.name === (name))
}

function App() {

  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')

  const [startFilter, setStartFilter] = useState('')
  const [endFilter, setEndFilter] = useState('')

  const [embedURL, setEmbedURL] = useState('')
  const [qrURL, setQRURL] = useState('')
  
  const [showStartList, setShowStartList] = useState(false);
  const [showEndList, setShowEndList] = useState(false);


  const getGoogleMapsEmbedUrl = (startLocation, endLocation) => {
    const eURL = EmbedsByBuilding.find(url => url.startBuilding === startLocation.abbreviation && url.endBuilding === endLocation.abbreviation).embedURL
    return eURL
  }

  const getGoogleMapsQRURL = (startLocation, endLocation) => {
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(startLocation.address)}&destination=${encodeURIComponent(endLocation.address)}&travelmode=walking`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (startLocation && endLocation && startLocation !== endLocation) {
      const embedUrl = getGoogleMapsEmbedUrl(startLocation, endLocation)
      setEmbedURL(embedUrl)
      const qrUrl = getGoogleMapsQRURL(startLocation, endLocation)
      setQRURL(qrUrl)
    }
  }

  const filteredStartBuildings = Buildings.filter(building => building.name.toLowerCase().includes(startFilter.toLowerCase()))
  const filteredEndBuildings = Buildings.filter(building => building.name.toLowerCase().includes(endFilter.toLowerCase()))

  const handleStartLocationSelect = (name) => {
    const location = GetBuildingByName(name);

    setStartLocation(location)
    setStartFilter(name)
    setShowStartList(false)
  }

  const handleEndLocationSelect = (name) => {
    const location = GetBuildingByName(name);

    setEndLocation(location)
    setEndFilter(name)
    setShowEndList(false)
  }

  return (
    <div className="container">

      <header className="page-header">
        <img src={process.env.PUBLIC_URL + "/images/logo-polsl.png"} alt="Header" className="header-image"/>
      </header>
      
      {/* Left Section */}
      <div className="left-section">
        <h1>Wybierz lokalizacje początkową i końcową</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Lokalizacja początkowa:</label>
            <input
              type='text'
              value={startFilter}
              onChange={(e) => setStartFilter(e.target.value)}
              placeholder='Filtruj lokalizacje'
              onFocus={() => setShowStartList(true)}
              onBlur={() => setTimeout(() => setShowStartList(false), 10)} >
            </input>
            {showStartList && (
              <ul className="autocomplete-list">
                {filteredStartBuildings.map((building) => (
                  <li
                    key={building.name}
                    onMouseDown={() => handleStartLocationSelect(building.name)}
                    className="autocomplete-item"
                  >
                    {building.name} - {building.address}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="form-group">
            <label>Lokalizacja końcowa:</label>
            <input
              type='text'
              value={endFilter}
              onChange={(e) => setEndFilter(e.target.value)}
              placeholder='Filtruj lokalizacje'
              onFocus={() => setShowEndList(true)}
              onBlur={() => setTimeout(() => setShowEndList(false), 10)} >
            </input>
            {showEndList && (
              <ul className="autocomplete-list">
                {filteredEndBuildings.map((building) => (
                  <li
                    key={building.name}
                    onMouseDown={() => handleEndLocationSelect(building.name)}
                    className="autocomplete-item"
                  >
                    {building.name} - {building.address}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button type='submit'>Znajdź trasę</button>
        </form>

        {embedURL && (
          <div>
            <iframe
              title="Google Maps Directions"
              width="100%"
              height="450"
              style={{ border: 0 }}
              src={embedURL}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        )}

        {qrURL && (
          <div className='qr-code-container'>
            <h3>Zeskanuj kod QR, aby wyświetlić na telefonie</h3>
            <QRCodeCanvas value={qrURL} size={128} />
            <p>
              <a href={qrURL} target="_blank" rel="noopener noreferrer">
                Kliknij tutaj, aby otworzyć w Google Maps
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="right-section">
        {startLocation && (
          <div className="building-description">
            {startLocation.image && <img src={process.env.PUBLIC_URL + startLocation.image} alt={`${startLocation}`} className="building-image" />}
            <h2>{startLocation.name}</h2>
            <h4>{startLocation.address}</h4>
            <p>{startLocation.description}</p>
          </div>
        )}
        {endLocation && (
          <div className="building-description">
            {endLocation.image && <img src={process.env.PUBLIC_URL + endLocation.image} alt={`${endLocation}`} className="building-image" />}
            <h2>{endLocation.name}</h2>
            <h4>{endLocation.address}</h4>
            <p>{endLocation.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
