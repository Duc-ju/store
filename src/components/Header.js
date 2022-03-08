import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import styled from 'styled-components';
const MainContainer = styled.div`
  display: flex;
  align-item: center;
  color: white;
  justify-content: space-between;
  background-color: #1976d2;
  padding: 0 64px;
`;
function Header() {
  return (
    <MainContainer>
      <div>
        <IconButton aria-label='fingerprint' sx={{ color: 'white' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label='fingerprint' sx={{ color: 'white' }}>
          <InstagramIcon />
        </IconButton>
      </div>
      <div>Thông tin cá nhân</div>
    </MainContainer>
  );
}

export default Header;
