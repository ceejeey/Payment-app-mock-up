import { style } from '@vanilla-extract/css';



export const container = style({
    
    width: '100%',
    height: '66px',
    backgroundColor: '#F9FAFB',
    marginTop:'1%'
});

export const statustypewrapper = style({

    
    color:'#A6AAB4',
    fontSize:'14px',
    fontFamily:'sarabun',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'start',
    marginLeft:'15px',
    minHeight: '18px',
});

export const statuscontainer = style({
    
    color:'#171d33',
    fontSize:'32px',
    padding: '5px',
    display: 'flex',
    justifyContent:'space-between',
    flex:'1',


    
});

export const statusiconwrapper = style({
    display: 'flex',
    alignItems: 'center',
    fontFamily:'sarabun',
    fontWeight: '600',
    fontSize: '32px',
    letterSpacing: '.5px',
    lineHeight: '42px'
  
    
    
    
});

export const profilewrapper = style({
   
    height: '32px',
    width: '38px',
    borderRadius:'50%',
    
    
});

export const profile = style({
   
    height: '32px',
    width: '32px',
    borderRadius:'50%',
    backgroundSize:'cover',
    
    
});

