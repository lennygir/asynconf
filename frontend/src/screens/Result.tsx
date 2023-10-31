import { useLocation } from 'react-router-dom';
import './Result.css';
import { Button } from 'primereact/button';

function Result() {
  
  const { state } = useLocation();
  const { taux } = state;

  return (
    <div className="Result">
      <div className="result-card">
        <p>Voici votre taux d'épargne :</p>
        <p className="result">{ taux }%</p>
        <p className="hint">Comment est calculé ce taux ? Le taux obtenu se base sur vos réponses. Plus vos choix seront en faveur de la cause écologique, plus votre taux sera bas.</p>
        <a href="/">
          <Button style={{background: '#84C125'}} label="Retour à l'accueil" />
        </a>
      </div>
    </div>
  );
}

export default Result;
