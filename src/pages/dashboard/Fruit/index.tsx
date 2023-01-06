import DashboardLayout from '../../../templates/DashboardLayout'
import './style.scss'

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
  color: any,
  colorSwatches: any
) {
  return { name, varieties, species, origin, color, colorSwatches };
}

const rows = [
  createData('Avocado pits', 'Persea americana', ['Hass,', ' ', 'Fuerte,', ' ', 'Bacon'], ['Mexican Avocado,', ' ', 'West Indian Avocado'], 'yellow',  'View color-swatches'),
  createData('Berries', ['blackberries,', ' ', 'blueberries,', ' ', 'strawberries,', ' ', 'raspberries'],['Rubus fruticosus,', ' ', 'Vaccinium spp.,', ' ', 'Fragaria spp.'],   ['Europe', ' ', 'Asia,', ' ', 'North America' ], 'Red',  'View color-swatches'),
  createData('Banana', ['Cavendish,', ' ', 'Plantain,', ' ', 'Red Dacca'], 'Musa spp.', 'Southeast Asia', 'Brown dye',  'View color-swatches'),
  createData('Pomegranates', ['Red', ' ', 'White Pomegranate'], 'Punica granatum', 'Iran to the Himalayas in northern India', 'Red dye',  'View color-swatches'),  
];


const Fruit = () => {
  const navigate = useNavigate()
  return (
    <DashboardLayout>
      <div className='table-container'>
   <TableContainer className='wraper' component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Varieties</StyledTableCell>
            <StyledTableCell align="center">Species</StyledTableCell>
            <StyledTableCell align="center">Origin</StyledTableCell>
            <StyledTableCell align="center">Color</StyledTableCell>
            <StyledTableCell align="center">Color-swatches</StyledTableCell>
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
              <StyledTableCell align="center">{row.origin}</StyledTableCell>
              <StyledTableCell align="center">{row.color}</StyledTableCell>
              <StyledTableCell align="center" className='cursor-pointer' onClick={() =>navigate(`/color-swatch?item=${row.name}`)}>{row.colorSwatches}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </DashboardLayout>
  )
}

export default Fruit