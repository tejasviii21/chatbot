import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      '93.13deg': '#581B98',
      '99.69%': '#9C1DE7',
    },
  },
  gradients: {
    brand: 'linear-gradient(103.12deg, #613e2c -100.14%, #611c1c 99.69%)',
    brandopp: 'linear-gradient(103.12deg, #611c1c -2.14%, #613e2c 99.69%)'
  },
});

export default theme;
