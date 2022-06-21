import {useState,useEffect} from 'react'
import axios from 'axios'
import AnnonceCard from "./AnnonceCard"
import {setAlert} from '../../redux/actions/alertAction'
import { connect } from "react-redux";



const Annonces = ({ isAuthenticated,userLoading, user })=> {

    const [annonces, setAnnonces] = useState([])
    const [loading, setLoading] = useState(true)

    const [formData, setFormData] = useState({
      titre: "",
      description: "",
    });
  
  
    const handleOnChange = (e) => {
      setFormData({...formData, [e.target.name]:e.target.value})
    }
  
    const handleOnSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post(`/annonces`,formData)
        setAnnonces([res.data.annonce,...annonces])
        setAlert("Alert added successfully","success")
  
      } catch (err) {
        console.log(err);
        setAlert(err.response.data,"error")
      }
    }
  

    useEffect(()=>{
        axios.get('/annonces').then(res =>{
          setAnnonces(res.data.annonces)
          console.log(res.data.annonces);
          setLoading(false)
        })
    },[])

    return (!loading &&
        <div className="main-content">
          {!userLoading && user.role === "syndicate" && (
          <form className="col col-md col-lg" onSubmit={e=> handleOnSubmit(e)}>
            <div className="card annonce-content">
              <div className="card-head">
                <p className="stats-header">Mise a jour d'annonce</p>
              </div>
              <div className="card-body">
                <input
                  type="text"
                  name="titre"
                  className="form-control"
                  value={formData.titre}
                  placeholder="Titre"
                  onChange={(e) => handleOnChange(e)}
                />

                <textarea
                  type="text"
                  name="description"
                  className="form-control mt-4"
                  value={formData.description}
                  placeholder="Description"
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="card-footer text-right">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        )}
        <div className="col col-md col-lg">
          <div className="card">
            <div className="card-head">
              <p className="stats-header">Annonces</p>
            </div>
            <div className="card-body annonces">
                {
                  annonces.map((annonce,index)=> (
                    <AnnonceCard key={index} annonce={annonce} />
                  ))
                }

            </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  user: state.userReducer.user,
  userLoading: state.userReducer.loading
});

export default connect(mapStateToProps)(Annonces);