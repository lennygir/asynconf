import './App.css';
import { Button } from 'primereact/button';

function App() {
  return (
    <div className="App">
      <div className="result-card">
        <p>Simulateur de taux d'épargne</p>
        <p className="hint">Répondez à quelques questions et obtenez un taux d'épargne en un temps record.</p>
        <a href="/simulation">
          <Button style={{background: '#84C125'}} label="Obtenir un taux" />
        </a>
      </div>
    </div>
  );
}

export default App;
