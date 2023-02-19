import React from 'react';
import {Span} from '../../components/Typography';
import {styled, Box} from '@mui/system';
import useSettings from 'app/hooks/useSettings';
import MatxLogo from '../MatxLogo/MatxLogo';

const BrandRoot = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 18px 20px 29px',
}));

const StyledSpan = styled(Span)(({mode}) => ({
  fontSize: 18,
  marginLeft: '.5rem',
  display: mode === 'compact' ? 'none' : 'block',
}));

const Brand = ({children}) => {
  const {settings} = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const {mode} = leftSidebar;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <MatxLogo />
        <StyledSpan mode={mode} className="sidenavHoverShow">
          Store Management System
        </StyledSpan>
      </Box>
      <Box
        className="sidenavHoverShow"
        sx={{display: mode === 'compact' ? 'none' : 'block'}}>
        {children || null}
      </Box>
    </BrandRoot>
  );
};

export default Brand;
