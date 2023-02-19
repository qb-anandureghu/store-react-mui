import {Card} from '@mui/material';
import {styled} from '@mui/system';

export const CardContainer = styled(Card)(({theme}) => ({
  background: `${theme.palette.background.paper} !important`,
}));
