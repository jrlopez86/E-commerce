import React from 'react'
import { Waveform } from '@uiball/loaders'


const Loader = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  margin: '0 auto'  }}>
        <Waveform  size={40} lineWeight={3.5}  speed={1}   color="white" />
      </div>
    )
  }
  

export default Loader