import { style } from '@vanilla-extract/css';

export const Container = style ({

    display:'flex',
    overflowX: 'auto',
    
   
    
    selectors: {
      '&::-webkit-scrollbar': {
          display: 'none',
      }
  },

})

export const Wrap = style ({
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    width: '120px',
    height: '96px',
    backgroundColor: '#613EEA',
    filter: 'drop-shadow(0px 8px 28px rgba(134, 118, 251, 0.6))',
    borderRadius: '6px',
    padding: '12px',
    color:'#fff'
 
})

export const WrapNoActive = style ({
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    width: '120px',
    height: '96px',
    backgroundColor: '#F0F1F4',
    borderRadius: '6px',
    padding: '12px',
    color: '#A6AAB4'
 
})

export const profilewrapper = style({
    flex: '1',  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

})

export const profile = style({
   
    height: '40px',
    width: '40px',
    borderRadius:'50%',
    backgroundSize:'cover',
    border: '1px solid #fff',
    
});

export const profilNameewrapper = style({
   
  flex: '1',
  padding: '0 20px',
  fontFamily:'sarabun',
  fontWeight: '400',
  fontSize: '14px',
  textAlign: 'center',
  lineHeight: '20px',  
  letterSpacing: '0.2px',
  
    
});