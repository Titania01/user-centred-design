import './style.scss'
import DashboardLayout from '../../../templates/DashboardLayout'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(
    name: string,
    varieties: any,
    species: any,
    origin: any,
   
  ) {
    return { name, varieties, species, origin, };
  }
  
  const rows = [
    createData('Avocado-pits', 'Plants', 'Immersion Dyeing', 'View process'),
    createData('Carrots', 'Vegetables','Tie-Dyeing',   'View process'),
    createData('Banana', 'Fruit', 'Printing', 'View process'),
    createData('Pomegranate', 'Plants', 'Batik', 'View process'),
    createData('Berries', 'Fruit', 'Shibori', 'View process')
]

const DyeingTechnique = () => {
    const navigate = useNavigate()
  return (
    <DashboardLayout>
        <>
           <div className='table-container'>
   <TableContainer className='wraper' component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Sources</StyledTableCell>
            <StyledTableCell align="center">Techniques</StyledTableCell>
            <StyledTableCell align="center">Process</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.varieties}</StyledTableCell>
              <StyledTableCell align="center">{row.species}</StyledTableCell>
              <StyledTableCell className='cursor-pointer' align="center" onClick={()=>navigate(`/dye?item=${row.name}`)}>{row.origin}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
      
        </>
    </DashboardLayout>
  )
}

export default DyeingTechnique