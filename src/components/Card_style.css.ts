import { style } from '@vanilla-extract/css';




export const Container = style({
    
   width:'100%',
   height: '100%',
   marginTop: '15px',
   display:'flex',
   overflowX: 'auto',
   
  
   
   selectors: {
     '&::-webkit-scrollbar': {
         display: 'none',
     }
 },
});

export const CardContainer = style({
    
    width: '78%',
    height: '140px',
    backgroundImage: 'linear-gradient(109.55deg, #8676FB 0%, #AB7BFF 100%)',
    margin:'0 1px',
    borderRadius: '6px',
    padding: '20px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    filter: 'drop-shadow(0px 8px 28px rgba(134, 118, 251, 0.6))',
    
});

export const Wrap = style({
    
    display:'flex'
    
});

export const NoActive = style({
    
    width: '66%',
    height: '100px',
    backgroundImage: 'linear-gradient(109.55deg, #54D3AD 0%, #63E2BC 100%)',
    margin:'auto',
    borderRadius: '6px',
    padding: '20px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    
});

export const NoActive2 = style({
    
    width: '66%',
    height: '100px',
    backgroundImage: 'linear-gradient(109.55deg, #F09D5A 0%, #FFAD6A 100%)',
    margin:'auto',
    borderRadius: '6px',
    padding: '20px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    
});

export const CardNameContainer = style({
    
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',

   
});

export const CardNameWrapper = style({
    
    height: '100%',
    fontSize:'14px',
    
});

export const CardIconWrapper = style({
    
    height: '1px',
    fontSize:'7px',
    
});

export const CardNoContainer = style({
    
    width:'100%',
    height: '26px',
    color: `#F9FAFB`,
    textAlign:'center',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: '1rem'
    
   
});

export const CardNoWrapper = style({

    width:'56px',
    height: '1.2rem',
    fontSize: '18px',
    fontFamily:'sarabun',
    fontWeight: '400',
    letterSpacing: '5px',
    
  

    
   
});

export const CardNo = style({
    
    height: '100%',
    fontFamily:'sarabun',
    fontWeight: '500',
    fontSize: '18px',
    letterSpacing: '2px'
    
   
});


export const CardDetailsContainer = style({
    
    width:'100%',
    display:'flex',
    flexDirection: 'column'
   
});

export const CardHolderContainer = style({
    
    display:'flex',
    justifyContent: 'space-between',
    fontFamily:'sarabun',
    fontSize: '12px',
    fontWeight: '300',
    color: '#fff'
   
});

export const CardHolderDetailsContainer = style({
    
    marginTop:'2px',
    display:'flex',
    justifyContent: 'space-between',
    fontFamily:'sarabun',
    fontSize: '16px',
    fontWeight: '400',
    color: '#fff',
   
});

