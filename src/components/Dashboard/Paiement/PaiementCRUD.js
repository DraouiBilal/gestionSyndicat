import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import {InputLabel} from '@mui/material';
import {TextField} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GridActionsCellItem } from '@mui/x-data-grid';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius : '5px',
  boxShadow: 24,
  p: 4,
};

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const AddBasicModal = ({open,handleClose,user,setPaiement,rows,properties}) => {

  const [formData, setFormData] = useState({
      "annee":'',
      "mois":'',
      "date_de_paiement":"",
      "propriete_id":''
    
  })

  const handleOnChnage = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault(); 

    axios.post('/paiement/create',formData,config).then(res=>{
      console.log(formData);
      setPaiement([...rows,{...res.data[0].paiement,date_de_paiement:res.data[0].paiement.date_de_paiement.date}])
    }).catch(e=>{
      console.log(e);
    })
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Ajouter un paiement :
          </Typography>
          <Grid container spacing={2} 
                    component="form" 
                    method="POST" 
                    validate 
                    onSubmit={(e) => {handleSubmit(e)}}
                    sx={{ 
                        borderRadius:'25px', 
                        border:'0.5px solid lightgrey',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 8px',
                        backgroundColor: 'white',
                        padding:2,
                        pr:4,
                        pb:5,
                        margin: '0 auto',
                        mt:3,
                        mb:3,
                        width:'100%',
                        }}>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>ID Proprietes</InputLabel>
                    <Select 
                        id='proprietaire_id'
                        options={properties.map(propertie=>({value:propertie.id,label:propertie.titre}))} 
                        components={makeAnimated()}
                        isMulti="false"
                        onChange={(e)=>{setFormData({...formData,propriete_id:e[0].value})}}
                        value={formData.proprietaire_cin}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Mois</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="mois"
                        name="mois"
                        type="number"
                        placeholder="Mois"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.mois}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Annee</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="annee"
                        name="annee"
                        type="number"
                        placeholder="Annee"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.annee}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>Date de Paiement</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        fullWidth
                        size="small"
                        id="date_de_paiement"
                        name="date_de_paiement"
                        type="date"
                        placeholder="date"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.date_de_paiement}
                        required
                    /> 
                </Grid>
                <Box>
                    <Button 
                        type="submit"
                        variant='contained' 
                        color='error' 
                        sx={{height:'30px',marginLeft:2,mt:2}}
                    >Add</Button>
                </Box>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}

const EditBasicModal = ({open,handleClose,row,user,setPaiement,rows,properties}) => {

  const [formData, setFormData] = useState({
    "annee":'',
    "mois":'',
    "date_de_paiement":"",
    "propriete_id":''
  
})

const handleOnChnage = e => {
  setFormData({...formData, [e.target.name]: e.target.value})
}

const handleSubmit = (e) =>{
  e.preventDefault(); 

  axios.put('/paiement/update',{...formData,propriete_id:row.propriete_id,id:row.id},config).then(res=>{
      console.log(res.data);
      setPaiement(
        rows.map(r=>{
          if(r.id===row.id){
            return {...res.data[0].paiement,date_de_paiement:res.data[0].paiement.date_de_paiement.date}
          }
          else 
            return r
        })
      )
    }).catch(e=>{
      console.log(e);
    })
  }


  return (user.role==='syndicate' && 
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Editer un paiement :
          </Typography>
          <Grid container spacing={2} 
                    component="form" 
                    method="POST" 
                    validate 
                    onSubmit={(e) => {handleSubmit(e)}}
                    sx={{ 
                        borderRadius:'25px', 
                        border:'0.5px solid lightgrey',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 8px',
                        backgroundColor: 'white',
                        padding:2,
                        pr:4,
                        pb:5,
                        margin: '0 auto',
                        mt:3,
                        mb:3,
                        width:'100%',
                        }}>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>ID Proprietes</InputLabel>
                    <Select 
                        name='proprietaire_id'
                        id='proprietaire_id'
                        options={properties.map(propertie=>({value:propertie.id,label:propertie.titre}))}
                        components={makeAnimated()}
                        isMulti="false"
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Mois</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="mois"
                        name="mois"
                        type="number"
                        defaultValue={row.mois}
                        placeholder="Mois"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.mois}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Annee</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="annee"
                        name="annee"
                        type="number"
                        defaultValue={row.annee}
                        placeholder="Annee"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.annee}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>Date du Paiement</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        fullWidth
                        size="small"
                        id="date_de_paiement"
                        name="date_de_paiement"
                        type="date"
                        defaultValue={row.date_de_paiement}
                        placeholder="date"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.date_de_paiement}
                        required
                    /> 
                </Grid>
                <Box>
                    <Button 
                        type="submit"
                        variant='contained' 
                        color='error' 
                        sx={{height:'30px',marginLeft:2,mt:2}}
                    >Save</Button>
                </Box>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}


