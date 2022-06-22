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

const AddBasicModal = ({open,handleClose}) => {

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    //contains inputs and some garbage
    console.log(e.target)
    //Axios bs to be added
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
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Date de l'operation</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        fullWidth
                        size="small"
                        id="date"
                        name="date"
                        type="date"
                        placeholder="date"
                        required
                    /> 
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Montant</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="montant"
                        name="montant"
                        type="number"
                        placeholder="Montant"
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

const EditBasicModal = ({open,handleClose,row}) => {

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    //again contains data and garbage
    console.log(e)
    //axios shit to be added 
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
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Date de l'operation</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        fullWidth
                        size="small"
                        id="date"
                        name="date"
                        type="date"
                        defaultValue={row.date_operation}
                        placeholder="date"
                        required
                    /> 
                </Grid>
                <Grid item xs={6}>
                    <InputLabel sx={{ fontSize:"14px"}}>Montant</InputLabel>
                    <TextField
                        sx={{ fontSize:"14px"}}
                        size="small"
                        fullWidth
                        id="montant"
                        name="montant"
                        type="number"
                        defaultValue={row.montant}
                        placeholder="Montant"
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


export default function CRUD() {

    //table columns structure
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'id_propriete', headerName: 'id propriete', width: 180 },
        { field: 'date_operation', headerName: 'Date d\'oprartion', width: 220 },
        {
            field: 'intitule',
            headerName: 'Intitulé',
            sortable: false,
            width: 300,
        },{
            field: 'montant',
            headerName: 'Montant',
            type: 'number',
            width: 130,
        },{
          field: 'action',
          headerName: 'Action',
          width: 100,
          type: 'actions',
          getActions: (params)=>[
            <GridActionsCellItem icon={<DeleteIcon sx={{color:"red",fontSize:"20px"}}/>} onClick={()=>{handleDelete(params.row.id_propriete);}} />,
            <GridActionsCellItem icon={<EditIcon sx={{color:"yellow",fontSize:"20px"}}/>} onClick={()=>{handleOpenEdit(params.row)}} />
            ]
        },
    ];


    // the way rows should look like after getting them with a useEffect i guess
    const rows = [
      { id: 1, id_propriete: '9798798', date_operation: '20-11-2000', montant: 35, intitule:'Intitu'},
      { id: 2, id_propriete: '7897984', date_operation: '21-11-2000', montant: 35, intitule:'Intitu'},
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