import { style } from '@vanilla-extract/css';

export const Container = style ({
   
   

})

export const Wrap = style ({
    margin:'calc((100% - 240px)/10)',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    width: '120px',
    height: '96px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    padding: '12px',
    color: '#fff',
    boxShadow: '0px 4px 26px rgba(0, 0, 0, 0.09)',
 
})

export const IconWrap = style({
    flex: '1',  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

})

export const profilewrapper = style({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    width: '40px',
    borderRadius:'50%',
    backgroundColor: '#613EEA'
    
});

export const profilNameewrapper = style({
   
    
  flex: '1',
  display:'flex',
  alignItems: 'center',
  justifyContent:'center',
  padding: '0 0px',
  fontFamily:'sarabun',
  fontWeight: '500',
  fontSize: '12px',
  textAlign: 'center',
  lineHeight: '20px',  
  letterSpacing: '0.2px',
  color: '#3B414B'
  
    
});

