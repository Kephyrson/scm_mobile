import './App.css';
import CampusMap from './components/CampusMap';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>西浦太仓校区智能地图</h1>
        <p className="subtitle">XJTLU Taicang Campus Smart Map</p>
      </header>
      <main className="map-placeholder">
        <CampusMap />
      </main>
    </div>
  )
}

export default App;
