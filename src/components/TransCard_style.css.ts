import { style } from '@vanilla-extract/css'; 

export const Container = style({

    display: 'flex',
    width: '95%',
    margin:'10px auto 0 auto',
    height: '60px',
    background: '#FFFFFF',
    borderRadius: '6px',
    alignItems: 'center',
    boxShadow: '0px 4px 26px rgba(0, 0, 0, 0.06)'
});

export const profilewrapper = style({
   
    height: '100%',
    width: '52px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
        
});

export const profile = style({
   
    height: '32px',
    width: '32px',
    borderRadius:'50%',
    display: 'flex',
});

export const DetailsContainer = style({
   
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    height:'65%',
   
});

export const DetailsWrapper = style({
   
    display: 'flex',
    minWidth: '115px',
    justifyContent: 'space-between',
    alignItems:'baseline',

   
});

export const NameWrapper = style({

    marginTop:'5px',
    fontFamily:'sarabun',
    fontSize:'12px',
    fontWeight: '300',
    color: '#171D33'
});

export const Name = style({
   
    fontFamily:'sarabun',
    fontSize:'14px',
    fontWeight: '600',
    color: '#171D33',
    letterSpacing: '.2px'
});

export const DateWrapper= style({
    fontFamily:'sarabun',
    fontSize:'12px',
    fontWeight: '400',
    letterSpacing: '.2px',
    lineHeight: '18px',
    color: '#757F8C'

});

export const AmountWrapper= style({
    flex:'1',
    textAlign: 'right',
    fontFamily:'sarabun',
    fontSize:'16px',
    fontWeight: '600',
    letterSpacing: '.1px',
    lineHeight: '24px',
    color: '#FA2E69',

});