import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GoRestContext } from '../../GoRestContext';

import {
  Paper,
  Typography,
  Box,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  TextField,
  Stack,
  Button
} from '@mui/material/';

export function Edit() {
  const { user, users, setUsers } = useContext(GoRestContext);
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [gender, setGender] = useState(user ? user.gender : '');
  const [status, setStatus] = useState(user ? user.status : '');

  const navigate = useNavigate();
  const { id } = useParams();

  const cancel = () => {
    navigate('/users');
  }

  const confirm = () => {
    if (user) {
      const newUser = {
        id: user.id,
        name,
        email,
        status,
        gender
      }

      setUsers(users.map(u => (
        (u.id === user.id) ? newUser : u
      )));
      
      navigate('/users');
    }
  }

  return (
    <Box sx={{ width: '30vw' }} my={10} mx={'auto'}>
      <Paper elevation={10} sx={{ padding: 3 }}>
        <Typography variant='h4' align='center' sx={{ mb: 2 }}>Edit menu №{id}</Typography>
        <FormControl fullWidth>
          <TextField
            sx={{ mb: 2 }}
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ mb: 2 }}
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Box>
              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="gender"
                name="controlled-radio-buttons-group"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </Box>

            <Box>
              <FormLabel id="status">Status</FormLabel>
              <RadioGroup
                aria-labelledby="status"
                name="controlled-radio-buttons-group"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <FormControlLabel value="active" control={<Radio />} label="Active" />
                <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
              </RadioGroup>
            </Box>
          </Box>

          <Stack
            spacing={2}
            direction="row"
            sx={{ dispay: 'flex', justifyContent: 'space-between' }}
          >
            <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>
            <Button variant="contained" color='success' onClick={confirm}>Confirm</Button>
          </Stack>
        </FormControl>
      </Paper>
    </Box>

  );
}
