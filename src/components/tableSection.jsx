import React from 'react';
import prices from '../locale/prices_list.json'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {MyTable} from "../styledComponents/ServicesInfo-style";
import PersonInfo from "./personInfo";
import Header from "./Header";
function TableSection(props) {
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
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    console.log(prices)
    return (
       <>
           <PersonInfo/>
           <Header handle={props.handleLanguage} color={'white'}/>
           <MyTable>
               <TableContainer component={Paper}>
                   <Table sx={{ minWidth: 650 }} aria-label="simple table">
                       <TableHead>
                           <TableRow>
                               <StyledTableCell>VAN</StyledTableCell>
                               <StyledTableCell align="right">NAAR</StyledTableCell>
                               <StyledTableCell align="right">max 4 pasager & 2 grote koffers</StyledTableCell>
                               <StyledTableCell align="right">max 4 pasager & 3 grote koffers</StyledTableCell>
                               <StyledTableCell align="right">max 8 pasager & 6 grote koffers</StyledTableCell>
                           </TableRow>
                       </TableHead>
                       <TableBody>
                           {prices.map((row) => (
                               <StyledTableRow
                                   key={row.number}
                                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                               >
                                   <StyledTableCell component="th" scope="row">{row.from}</StyledTableCell>
                                   <StyledTableCell align="right">{row.to}</StyledTableCell>
                                   <StyledTableCell align="right">{row.max_4_passenger_and_2_large_suitcases}</StyledTableCell>
                                   <StyledTableCell align="right">{row.max_4_passenger_and_3_large_suitcases}</StyledTableCell>
                                   <StyledTableCell align="right">{row.max_8_passenger_and_6_large_suitcases}</StyledTableCell>
                               </StyledTableRow>
                           ))}
                       </TableBody>
                   </Table>
               </TableContainer>
               <p>{props.t('tablePage')}</p>
           </MyTable>
       </>
    );
}

export default TableSection;