import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import {InputLabel} from '@mui/material';
import {TextField} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { GridActionsCellItem } from '@mui/x-data-grid';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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

const statusOptions =[
  {value:"libre",label:"Libre"},
  {value:"en_location",label:"En Location"},
  {value:"habite",label:"Habite"},
  {value:"divers_ou_autre",label:"Divers ou autre"},
]

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const AddBasicModal = ({open,handleClose,user,setProprietes,rows}) => {
  
  const [formData, setFormData] = useState({
    "proprietaire_cin": "",
		"phone": "",
		"email": "",
		"titre": "",
		"cotisation": 0,
		"status": ""
  })

  const handleOnChnage = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault(); 

    axios.post('/proprietes',formData,config).then(res=>{
      setProprietes([...rows,res.data.propriete])
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
            Ajouter une proprieté :
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
                    <InputLabel sx={{ fontSize:"14px"}}>Propriétaire</InputLabel>
                    <Select 
                        name='proprietaire_cin'
                        id='proprietaire_id'
                        options={user.users.map(u=>({value:u.cin,label:u.cin}))} 
                        components={makeAnimated()}
                        isMulti="false"
                        onChange={(e)=>{console.log(e);setFormData({...formData,proprietaire_cin:e[0].value})}}
                        value={formData.proprietaire_cin}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>Titre</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="titre"
                        name="titre"
                        type="text"
                        placeholder="Titre"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.titre}
                        required
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel sx={{ fontSize:"14px"}}>Phone</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.phone}
                        required
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel sx={{ fontSize:"14px"}}>Email</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.email}
                        required
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel sx={{ fontSize:"14px"}}>Cotisation</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="cotisation"
                        name="cotisation"
                        type="number"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.cotisation}
                        placeholder="Cotisation"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>Status</InputLabel>
                    <Select 
                        name='status'
                        id='status'
                        options={statusOptions} 
                        components={makeAnimated()}
                        onChange={(e)=>{setFormData({...formData,status:e[0].value})}}
                        isMulti="false"
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

const EditBasicModal = ({open,handleClose,row,user,setProprietes,rows}) => {

  const [formData, setFormData] = useState({
    "proprietaire_cin": row.cin,
		"phone": row.phone,
		"email": row.email,
		"titre":row.titre,
		"cotisation": row.cotisation,
		"status": row.status
  })


  const handleOnChnage = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    axios.put('/proprietes/'+row.id,formData,config).then(res=>{
      console.log(res.data);
      setProprietes(rows.map(r=>{
        if(r.id===row.id){
          return res.data.propriete
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
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Modifier une proprieté :
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
                    <InputLabel sx={{ fontSize:"14px"}}>Propriétaire</InputLabel>
                    <Select 
                        name='proprietaire_cin'
                        id='proprietaire_id'
                        options={user.users.map(u=>({value:u.cin,label:u.cin}))}
                        components={makeAnimated()}
                        defaultValue={row.cin}
                        isMulti="false"
                        onChange={(e)=>{setFormData({...formData,proprietaire_cin:e[0].value})}}
                        value={formData.proprietaire_cin}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>Titre</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="titre"
                        name="titre"
                        type="text"
                        placeholder="Titre"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.titre}
                        defaultValue={row.titre}

                        required
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel sx={{ fontSize:"14px"}}>Phone</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        onChange={e=>handleOnChnage(e)}
                        value={formData.phone}
                        defaultValue={row.phone}

                        required
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel sx={{ fontSize:"14px"}}>Email</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        defaultValue={row.email}

                        onChange={e=>handleOnChnage(e)}
                        value={formData.email}
                        required
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel sx={{ fontSize:"14px"}}>Cotisation</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="cotisation"
                        name="cotisation"
                        type="number"
                        placeholder="Cotisation"
                        defaultValue={row.cotisation}

                        onChange={e=>handleOnChnage(e)}
                        value={formData.cotisation}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ fontSize:"14px"}}>Status</InputLabel>
                    <Select 
                        name='status'
                        id='status'
                        options={statusOptions} 
                        components={makeAnimated()}
                        isMulti="false"
                        defaultValue={row.status}

                        onChange={(e)=>{console.log(e);setFormData({...formData,status:e[0].value})}}
                        value={formData.status}
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


const ProprietesCRUD = ({auth:{user,loading:userLoading}}) => {

    const [rows, setProprietes] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
      if(user)
        axios.get('/proprietes').then(res=> {
          setProprietes(res.data.proprietes.map(properte=>{
            console.log();
            return {
            ...properte,
            cin:user.users.find(u=>u.id===properte.proprietaire_id).cin
          }}))
          setLoading(false)
        }).catch(err=>{
          console.log(err);
        })
    },[user])

    //table columns structure
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'cin', headerName: 'proprietaire CIN', width: 200 },
        { field: 'titre', headerName: 'Titre', width: 100 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        {
            field: 'status',
            headerName: 'Status',
            sortable: false,
            width: 100,
        },{
            field: 'cotisation',
            headerName: 'Cotisation',
            type: 'number',
            width: 100,
        },{
          field: 'action',
          headerName: 'Action',
          width: 100,
          type: 'actions',
          getActions: (params)=>[
            <GridActionsCellItem icon={<EditIcon sx={{color:"yellow",fontSize:"20px"}}/>} onClick={()=>{handleOpenEdit(params.row)}} />
            ]
        },
    ];

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
          {
            user!==null && user.role==='syndicate' &&
            (<><AddBasicModal rows={rows} setProprietes={setProprietes} user={user} open={openAdd} handleClose={handleCloseAdd} />
            <EditBasicModal rows={rows} setProprietes={setProprietes}  user={user} open={openEdit} handleClose={handleCloseEdit} row={row} /></>)
          }
            <DataGrid
                user={user}
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

export default connect(mapStateToProps)(ProprietesCRUD)