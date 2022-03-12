import { Check } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
import CartOverview from './CartOverview';
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
              {openNotifications && ((isBase && !duplicated) || !isBase) && (
                <Notification setOpenNotifications={setOpenNotifications} />
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
                onClick={() => setOpenCartOverView(true)}
              >
                Giỏ hàng
              </Button>
            </Badge>
            <IconButton aria-label='Avatar'>
              <Avatar
                sx={{ bgcolor: 'success' }}
                alt='Remy Sharp'
                src='https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/274563853_3111605919106478_4636800484289432516_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=qG_cbCMPe2YAX_ZzpYC&_nc_ht=scontent.fhan15-1.fna&oh=00_AT-Zf0hobxnwjLmQpJQq4g9NIF80Oyv0PgoarFxoWlXNCA&oe=622DBE15'
              />
            </IconButton>
          </IconContainer>
        </RightGroup>
      </SecondaryContainer>
    </MainContainer>
  );
}
function Header() {
  const [openCartOverView, setOpenCartOverView] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [position, setPosition] = useState({
    right: 24,
    width: null,
    top: 12,
  });
  const [openNotifications, setOpenNotifications] = useState(false);
  const headerElement = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setDuplicate(true);
      else setDuplicate(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPosition({
        top: headerElement.current.offsetTop,
        width: headerElement.current.offsetWidth,
        right: headerElement.current.getBoundingClientRect().y,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    setPosition({
      top: headerElement.current.offsetTop,
      width: headerElement.current.offsetWidth,
      right: headerElement.current.getBoundingClientRect().y,
    });
  }, []);
  return (
    <>
      <HeaderRef
        isBase
        duplicated={duplicate}
        headerElement={headerElement}
        setOpenCartOverView={setOpenCartOverView}
        openNotifications={openNotifications}
        setOpenNotifications={setOpenNotifications}
      />
      {!duplicate ? null : (
        <>
          <HeaderRef
            duplicate={duplicate}
            position={position}
            setOpenCartOverView={setOpenCartOverView}
            openNotifications={openNotifications}
            setOpenNotifications={setOpenNotifications}
          />
        </>
      )}
      {openCartOverView && (
        <CartOverview setOpenCartOverView={setOpenCartOverView} />
      )}
    </>
  );
}

export default Header;
