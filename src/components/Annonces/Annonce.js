import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {setAlert} from '../../redux/actions/alertAction'
import { useNavigate } from "react-router-dom";

const Annonce = ({ isAuthenticated,userLoading, user }) => {

  const navigate = useNavigate()

  const { id } = useParams();

  const [formData, setFormData] = useState({
    titre: "",
    description: "",
  });

  const [annonce, setAnnonce] = useState({
    id: "",
    syndicate_id: "",
    titre: "",
    description: "",
    created_at: "",
    updated_at: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    axios
      .get(`/annonces/${id}`)
      .then((res) => {
        setAnnonce(res.data.annonce);
        setFormData({
          titre: res.data.annonce.titre,
          description: res.data.annonce.description,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOnChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`/annonces/${id}`,formData)
      setAnnonce(res.data.annonce)
      setAlert("Alert updated successfully","success")
    } catch (err) {
      console.log(err);
      setAlert(err.response.data,"error")
    }
  }

  const handleOnClick = async (e) => {
    try {
      const res = await axios.delete(`/annonces/${id}`)
      setAnnonce({
        id: "",
        syndicate_id: "",
        titre: "",
        description: "",
        created_at: "",
        updated_at: "",
      })
      setAlert("Alert deleted successfully","success")
      navigate('/annonces')
    } catch (err) {
      console.log(err);
      setAlert(err.response.data,"error")
    }
  }

  return (
    !loading && (
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
                <button type="button" className="btn btn-danger mx-3" onClick={e=>handleOnClick(e)}>
                  Supprimer annonce
                </button>
              </div>
            </div>
          </form>
        )}
        <div className="col col-md col-lg">
          <div className="card annonce-content">
            <div className="card-head">
              <p className="stats-header">{annonce.titre}</p>
              <p className="annonce-date">
                Le {new Date(annonce.created_at).toLocaleString("fr-FR")}
              </p>
            </div>
            <br />
            <div className="card-body">
              <p>{annonce.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  user: state.userReducer.user,
  userLoading: state.userReducer.loading
});

export default connect(mapStateToProps)(Annonce);
