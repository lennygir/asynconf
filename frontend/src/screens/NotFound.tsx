import './NotFound.css';
import Error from '../assets/404.png';
import { Button } from 'primereact/button';

function NotFound() {
  return (
    <div className="Notfound">
      <img src={Error} alt="logo green bank" />
      <p>Oups... il n'y a rien à voir ici</p>
      <Button style={{background: '#84C125'}} label="Retourner a l'accueil" />
    </div>
  );
}

export default NotFound;
