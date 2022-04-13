
import React from 'react'
import { Stack } from '@mui/material'
import HistoryItem from './HistoryItem'

const  History = () => {  
  return (
    <div>
      <Stack spacing={2}
        sx={{marginBottom: 10, marginTop: 5}}>
        <HistoryItem></HistoryItem>
      </Stack>
    </div>
  )

}

export default History;
