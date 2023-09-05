
import React from 'react';
import { Button, Checkbox  } from 'antd';

export default function Handler() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      
        paddingLeft: 100,
        paddingRight: 100,
        margin: 0,
        height: 120,
        background: '#c7c7c7',
        color:'black',
        fontSize: '8vh',
        fontWeight: 'bold',
        
      }}>
       
    <Button type="primary">ADD</Button>
    <Button type="primary">CLEAR</Button>
    <Checkbox >Member</Checkbox>

      </div>
  )
}
