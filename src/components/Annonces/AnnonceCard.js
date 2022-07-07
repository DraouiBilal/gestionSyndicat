import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const AnnonceCard = ({annonce}) => {
    const {id,titre,description,created_at} = annonce
    return (
        <div className="annonce-card">
            <FontAwesomeIcon icon={solid("bullhorn")} />   
            <div>
                <h2>{titre}</h2>
                <h6>{new Date(created_at).toLocaleDateString("fr-FR",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h6>
            </div>
            <p>{description.length>200?`${description.substring(0,200)}...`:description}</p>
        <Link to={`/annonces/${id}`}>Read More</Link>
        </div>
    )
}

export default AnnonceCard