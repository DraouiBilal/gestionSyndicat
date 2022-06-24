import CRUD from "./CRUD";
import './Depense.css';

const Depense = () => {

    return (
        <div className="main-content">
            <div className="section">
                <div className="section-header">
                    <h4>Dépenses</h4>
                </div>
                <div className="section-body">
                    <CRUD />
                </div>
            </div>
        </div>
    )
}

export default Depense;