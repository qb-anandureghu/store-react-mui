import {Box, TextField as MUITextField, Card as MUICard} from '@mui/material';
import {TextValidator} from 'react-material-ui-form-validator';

const {styled} = require('@mui/system');

export const Container = styled('div')(({theme}) => ({
  margin: '30px 5%',
  [theme.breakpoints.down('md')]: {
    margin: '22px 3%',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '16px 2%',
  },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '12px',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px',
    },
  },
}));

export const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));
export const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const Form = styled('form')(() => ({
  paddingLeft: '16px',
  paddingRight: '16px',
}));

export const StyledTextField = styled(MUITextField)(() => ({
  marginBottom: '16px',
}));

export const Card = styled(MUICard)(() => ({
  padding: '20px 30px',
}));
