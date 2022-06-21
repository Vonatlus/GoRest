import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { GoRestContext } from '../../GoRestContext';
import { User } from '../../types';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent
} from '@mui/material';

export function Users() {
  const {
    filtredUsers,
    setUser,
    gender,
    setGender,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage
  } = useContext(GoRestContext);

  const navigate = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const onEdit = (user: User) => {
    navigate(`/edit/${user.id}`);
    setUser(user);
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>
                <FormControl sx={{ width: 100 }} size="small">
                  <InputLabel id="genderSelectLabel">Gender</InputLabel>
                  <Select
                    labelId="genderSelectLabel"
                    id="gendersSelect"
                    value={gender}
                    label="Gender"
                    onChange={handleChange}
                  >
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='male'>male</MenuItem>
                    <MenuItem value='female'>female</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(user => (
                <TableRow
                  hover
                  tabIndex={-1}
                  key={user.id}
                  onClick={() => onEdit(user)}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filtredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
