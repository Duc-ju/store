import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, FastField } from 'formik';
import InputField from '../../components/InputField';
import * as Yub from 'yub';

const theme = createTheme();

function index() {
  const initialValues = {
    username: '',
    password: '',
  };
  // const validationSchema = Yub.object().shape({
  //   username: Yub.string().required('Vui lòng nhập tên đăng nhập'),

  //   password: Yub.string().required('Vui lòng nhập mật khẩu'),
  // });
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={(values) => console.log('Submit: ', values)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                  Sign in
                </Typography>
                <Form>
                  <FastField
                    name='username'
                    component={InputField}
                    label='Username'
                    autoFocus
                    autoComplete='email'
                  />

                  <FastField
                    name='password'
                    component={InputField}
                    label='password'
                    autoFocus
                    type='password'
                    autoComplete='current-password'
                  />

                  <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
                  />
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href='#' variant='body2'>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href='#' variant='body2'>
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              </Box>
            </Container>
          </ThemeProvider>
        );
      }}
    </Formik>
  );
}

index.propTypes = {};

export default index;