const PaiementCRUD = ({auth:{user,loading:userLoading}}) => {

    const [rows, setPaiement] = useState([])
    const [loading, setLoading] = useState(true)
    const [ploading, setPLoading] = useState(true)
    const [properties,setProperties] = useState([])

    useEffect(()=>{
      axios.get('/paiement').then(res => {
        setPaiement(res.data.paiements)
        setLoading(false)
      }).catch(err=>{
        console.log(err);
      })

      axios.get('/proprietes').then(res=> {
        setProperties(res.data.proprietes)
        setPLoading(false)
      }).catch(err=>{
        console.log(err);
      })
    },[])
    useEffect(()=>{
      if(user){
        if(user.role==="syndicate"){
          setColumns([
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'propriete_id', headerName: 'ID Proprieté', width: 180 },
            { field: 'mois', headerName: 'Mois', width: 220 },
            { field: 'annee', headerName: 'Annee', width: 220 },
            { field: 'date_de_paiement', headerName: 'Date de paiement', width: 220 },
            {
              field: 'action',
              headerName: 'Action',
              width: 100,
              type: 'actions',
              getActions: (params)=>[
               <GridActionsCellItem icon={<EditIcon sx={{color:"yellow",fontSize:"20px"}}/>} onClick={()=>{handleOpenEdit(params.row)}} />
                ]
            },
        ])
        }
        else{
          setColumns([
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'propriete_id', headerName: 'ID Proprieté', width: 180 },
            { field: 'mois', headerName: 'Mois', width: 220 },
            { field: 'annee', headerName: 'Annee', width: 220 },
            { field: 'date_de_paiement', headerName: 'Date de paiement', width: 220 },
            
        ])
        }
      }
    },[user])

    //table columns structure
    const [columns,setColumns] = useState([]);



    // state of Add modal
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    // state of Edit modal
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = (row) => {setRow(row); setOpenEdit(true);};
    const handleCloseEdit = () => setOpenEdit(false);
        //current row being edited
    const [row,setRow] = React.useState({});

    return (!loading && !userLoading && !ploading &&
      <div>
        {user!==null && user.role==='syndicate' &&<Button sx={{ fontSize : "14px", backgroundColor:"#E2E2E2", color:"black", fontWeight:"600", boxShadow:"2px 2px 5px"}} variant="contained" onClick={handleOpenAdd}> Add </Button>
      }
        <div className="crud-table-container">
            {user.role==='syndicate' &&<><AddBasicModal properties={properties} setPaiement={setPaiement} rows={rows} user={user} open={openAdd} handleClose={handleCloseAdd} />
            <EditBasicModal properties={properties} setPaiement={setPaiement} rows={rows} user={user} open={openEdit} handleClose={handleCloseEdit} row={row} />
            </>}<DataGrid
                sx={{
                  color : "#E2E2E2",
                  backgroundColor:"#313131",
                  fontSize : "14px"
                }}
                rows={rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
                checkboxSelection
            />
        </div>
      </div>
    );
}

const mapStateToProps = state => ({
  auth: state.userReducer
})

export default connect(mapStateToProps)(PaiementCRUD)