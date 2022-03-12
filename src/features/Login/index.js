import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, AlertTitle, CardContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FastField, Form, Formik } from 'formik';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import CheckBoxField from '../../components/CheckBoxField';
import InputField from '../../components/InputField';
import { handleLogin } from '../../redux/apiRequests';
import { userSelector } from '../../redux/selectors';
import { Card } from '@mui/material';
const theme = createTheme();

function Login() {
  const user = useSelector(userSelector);
  const initialValues = {
    username: '',
    password: '',
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Vui lòng nhập tên tài khoản'),

    password: Yup.string().required('Vui lòng nhập mật khẩu'),

    remember: Yup.boolean(),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    handleLogin(data, dispatch, navigate);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => {
        return (
          <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs' sx={{ marginTop: 8 }}>
              <Card>
                <CardContent>
                  <CssBaseline />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                      Đăng nhập
                    </Typography>
                    {user.error && (
                      <Alert
                        severity='error'
                        sx={{
                          width: '100%',
                        }}
                      >
                        <AlertTitle>{user.error}</AlertTitle>
                      </Alert>
                    )}
                    <Form>
                      <FastField
                        name='username'
                        component={InputField}
                        label='Tài khoản'
                        autoFocus
                        autoComplete='username'
                      />

                      <FastField
                        name='password'
                        component={InputField}
                        label='Mật khẩu'
                        type='password'
                        autoComplete='current-password'
                      />
                      <FastField
                        name='remember'
                        component={CheckBoxField}
                        label='Ghi nhớ'
                        color='primary'
                      />
                      <LoadingButton
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                        loading={user.isLoading}
                        loadingPosition='end'
                        endIcon={<LoginIcon />}
                      >
                        Đăng nhập
                      </LoadingButton>

                      <Grid container>
                        <Grid item xs>
                          <Link href='#' variant='body2'>
                            Quên mật khẩu?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href='#' variant='body2'>
                            {'Chưa có tài khoản? Đăng kí ngay'}
                          </Link>
                        </Grid>
                      </Grid>
                    </Form>
                  </Box>
                </CardContent>
              </Card>
            </Container>
          </ThemeProvider>
        );
      }}
    </Formik>
  );
}

export default Login;
