import { style } from '@vanilla-extract/css';

export const Container = style ({
    marginTop:'10px',
    width: '100%',
    height: '156px',
     borderRadius: '6px',
     display:'flex',
     flexDirection: 'column',
     justifyContent: 'space-between',

})

export const InputWrap = style ({
  width: '100%',
  position: 'relative',
 })

export const Input = style ({
   position: 'absolute',
   top:'0',
   left:'0',
   width: 'calc(100% - 2.6rem)',
   height: 'calc(65px - 2.6rem)',
   border:'1px solid #613EEA',
   borderRadius: '6px',
   fontSize: '16px',
   fontFamily:'sarabun',
   fontWeight: '400',
   outline: 'none',
   padding: '1.25rem',
   background: 'none'

})

export const Label = style ({
    position: 'absolute',
    left: '1rem',
    top: '-0.5rem',
    backgroundColor: '#fff',
    padding:'0 7px',
    fontSize: '12px',
    fontFamily:'sarabun',
    fontWeight: '500',
    color: '#613EEA',
    letterSpacing:'.2px'

   

})

export const DescWrap = style ({
    width: '100%',
    height: '50%',
   })

   export const DescInput = style ({
    marginTop: '15px',
    width: 'calc(100% - 2.6rem)',
    height: 'calc(56px - 2.6rem)',
    border:'.5px solid #A6AAB4',
    borderRadius: '6px',
    fontSize: '16px',
    fontFamily:'sarabun',
    fontWeight: '400',
    outline: 'none',
    padding: '1.25rem',
    background: 'none'
  
 
 })
