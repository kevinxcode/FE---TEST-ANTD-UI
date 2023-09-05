
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export default function Handler() {
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'No',
      dataIndex: 'No',
      key: 'No',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Product',
      dataIndex: 'Product',
      key: 'Product',
    },
    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
    },
    {
      title: 'QTY',
      dataIndex: 'Qty',
      key: 'Qty',
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
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  
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







