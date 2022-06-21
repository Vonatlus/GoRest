import { Box, Typography, Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage: FC = () => {
  const navigate = useNavigate();

  const getBack = () => {
    navigate('/');
  }

  return (
    <Box
      sx={{ 
        width: 'max-content', 
        mx: 'auto', 
        my: '25vh', 
        p: '10px', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography sx={{mb: '10px'}} variant="h2">404</Typography>
      <Typography sx={{mb: '10px'}}>Page not found</Typography>
      <Button onClick={getBack} variant="text">Back</Button>
    </Box>
  )
}