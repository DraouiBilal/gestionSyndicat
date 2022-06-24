import PaiementCRUD from "./PaiementCRUD";
import './Paiement.css';

const Paiement = () => {

    return (
        <div className="main-content">
            <div className="section">
                <div className="section-header">
                    <h4>Paiement</h4>
                </div>
                <div className="section-body">
                    <PaiementCRUD />
                </div>
            </div>
        </div>
    )
}

export default Paiement;