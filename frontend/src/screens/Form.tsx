import { useEffect, useState } from 'react';
import InputCard from '../components/InputCard';
import './Form.css';
import QuestionService from '../services/QuestionService';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import ReponseService from '../services/ReponseService';
import { useNavigate } from 'react-router-dom';

function Form() {

  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [reponses, setReponses] = useState({});

  const addReponse = (questionId: number, reponseId: number) => {
    let toAdd: any = {};
    toAdd[questionId] = reponseId;
    setReponses({...reponses, ...toAdd});
  }

  const submit = () => {
    ReponseService.submitReponses(reponses).then((res: any) => {
      navigate('/result', { state: { taux: res.taux } });
    }) 
    
  }

  useEffect(() => {
    QuestionService.getAllQuestions().then((res) => {
      setQuestions(res);
    })
  }, []) // Call only once

  return (
    <div className="Form">
      <div className="Form-progress">
        <ProgressBar value={Object.values(reponses).length/questions.length*100} color="#84C125"></ProgressBar>
      </div>
      { questions && questions.map((q: any) => 
        <InputCard key={q.id} id={q.id} question={q.question} options={q.reponses} repondre={addReponse} />
      )}
      <div className="Form-submit">
        <Button style={{background: '#84C125'}} label="Obtenir mon taux" onClick={submit} disabled={Object.values(reponses).length !== questions.length} />
      </div>
    </div>
  );
}

export default Form;
