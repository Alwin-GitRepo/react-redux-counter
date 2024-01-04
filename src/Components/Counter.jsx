import { Button, Stack, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../Redux/CounterSlice';



function Counter() {

    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    
  return (
    <div >
        <Stack sx={{width:'100%',height:'100vh'}} justifyContent={'center'} alignItems={'center'} bgcolor={blueGrey[100]}>
            <Stack justifyContent={'center'} alignItems={'center'} bgcolor={blueGrey[50]} borderRadius={10} boxShadow={3} px={8} py={3}>
                <Typography variant='h3' color={blueGrey[800]}>Counter</Typography>
                <Typography variant='h2' color={blueGrey[400]}>{count}</Typography>
                <Stack my={2} direction={'row'} gap={1}>
                    <Button onClick={()=>dispatch(increment())} variant='contained' color='success'> <AddIcon/> </Button>
                    <Button onClick={()=>dispatch(decrement())} variant='contained' color='warning'> <RemoveIcon/> </Button>
                    <Button onClick={()=>dispatch(reset())} variant='contained' color='error'>Reset</Button>
                </Stack>
            </Stack>
        </Stack>
    </div>
  )
}

export default Counter