import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';
import './index.css';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const CartContainer = styled.div`
  width: 8rem;
  background-color: white;
  position: fixed;
  top: 0;
  border-top: 1px solid var(--text-primary);
  border-left: 1px solid var(--text-primary);
  right: 0;
  height: 100vh;
  max-height: 100vh;
  z-index: 1000;
`;
const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  ::before {
    content: '';
    position: absolute;
    display: block;
    width: 0px;
    left: 5px;
    top: 44px;
    border: 15px solid transparent;
    border-left: 0;
    border-right: 15px solid var(--text-primary);
    transform: translate(calc(-100% - 5px), -50%);
  }
`;
const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CartBody = styled.div`
  flex: 1;
  padding: 12px;
  padding-top: 0;
  overflow: auto;
  height: calc(100vh - 111.5px);
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
    border-radius: 0.75rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--text-primary);
  }
`;
const SubTotal = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
const SubTotalNumber = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--bg-primary);
`;
const ContainerFlex = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const ContainerRow = styled(ContainerFlex)`
  justify-content: space-between;
  width: 100%;
`;
const CartItemContainer = styled.div`
  margin-bottom: 1rem;
`;
const SelectBox = styled.select`
  font-size: 13px;
  outline: 1px solid var(--bg-primary);
  border-radius: 0.75rem;
  width: 48px;
  * {
    font-size: 13px;
  }
`;
function CartItem() {
  const [value, setValue] = React.useState(1);

  return (
    <CartItemContainer>
      <Card>
        <Link to='/'>
          <CardMedia
            component='img'
            image='https://cf.shopee.vn/file/d3de9ac75596a32971882992bfd036ef'
            alt='green iguana'
          />
          <CardContent sx={{ p: 1 }}>
            <Typography
              gutterBottom
              variant='h6'
              component='div'
              sx={{
                textAlign: 'center',
                fontSize: 12,
                color: 'primary.main',
                p: 0,
                m: 0,
                border: 'none',
              }}
            >
              300.000đ
            </Typography>
          </CardContent>
        </Link>
        <CardActions sx={{ pt: 0 }}>
          <ContainerRow>
            <ContainerFlex>
              {/* <CustomSelect value={value} onChange={setValue}>
                <StyledOption value={0}>{'0 (delete)'}</StyledOption>
                <StyledOption value={1}>1</StyledOption>
                <StyledOption value={2}>2</StyledOption>
                <StyledOption value={3}>3</StyledOption>
                <StyledOption value={3}>4</StyledOption>
                <StyledOption value={3}>5</StyledOption>
                <StyledOption value={3}>6</StyledOption>
                <StyledOption value={3}>7</StyledOption>
              </CustomSelect> */}
              <SelectBox>
                <option value='0'>0 (delete)</option>
                <option value='1' selected>
                  1
                </option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </SelectBox>
            </ContainerFlex>
            <ContainerFlex>
              <IconButton aria-label='love' size='small'>
                <DeleteOutlineIcon />
              </IconButton>
            </ContainerFlex>
          </ContainerRow>
        </CardActions>
      </Card>
    </CartItemContainer>
  );
}
function CartOverview(props) {
  const { setOpenCartOverView } = props;
  const cartElement = useRef();
  useEffect(() => {
    const handleClose = (e) => {
      if (!cartElement.current.contains(e.target)) {
        cartElement.current.classList.add('slide-out');
        setTimeout(() => {
          setOpenCartOverView(false);
        }, 490);
      }
    };
    window.addEventListener('click', handleClose);
    return () => window.removeEventListener('click', handleClose);
  }, []);
  return (
    <CartContainer className='shadow-short cart' ref={cartElement}>
      <CartContent>
        <CartHeader>
          <SubTotal>Tổng tiền</SubTotal>
          <SubTotalNumber>127.000đ</SubTotalNumber>
          <Button
            variant='contained'
            color='primary'
            size='small'
            fullWidth
            disableElevation
            sx={{
              my: '12px',
              borderRadius: '0.75rem',
              fontSize: '12px',
              p: '2px',
              textTransform: 'none',
            }}
          >
            Thanh toán
          </Button>
          <Divider sx={{ width: '100%' }} />
        </CartHeader>
      </CartContent>
      <CartBody>
        <CartItem />
        <CartItem />
        <CartItem />
      </CartBody>
    </CartContainer>
  );
}

export default CartOverview;
