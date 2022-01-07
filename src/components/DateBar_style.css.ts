import { style } from '@vanilla-extract/css';

export const container = style({

    fontFamily:'sarabun',
    fontSize:'12px',
    fontWeight: '600',
    padding: '10px',
    letterSpacing: '.2px',
    color: '#757F8C',
    display: 'flex',
    justifyContent: 'space-between',
    
    
    
});

export const HeaderWrapper = style({

    selectors: {
        '&:nth-child(2n)': {
          color: '#613EEA'
        }
    },
    
});