import { useState } from 'react';
import './InputCard.css';
import { Card } from 'primereact/card';

interface Option {
    id: number;
    reponse: string;
    aide: string;
}

interface InputCardProps {
    id: number;
    question: string;
    repondre: Function;
    options: Option[];
}

function InputCard({ id, question, options, repondre }: InputCardProps) {
    const [result, setResult] = useState<number | null>(null);

    const onClick = (o: Option) => {
        repondre(id, o.id);
        setResult(o.id)
    }

    return (
        <div className="InputCard">
            <p className="InputCard-title">{ question }</p>
            <div className="gb-cards">
                { options && options.map((o: Option) => 
                    <Card key={o.id} className={`gb-card ${o.id === result ? 'gb-card-selected' : ''}`} onClick={() => onClick(o)}>
                        <p className="gb-card-title">{ o.reponse }</p>
                        { o.aide && <span className="gb-card-help">{ o.aide }</span> }
                    </Card>    
                )}
            </div>
        </div>
    );
}

export default InputCard;
