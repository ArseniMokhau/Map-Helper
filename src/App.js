import { Classrooms, Faculties, EmbedsByFaculty } from './data/Classrooms'
import { QRCodeCanvas } from 'qrcode.react';
import './App.css';
import { useState } from 'react';

function GetClassroomByName(name) {
  return Classrooms.find(classroom => classroom.name === (name))
}

function GetFacultyByName(name) {
  return Faculties.find(faculty => faculty.name === (name))
}

function App() {

  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')

  const [startLocationDescription, setStartLocationDescription] = useState('')
  const [endLocationDescription, setEndLocationDescription] = useState('')

  const [startLocationImage, setStartLocationImage] = useState('')
  const [endLocationImage, setEndLocationImage] = useState('')

  const [startFilter, setStartFilter] = useState('')
  const [endFilter, setEndFilter] = useState('')

  const [embedURL, setEmbedURL] = useState('')
  const [qrURL, setQRURL] = useState('')
  
  const [showStartList, setShowStartList] = useState(false);
  const [showEndList, setShowEndList] = useState(false);


  const getGoogleMapsEmbedUrl = (startLocation, endLocation) => {
    const eURL = EmbedsByFaculty.find(url => url.startFaculty === startLocation.faculty && url.endFaculty === endLocation.faculty).embedURL
    return eURL
  }

  const getGoogleMapsQRURL = (startLocation, endLocation) => {
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(startLocation)}&destination=${encodeURIComponent(endLocation)}&travelmode=walking`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const start = GetClassroomByName(startLocation)
    const end = GetClassroomByName(endLocation)

    const startFaculty = GetFacultyByName(start.faculty)
    const endFaculty = GetFacultyByName(end.faculty)
    if (start && end && start !== end) {
      const embedUrl = getGoogleMapsEmbedUrl(start, end)
      setEmbedURL(embedUrl)
      const qrUrl = getGoogleMapsQRURL(startFaculty.address, endFaculty.address)
      setQRURL(qrUrl)
    }
  }

  const filteredStartClassrooms = Classrooms.filter(classroom => classroom.name.toLowerCase().includes(startFilter.toLowerCase()))
  const filteredEndClassrooms = Classrooms.filter(classroom => classroom.name.toLowerCase().includes(endFilter.toLowerCase()))

  const handleStartLocationSelect = (name) => {
    const location = GetClassroomByName(name);

    setStartLocation(name)
    setStartFilter(name)
    setShowStartList(false)

    if (location) {
      const description = location.description
      setStartLocationDescription(description)
      
      const image = location.image
      setStartLocationImage(image)
    }
  }

  const handleEndLocationSelect = (name) => {
    const location = GetClassroomByName(name);

    setEndLocation(name)
    setEndFilter(name)
    setShowEndList(false)

    if (location) {
      const description = location.description
      setEndLocationDescription(description)
      
      const image = location.image
      setEndLocationImage(image)
    }
  }

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h1>Select Start and End Locations</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Start Location:</label>
            <input
              type='text'
              value={startFilter}
              onChange={(e) => setStartFilter(e.target.value)}
              placeholder='Type to filter'
              onFocus={() => setShowStartList(true)}
              onBlur={() => setTimeout(() => setShowStartList(false), 10)}>
            </input>
            {showStartList && startFilter && (
              <ul className="autocomplete-list">
                {filteredStartClassrooms.map((classroom) => (
                  <li
                    key={classroom.name}
                    onMouseDown={() => handleStartLocationSelect(classroom.name)}
                    className="autocomplete-item"
                  >
                    {classroom.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="form-group">
            <label>End Location:</label>
            <input
              type='text'
              value={endFilter}
              onChange={(e) => setEndFilter(e.target.value)}
              placeholder='Type to filter'
              onFocus={() => setShowEndList(true)}
              onBlur={() => setTimeout(() => setShowEndList(false), 10)}>
            </input>
            {showEndList && endFilter && (
              <ul className="autocomplete-list">
                {filteredEndClassrooms.map((classroom) => (
                  <li
                    key={classroom.name}
                    onMouseDown={() => handleEndLocationSelect(classroom.name)}
                    className="autocomplete-item"
                  >
                    {classroom.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button type='submit'>Get Directions</button>
        </form>

        {embedURL && (
          <div>
            <h2>Directions</h2>
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
            <h3>Or Scan The QR Code to View on Mobile</h3>
            <QRCodeCanvas value={qrURL} size={128}/>
            <p>
              <a href={qrURL} target="_blank" rel="noopener noreferrer">
                Click here to open in Google Maps
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="right-section">
        {startLocation && startLocationDescription && (
          <div className="building-description">
          {startLocationImage && <img src={startLocationImage} alt={`${startLocation}`} className="building-image" />}
          <h3>{startLocation}</h3>
          <p>{startLocationDescription}</p>
        </div>
        )}
        {endLocation && endLocationDescription && (
        <div className="building-description">
          {endLocationImage && <img src={endLocationImage} alt={`${endLocation}`} className="building-image" />}
          <h3>{endLocation}</h3>
          <p>{endLocationDescription}</p>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
