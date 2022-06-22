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

const AddBasicModal = ({open,handleClose}) => {
  const handleSubmit = (e) =>{
    e.preventDefault(); 
    //contains inputs and some garbage
    console.log(e.target)
    //Axios bs to be added

    //this shit needs syndicat id too i guess from redux user id
  }

  //select options
  const options =[
    {value:"personne",label:"p"},
    {value:"vroom vromm",label:"car"}
  ]

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
                        name='proprietaire_id'
                        id='proprietaire_id'
                        options={options} 
                        components={makeAnimated()}
                        isMulti="false"
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

const EditBasicModal = ({open,handleClose,row}) => {

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    //again contains data and garbage
    console.log(e)
    //axios shit to be added 
  }

  //same select options again yes, factorisation is not a known concept for this project
  const options =[
    {value:"personne",label:"p"},
    {value:"vroom vromm",label:"car"}
  ]

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
                        name='proprietaire_id'
                        id='proprietaire_id'
                        options={options} 
                        components={makeAnimated()}
                        isMulti="false"
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
                        defaultValue={row.titre}
                        placeholder="Titre"
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
                        defaultValue={row.phone}
                        placeholder="Phone"
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
                        defaultValue={row.email}
                        placeholder="Email"
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
                        defaultValue={row.cotisation}
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
                        isMulti="false"
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


export default function ProprietesCRUD() {

    //table columns structure
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'proprietaire_id', headerName: 'ID Propriétaire', width: 120 },
        { field: 'syndicate_id', headerName: 'ID Syndicat', width: 100 },
        { field: 'titre', headerName: 'Titre', width: 100 },
        { field: 'phone', headerName: 'Phone', width: 120 },
        { field: 'email', headerName: 'Email', width: 150 },
        {
            field: 'status',
            headerName: 'Status',
            sortable: false,
            width: 60,
        },{
            field: 'cotisation',
            headerName: 'Cotisation',
            type: 'number',
            width: 100,
        },{
          field: 'images',
          headerName: 'Images',
          type: 'image',
          width: 100,
        },{
          field: 'action',
          headerName: 'Action',
          width: 100,
          type: 'actions',
          getActions: (params)=>[
            <GridActionsCellItem icon={<DeleteIcon sx={{color:"red",fontSize:"20px"}}/>} onClick={()=>{handleDelete(params.row.id);}} />,
            <GridActionsCellItem icon={<EditIcon sx={{color:"yellow",fontSize:"20px"}}/>} onClick={()=>{handleOpenEdit(params.row)}} />
            ]
        },
    ];


    // the way rows should look like after getting them with a useEffect i guess
    const rows = [
      { id: 1, titre: 'idk', date_operation: '20-11-2000', montant: 35, intitule:'Intitu'},
    ];

    const handleDelete = (numero) =>{
      console.log(numero)
      //axios bs to added
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

    return (
      <div>
        <Button sx={{ fontSize : "14px", backgroundColor:"#E2E2E2", color:"black", fontWeight:"600", boxShadow:"2px 2px 5px"}} variant="contained" onClick={handleOpenAdd}> Add </Button>
      
        <div className="crud-table-container">
            <AddBasicModal open={openAdd} handleClose={handleCloseAdd} />
            <EditBasicModal open={openEdit} handleClose={handleCloseEdit} row={row} />
            <DataGrid
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