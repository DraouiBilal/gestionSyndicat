import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Select } from '@mui/material';
import {InputLabel} from '@mui/material';
import {TextField} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import makeAnimated from 'react-select/animated';


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

const AddBasicModal = ({rows,setDepenses,user,open,handleClose}) => {

  const [formData, setFormData] = useState({
    "date_de_depense":"",
    "somme":0,
    "intitule":"",
    "syndicate_id":user.id,
    "type_de_paiement":"cheque"
  })

  const handleOnChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    axios.post('/depense/create',formData,config).then(res=>{
      setDepenses([...rows,res.data.depense])
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajouter une dépense :
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
                    <InputLabel sx={{ fontSize:"14px"}}>Type de paiement</InputLabel>
                    <Select 
                        name='proprietaire_cin'
                        id='proprietaire_id'
                        options={[{value:"cheque",label:"cheque"},{value:"liquide",label:"liquide"}]}
                        isMulti="false"


                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Date de l'operation</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        fullWidth
                        size="small"
                        id="date"
                        name="date_de_depense"
                        type="date"
                        placeholder="date"
                        onChange={e=>handleOnChange(e)}
                        value={formData.date_de_depense}
                        required
                    /> 
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Somme</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="montant"
                        name="somme"
                        type="number"
                        placeholder="Montant"
                        onChange={e=>handleOnChange(e)}
                        value={formData.somme}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>Intitulé</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        multiline
                        size="small"
                        fullWidth
                        id="intitule"
                        name="intitule"
                        type="text"
                        placeholder="Intitulé"
                        onChange={e=>handleOnChange(e)}
                        value={formData.intitule}
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

const EditBasicModal = ({rows,setDepenses,user,open,handleClose,row}) => {

  const [formData, setFormData] = useState({
    "date_de_depense":"",
    "somme":0,
    "intitule":"",
    "syndicate_id":user.id,
    "type_de_paiement":"cheque"
  })

  const handleOnChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    axios.put('/depense/update',{...formData,id:row.id},config).then(res=>{
      console.log(res);
      setDepenses(rows.map(r=>{
        if(r.id===row.id){
          return res.data.depense
        }
        else 
          return r
      }))
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modifier une dépense :
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
                    <InputLabel sx={{ fontSize:"14px"}}>Type de paiement</InputLabel>
                    <Select 
                        name='proprietaire_cin'
                        id='proprietaire_id'
                        options={[{value:"cheque",label:"cheque"},{value:"liquide",label:"liquide"}]}
                        isMulti="false"


                    />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Date de l'operation</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        fullWidth
                        size="small"
                        id="date"
                        name="date_de_depense"
                        type="date"
                        defaultValue={row.date_de_depense}
                        placeholder="date"
                        onChange={e=>handleOnChange(e)}
                        value={formData.date_de_depense}
                        required
                    /> 
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Somme</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="montant"
                        name="somme"
                        type="number"
                        defaultValue={row.somme}
                        placeholder="Somme"
                        onChange={e=>handleOnChange(e)}
                        value={formData.somme}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>Intitulé</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        multiline
                        size="small"
                        fullWidth
                        id="intitule"
                        name="intitule"
                        type="text"
                        defaultValue={row.intitule}
                        placeholder="Intitulé"
                        onChange={e=>handleOnChange(e)}
                        value={formData.intitule}
                        required
                    />
                </Grid>
                <Box>
                    <Button 
                        type="submit"
                        variant='contained' 
                        color='error' 
                        sx={{height:'30px',marginLeft:2,mt:2}}
                    >Update</Button>
                </Box>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}

const CRUD = ({auth:{user,loading:userLoading}}) => {

  const [rows, setDepense] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    if(user){
      axios.get('/depense').then(res=> {
        setDepense(res.data.depenses)
        setLoading(false)
      }).catch(err=>{
        console.log(err);
      })
      if(user.role==='syndicate'){
        setColumns([
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'date_de_depense', headerName: 'Date d\'oprartion', width: 220 },
          {
              field: 'intitule',
              headerName: 'Intitulé',
              sortable: false,
              width: 300,
          },{
              field: 'somme',
              headerName: 'Somme',
              type: 'number',
              width: 130,
          },
          { field: 'type_de_paiement', headerName: 'Type de paiement', width: 150 },
          
          {
            field: 'action',
            headerName: 'Action',
            width: 100,
            type: 'actions',
            getActions: (params)=>[
              <GridActionsCellItem icon={<DeleteIcon sx={{color:"red",fontSize:"20px"}}/>} onClick={()=>{handleDelete(params.row.id);}} />,
              <GridActionsCellItem icon={<EditIcon sx={{color:"yellow",fontSize:"20px"}}/>} onClick={()=>{handleOpenEdit(params.row)}} />
              ]
          },
      ])
      }
      else{
        setColumns([
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'date_de_depense', headerName: 'Date d\'oprartion', width: 220 },
          {
              field: 'intitule',
              headerName: 'Intitulé',
              sortable: false,
              width: 300,
          },{
              field: 'somme',
              headerName: 'Somme',
              type: 'number',
              width: 130,
          },
          { field: 'type_de_paiement', headerName: 'Type de paiement', width: 150 },
        
      ])
      }
    }
    },[user])

    //table columns structure
    const [columns,setColumns] = useState([])


    // the way rows should look like after getting them with a useEffect i guess


    const handleDelete = async (numero) =>{
      await axios.post('/depense/delete/',{id:numero},config)
      setDepense(rows.filter(r=>r.id!==numero))
    }


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

    return (!loading && !userLoading &&
      <div>
        {user!==null && user.role==='syndicate' &&<Button sx={{ fontSize : "14px", backgroundColor:"#E2E2E2", color:"black", fontWeight:"600", boxShadow:"2px 2px 5px"}} variant="contained" onClick={handleOpenAdd}> Add </Button>
      }
        <div className="crud-table-container">
            {user!==null && user.role==='syndicate' && <><AddBasicModal rows={rows} user={user} setDepenses={setDepense} open={openAdd} handleClose={handleCloseAdd} />
            <EditBasicModal rows={rows} user={user} setDepenses={setDepense} open={openEdit} handleClose={handleCloseEdit} row={row} />
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


export default connect(mapStateToProps)(CRUD);