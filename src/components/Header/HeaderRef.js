import { Check } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { userSelector } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import userSlice from '../../redux/userSlice';
import noticeSlice from '../../redux/noticeSlice';
const MainContainer = styled.div`
  color: var(--text-primary);
  border-radius: 0.75rem;
  padding: 4px 0;
`;
const SecondaryContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 2px 24px;
`;
const RightGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const IconContainer = styled.div`
  > * {
    margin-left: 24px !important;
  }
  > * > button {
    color: var(--text-primary) !important;
  }
`;
const NoticeContainer = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  right: 50%;
  z-index: 100;
  border-radius: 0.75rem;
  ::before {
    content: '';
    position: absolute;
    width: 0px;
    left: 100%;
    top: 0;
    border: 15px solid transparent;
    border-top: 0;
    border-bottom: 15px solid #fff;
    transform: translate(-100%, calc(-100% + 1px));
  }
`;
const CoverLink = styled.div``;
function Notification(props) {
  const { setOpenNotifications } = props;
  const notificationElement = useRef();
  useEffect(() => {
    const handleCloseNotification = (e) => {
      if (!notificationElement.current.contains(e.target)) {
        setOpenNotifications(false);
      }
    };

    window.addEventListener('click', handleCloseNotification);
    return () => window.removeEventListener('click', handleCloseNotification);
  }, []);
  return (
    <NoticeContainer className='shadow-max' ref={notificationElement}>
      <Paper sx={{ width: 350 }}>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </NoticeContainer>
  );
}
function HeaderRef(props) {
  const {
    duplicate,
    duplicated,
    isBase,
    headerElement,
    position,
    setOpenCartOverView,
    openNotifications,
    setOpenNotifications,
  } = props;
  const [openSnackBar, setOpenSnackBar] = useState({
    display: false,
    content: '',
    severity: 'info',
  });
  const user = useSelector(userSelector);
  const userInfo = user.current;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userSlice.actions.logout());
    dispatch(
      noticeSlice.actions.show({
        title: 'Đăng xuất thành công',
        type: 'success',
      })
    );
  };
  return (
    <MainContainer
      style={
        duplicate
          ? {
              position: 'fixed',
              top: position.top + 'px',
              right: position.top.right + 'px',
              width: position.width ? position.width + 'px' : '100%',
              backgroundColor: 'var(--bg-white-transparent)',
              zIndex: 100,
              border: '2px solid var(--bg-primary)',
            }
          : {}
      }
      className={isBase ? (duplicated ? 'disapear' : '') : 'shadow-short'}
    >
      <SecondaryContainer ref={headerElement}>
        <div>
          <Breadcrumbs aria-label='breadcrumb'>
            <CoverLink>
              <Link to='/'>
                <HomeIcon fontSize='small' />
              </Link>
            </CoverLink>
            <Typography color='text.primary'>Trang chủ</Typography>
          </Breadcrumbs>
          <PageName>Trang chủ</PageName>
        </div>
        <RightGroup>
          <TextField
            id='outlined-basic'
            label='Tìm kiếm'
            variant='outlined'
            size='small'
          />

          <IconContainer>
            {userInfo ? (
              <>
                <Badge
                  badgeContent={4}
                  color='primary'
                  variant='dot'
                  style={{ position: 'relative' }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <Button
                    startIcon={<NotificationsActiveIcon />}
                    sx={{ p: 0.3, textTransform: 'none' }}
                    onClick={() => setOpenNotifications(true)}
                  >
                    Thông báo
                  </Button>
                  {openNotifications &&
                    ((isBase && !duplicated) || !isBase) && (
                      <Notification
                        setOpenNotifications={setOpenNotifications}
                      />
                    )}
                </Badge>
                <Badge
                  badgeContent={4}
                  color='primary'
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <Button
                    startIcon={<ShoppingCartIcon />}
                    sx={{ p: 0.3, textTransform: 'none' }}
                    onMouseOver={() => setOpenCartOverView(true)}
                  >
                    Giỏ hàng
                  </Button>
                </Badge>
                <IconButton aria-label='Avatar'>
                  <Avatar
                    sx={{ bgcolor: 'success' }}
                    alt={userInfo.displayName}
                    src={process.env.REACT_APP_API_URL + userInfo.photoUrl}
                    style={{ border: '2px solid var(--bg-primary)' }}
                  />
                </IconButton>
                <Button
                  sx={{ textTransform: 'none' }}
                  style={{ marginLeft: '0!important' }}
                  onClick={handleLogout}
                >
                  Đăng xuất
                </Button>
              </>
            ) : (
              <>
                <Link to='/register'>
                  <Button
                    startIcon={<AppRegistrationIcon />}
                    sx={{ p: 0.3, textTransform: 'none' }}
                  >
                    Đăng kí
                  </Button>
                </Link>
                <Link to='/login'>
                  <Button
                    startIcon={<LoginIcon />}
                    sx={{ p: 0.3, textTransform: 'none' }}
                  >
                    Đăng nhập
                  </Button>
                </Link>
              </>
            )}
          </IconContainer>
        </RightGroup>
      </SecondaryContainer>
    </MainContainer>
  );
}

export default HeaderRef;