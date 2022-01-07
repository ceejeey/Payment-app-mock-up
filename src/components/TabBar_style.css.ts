import { style } from '@vanilla-extract/css';

export const container = style({

    backgroundColor:'#F9FAFB',
    height: '38px',
    width: '95%',
    margin:'40px auto 0 auto',
    fontSize:'18px',
    fontFamily:'sarabun',
    fontWeight: '600',
    color: '#3B414B',
    display: 'flex',
    justifyContent:'space-evenly',
    borderBottom:'1px solid #E8E9EC',
})

export const ActiveWrapper = style({
    
    borderBottom:'2px solid #ff7d00',
    width: '50%',
    display: 'flex',
    justifyContent:'center',
    transition: 'all linear 0.1s'
    })

export const NotActiveWrapper = style({

    borderBottom:'none',
    width: '50%',
    display: 'flex',
    justifyContent:'center',
    transition: 'all linear 0.1s'
   
})