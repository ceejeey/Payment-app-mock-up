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
    width: '120px',
    height: '96px',
     backgroundColor: '#613EEA',
     filter: 'drop-shadow(0px 8px 28px rgba(134, 118, 251, 0.6))',
     borderRadius: '6px',
     padding: '12px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-evenly',
     color: `#F9FAFB`,
   

})

export const WrapNoActive = style ({
    marginLeft: '20px',
    width: '120px',
    height: '96px',
    backgroundColor: '#F0F1F4',
     borderRadius: '6px',
     padding: '12px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-evenly',
     color: `#757F8C`,
   

})



export const CardNoContainer = style ({
    flex: '3',
    width:'100%',
    height: '26px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem'
})

export const CardNoWrapper = style ({

    fontSize: '18px',
    fontFamily:'sarabun',
    fontWeight: '400',
    letterSpacing: '5px',
    height: '1.2rem',
})

export const CardNo = style({
    
    fontFamily:'sarabun',
    fontWeight: '400',
    fontSize: '18px',
    letterSpacing: '2px'
    
   
});

export const BalanceContainer = style ({
       flex: '1',
       display: 'flex',
       flexDirection: 'row',
       lineHeight: '18px',
       alignItems: 'flex-end',
     
      
   
   })

export const BalanceWrapper = style ({
    display: 'flex',
    alignItems: 'center',
    fontFamily:'sarabun',
    fontWeight: '300',
    fontSize: '12px',
    letterSpacing: '.2px',
    lineHeight: '18px',
    color:'#fff'
})



export const profilewrapper = style({
    display: 'flex',
    width:'115px',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#10C971',
    fontSize: '24px',


})


export const profilNameewrapper = style({
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    lineHeight: '20px',
    fontSize: '12px',
    letterSpacing: '.2px',

    

    
});
    
   

