import { style } from '@vanilla-extract/css';

export const Container = style({

    height: '60px',
    width: '320px',
  
  
    
});

export const MenuWrapper = style({
  
    objectFit: 'cover',
    height: '60px',
    width: '320px',
    position: 'fixed',
    bottom: '10px',
    zIndex: '2'
   
});

export const IconContainer = style({
  
    height: '55px',
    width: '320px',
    zIndex: '11',
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: '#A6AAB4',
});

export const IconWrapper = style({
    color: '#A6AAB4',
});

export const ActiveIconWrapper = style({
  
    color: '#613EEA',
   
 
});

export const IconFABWrapper = style({
  
    height: '55px',
    width: '55px',
    color: '#A6AAB4',
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: '28px',
    borderRadius: '50%',
    background: '#613EEA',
    boxShadow: '0px 4px 12px rgba(97, 62, 234, 0.5)'
   
   
   
});

export const ActiveIconFABWrapper = style({
  
    height: '55px',
    width: '55px',
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: '28px',
    borderRadius: '50%',
    background: '#613EEA',
    color: 'orange',
    boxShadow: '0px 4px 12px rgba(97, 62, 234, 0.5)'
   
   
   
});

