import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from "@mui/material";

const TableWithPagination = ({ data }: { data: any[] }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell>Total Cases</TableCell>
            <TableCell>Active Cases</TableCell>
            <TableCell>Recovered</TableCell>
            <TableCell>Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.active}</TableCell>
              <TableCell>{row.recovered}</TableCell>
              <TableCell>{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableWithPagination;
