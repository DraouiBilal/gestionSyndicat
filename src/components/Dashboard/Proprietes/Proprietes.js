import ProprietesCRUD from "./ProprietesCRUD";
import './Proprietes.css';

const Proprietes = () => {

    return (
        <div className="main-content">
            <div className="section">
                <div className="section-header">
                    <h4>Proprietés</h4>
                </div>
                <div className="section-body">
                    <ProprietesCRUD />
                </div>
            </div>
        </div>
    )
}

export default Proprietes;