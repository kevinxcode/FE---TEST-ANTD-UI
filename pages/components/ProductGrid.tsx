
import React, { useEffect, useState }  from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import axios from 'axios';
import Order from '../api/order';

export default function Handler() {

  
  const columns: ColumnsType<DataType> = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'QTY',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Subtotal',
      dataIndex: 'Subtotal',
      key: 'Subtotal',
    },
    
   
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get<Order[]>('../api/orderList');
      console.log(response.data);
      setData(response.data);
    }

    fetchTodos();
  }, []);
  
  const [data, setData] = useState([]);

  
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 24,
        marginTop: 10,
        marginBottom: 24,
        width: '100%',
        height: '50vh',
        background: '#c7c7c7',
        color:'black',
        fontSize: '8vh',
        fontWeight: 'bold',
        
      }}>
       <Table  style={{width: '100%'}}  columns={columns} dataSource={data} />
      </div>
  )
}







