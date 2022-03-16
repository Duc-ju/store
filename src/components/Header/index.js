import HeaderRef from './HeaderRef';
import { useState, useEffect, useRef } from 'react';
import CartOverview from './CartOverview';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../redux/selectors';

function Header() {
  const [duplicate, setDuplicate] = useState(false);
  const [position, setPosition] = useState({
    right: 24,
    width: null,
    top: 12,
  });
  const [openNotifications, setOpenNotifications] = useState(false);
  const headerElement = useRef();
  const cart = useSelector(cartSelector);
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
        openNotifications={openNotifications}
        setOpenNotifications={setOpenNotifications}
      />
      {!duplicate ? null : (
        <>
          <HeaderRef
            duplicate={duplicate}
            position={position}
            openNotifications={openNotifications}
            setOpenNotifications={setOpenNotifications}
          />
        </>
      )}
      {cart.isShown && <CartOverview />}
    </>
  );
}

export default Header;
