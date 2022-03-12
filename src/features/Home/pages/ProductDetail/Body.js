import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import { MainContainer } from '../../components/Container';
import Chip from '@mui/material/Chip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import {
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Rating,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Shortcut from '../../components/Shortcut';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
  CustomSelect,
  StyledOption,
} from '../../../../components/CustomSelect';
import HeaderTitle from '../../components/HeaderTitle';
import Product from '../../components/Product';
const RoundedWhiteContainer = styled.div`
  border-radius: 0.75rem;
  background-color: white;
  padding: 8px;
  margin-top: 16px;
`;
const BaseContainer = styled.div`
  margin-top: 16px;
`;
const FlexBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  > * {
    padding: 16px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const HeaderContainer = styled.div`
  padding: 0 16px;
`;
const Header = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const RowFlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
const InfoContainer = styled.div`
  color: var(--bg-primary);
  margin-right: 4px;
`;
const CenterHeightContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const LinkItem = (props) => {
  const { link, content, style } = props;

  return (
    <Link to={link}>
      <InfoContainer style={style}>{content}</InfoContainer>
    </Link>
  );
};
const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  > *:not(:last-child) {
    margin-right: 32px;
  }
`;
const ContentHeader = styled.div`
  background-color: var(--bg-base);
  border-radius: 0.75rem;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
`;
const DetailContainer = styled.div`
  margin-top: 16px;
  padding-left: 8px;
  > *:not(:first-child) {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 16px;
  }
`;
const DesciprionContainer = styled.p`
  padding-left: 8px;
  white-space: pre-wrap;
  line-height: 2.2;
  font-size: 15px;
`;
const CoverLink = styled.div`
  margin-left: 4px;
`;
function Body(props) {
  return (
    <>
      <RoundedWhiteContainer>
        <Breadcrumbs
          aria-label='breadcrumb'
          separator='›'
          sx={{ fontSize: '14px' }}
        >
          <CoverLink>
            <Link to='/filter/book'>Sách</Link>
          </CoverLink>
          <Typography color='text.primary' sx={{ fontSize: '14px' }}>
            Tôi thấy hoa vàng trên cỏ xanh
          </Typography>
        </Breadcrumbs>
      </RoundedWhiteContainer>
      <RoundedWhiteContainer>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ImageList
              sx={{ width: '100%', height: 'auto', m: 0 }}
              cols={1}
              rowHeight='auto'
            >
              <ImageListItem
                sx={{ borderRadius: '0.75rem', overflow: 'hidden' }}
              >
                <img
                  src='https://cf.shopee.vn/file/8f7c06e8c90390c5f507ba0601be6fea'
                  srcSet=''
                  alt=''
                  loading='lazy'
                />
              </ImageListItem>
            </ImageList>
            <ImageList
              sx={{
                width: '100%',
                height: 'auto',
                my: 0.5,
              }}
              cols={5}
              rowHeight='auto'
            >
              <ImageListItem
                sx={{ borderRadius: '0.75rem', overflow: 'hidden' }}
              >
                <img
                  src='https://cf.shopee.vn/file/8f7c06e8c90390c5f507ba0601be6fea'
                  srcSet=''
                  alt=''
                  loading='lazy'
                />
              </ImageListItem>
              <ImageListItem
                sx={{ borderRadius: '0.75rem', overflow: 'hidden' }}
              >
                <img
                  src='https://cf.shopee.vn/file/8f7c06e8c90390c5f507ba0601be6fea'
                  srcSet=''
                  alt=''
                  loading='lazy'
                />
              </ImageListItem>
              <ImageListItem
                sx={{ borderRadius: '0.75rem', overflow: 'hidden' }}
              >
                <img
                  src='https://cf.shopee.vn/file/8f7c06e8c90390c5f507ba0601be6fea'
                  srcSet=''
                  alt=''
                  loading='lazy'
                />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item xs={6}>
            <HeaderContainer>
              <Header>
                [ Ảnh Thật ] ÁO HOODIE UNISEX Nam Nữ BASIC CAO CẤP
              </Header>
              <RowFlexContainer>
                <LinkItem link='/' content='4.6' />
                <Rating
                  name='rating'
                  size='small'
                  readOnly
                  defaultValue={3}
                  precision={1}
                />
                <Divider orientation='vertical' sx={{ mx: 1 }} flexItem />
                <LinkItem link='/' content='16.3k' /> đánh giá
                <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
                <LinkItem link='/' content='36.3k' /> đã bán
              </RowFlexContainer>
              <RowFlexContainer style={{ marginTop: '8px' }}>
                Thương hiệu:
                <LinkItem
                  link='/filter/brand'
                  content='Lavano'
                  style={{ marginLeft: '4px', fontWeight: 600 }}
                />
              </RowFlexContainer>
              <MainContainer
                style={{
                  backgroundColor: 'var(--bg-base)',
                  padding: '8px 16px',
                }}
              >
                <RowFlexContainer>
                  <div
                    style={{ textDecoration: 'line-through', fontSize: '14px' }}
                  >
                    500.000đ
                  </div>
                  <div
                    style={{
                      color: 'var(--bg-primary)',
                      fontSize: '24px',
                      fontWeight: 600,
                      marginLeft: '8px',
                    }}
                  >
                    450.000
                  </div>
                  <Chip
                    label='10% giảm'
                    variant='filled'
                    color='error'
                    size='small'
                    sx={{ ml: 1 }}
                    className='bg-red-linear'
                  />
                </RowFlexContainer>
              </MainContainer>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={2}>
                  <CenterHeightContainer>Màu sắc</CenterHeightContainer>
                </Grid>
                <Grid item xs={10}>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Button
                        variant='outlined'
                        size='small'
                        sx={{
                          textTransform: 'none',
                          border: '1px solid var(--text-primary)',
                          color: 'var(--text-primary)',
                          borderRadius: '0.75rem',
                        }}
                      >
                        Đỏ
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant='outlined'
                        size='small'
                        sx={{
                          textTransform: 'none',
                          border: '1px solid var(--text-primary)',
                          color: 'var(--text-primary)',
                          borderRadius: '0.75rem',
                        }}
                      >
                        Xanh
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant='outlined'
                        size='small'
                        sx={{
                          textTransform: 'none',
                          border: '1px solid var(--text-primary)',
                          color: 'var(--text-primary)',
                          borderRadius: '0.75rem',
                        }}
                      >
                        Cam
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant='outlined'
                        size='small'
                        sx={{
                          textTransform: 'none',
                          border: '1px solid var(--text-primary)',
                          color: 'var(--text-primary)',
                          borderRadius: '0.75rem',
                        }}
                      >
                        Vàng
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2}>
                  <CenterHeightContainer>Số lượng</CenterHeightContainer>
                </Grid>
                <Grid item xs={10}>
                  <CustomSelect value={1} sx={{ fontSize: '14px' }}>
                    <StyledOption value={1} sx={{ fontSize: '14px' }}>
                      1
                    </StyledOption>
                    <StyledOption value={2} sx={{ fontSize: '14px' }}>
                      2
                    </StyledOption>
                  </CustomSelect>
                </Grid>
              </Grid>
              <ButtonGroupContainer>
                <Button
                  variant='contained'
                  size='large'
                  sx={{ textTransform: 'none', borderRadius: '0.75rem' }}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  variant='outlined'
                  size='large'
                  sx={{ textTransform: 'none', borderRadius: '0.75rem' }}
                >
                  Mua ngay
                </Button>
              </ButtonGroupContainer>
            </HeaderContainer>
          </Grid>
          <Grid item xs={3}>
            <FlexBoxColumn>
              <Shortcut
                Icon={CompareArrowsIcon}
                title='Sản phẩm tương tự'
                className='bg-blue-linear'
                link='/filter/likely'
              />
              <Shortcut
                Icon={AddCircleIcon}
                title='Sản phẩm thường được mua kèm'
                className='bg-red-linear'
                link='/filter/likely'
              />
            </FlexBoxColumn>
          </Grid>
        </Grid>
      </RoundedWhiteContainer>

      <Grid container spacing={4}>
        <Grid item xs={9.5}>
          <RoundedWhiteContainer style={{ padding: '16px' }}>
            <ContentHeader>Chi tiết sản phẩm</ContentHeader>
            <DetailContainer>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <RowFlexContainer>Danh mục</RowFlexContainer>
                </Grid>
                <Grid item xs={10}>
                  <RowFlexContainer>
                    <Breadcrumbs
                      aria-label='breadcrumb'
                      separator='›'
                      sx={{ fontSize: '14px' }}
                    >
                      <CoverLink>
                        <Link to='/filter/book'>Sách</Link>
                      </CoverLink>
                      <Typography
                        color='text.primary'
                        sx={{ fontSize: '14px' }}
                      >
                        Tôi thấy hoa vàng trên cỏ xanh
                      </Typography>
                    </Breadcrumbs>
                  </RowFlexContainer>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <RowFlexContainer>Thương hiệu</RowFlexContainer>
                </Grid>
                <Grid item xs={10}>
                  <RowFlexContainer>
                    <LinkItem
                      style={{ margin: 0 }}
                      link='/filter/brand'
                      content='Lavano'
                      style={{ marginLeft: '4px', fontWeight: 600 }}
                    />
                  </RowFlexContainer>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <RowFlexContainer>Chất liệu</RowFlexContainer>
                </Grid>
                <Grid item xs={10}>
                  <RowFlexContainer
                    style={{ marginLeft: '4px', fontSize: '15px' }}
                  >
                    Vải
                  </RowFlexContainer>
                </Grid>
              </Grid>
            </DetailContainer>
            <ContentHeader>Mô tả sản phẩm</ContentHeader>
            <DesciprionContainer>
              💙💙💙 COTTON GIẤY BA LỖ 💙💙💙 💙 siêu phẩm hot nhất mùa hè 2022
              Giấy nhà em bán có thương hiệu rồi nhaaa MỀM MỎNG MÁT ☘️ Bảng màu
              siêu yêu ạ Hình nào cũng xinh Ảnh thật tay em chụp ❌NÓI KHÔNG VỚI
              GIẤY PE RẺ TIỀN Ạ Năm nay thời tiết mùa hè đến sớm, các mẹ nhanh
              tay sắm cho bé yêu của mình Bộ cotton giấy cộc tay bé trai/ gái,
              vải QC cao cấp sờ mềm mịn mát lịm tay. -Có đủ size cho bé từ
              3-15kg: ( Inbox cho shop để được tư vấn nhiệt tình về size và cập
              nhật nhiều mẫu hơn) -Chất liệu cotton 100% mặc mát, mềm mại, thấm
              hút mồ hôi - Màu sắc và họa tiết con vật khác nhau, rất ngộ nghĩnh
              và đáng yêu nè -Hàng xuất xứ Việt Nam, chất lượng cao - Cam kết
              giao đúng mẫu mã và số lượng 👉👉👉 Các mẹ chỉ cần chọn cân nặng
              và giới tính, shop sẽ giao ngẫu nhiên mẫu phù hợp và cam kết đẹp
              cho bé ⛔️⛔️⛔️ Bé nào trộm vía bụ bẫm mẹ chọn tăng lên 1 size
              cho bé nhé #bộbégái #bộbétrai #bộchobé #bộcotton #bộcottonchobé
              #bộcottongiấy #bộcộctaychobé #bộcộctay #thoitrangtreem
              #troitrangchobe #kid #kids #kidsfashion #mevabe #baby
            </DesciprionContainer>
          </RoundedWhiteContainer>
          <HeaderTitle
            Icon={CompareArrowsIcon}
            color='primary'
            title='Sản phẩm tương tự'
            style={{ marginTop: '16px' }}
          />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={2.4}>
              <Product showControl={false} />
            </Grid>
            <Grid item xs={2.4}>
              <Product showControl={false} />
            </Grid>
            <Grid item xs={2.4}>
              <Product showControl={false} />
            </Grid>
            <Grid item xs={2.4}>
              <Product showControl={false} />
            </Grid>
            <Grid item xs={2.4}>
              <Shortcut
                Icon={CompareArrowsIcon}
                title='Xem tất cả'
                className='bg-blue-linear'
                link='/filter/likely'
              />
            </Grid>
          </Grid>
          <HeaderTitle
            Icon={AddCircleIcon}
            title='Sản phẩm thường được mua kèm'
            style={{ marginTop: '16px' }}
          />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={2.4}>
              <Shortcut
                Icon={AddCircleIcon}
                title='Xem tất cả'
                className='bg-red-linear'
                link='/filter/likely'
              />
            </Grid>
            <Grid item xs={2.4}>
              <Product showControl={false} />
            </Grid>
            <Grid item xs={2.4}>
              <Product showControl={false} />
            </Grid>
            <Grid item xs={2.4}>
              <Product showControl={false} />
            </Grid>
            <Grid item xs={2.4}>
              <Product showControl={false} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2.5}>
          <BaseContainer>
            <HeaderTitle
              style={{ padding: '8px' }}
              title='Sản phẩm hot'
              Icon={LocalFireDepartmentIcon}
              color='error'
            />
          </BaseContainer>
          <Grid container spacing={2} sx={{ mt: 0.5 }}>
            <Grid item xs={12}>
              <Product />
            </Grid>
            <Grid item xs={12}>
              <Product />
            </Grid>
            <Grid item xs={12}>
              <Product />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

Body.propTypes = {};

export default Body;
