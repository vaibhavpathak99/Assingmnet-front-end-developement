
import React, { useState } from 'react';
import { Button, Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    
  },
  {
    title: 'SHOPIFY', 
    dataIndex: 'shopify',
  },
  {
    title: 'DATE',
    dataIndex: 'date',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
  },
  {
    title: 'CUSTOMER',
    dataIndex: 'customer',
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
  },
  {
    title: 'COUNTRY',
    dataIndex: 'country',
  },
  {
    title: 'SHIPPING',
    dataIndex: 'shipping',
  },
  {
    title: 'SOURCE',
    dataIndex: 'source',
  },
  {
    title: 'ORDER TYPE',
    dataIndex: 'ordertype',
  },
];

const data = [];
for (let i = 0; i < 10; i++) { 
  data.push({
    id: i + 1, // Incremented to start from 1
    shopify: '17713',
    date: '22 Jan 2020',
    status: 'pending',
    customer: 'Ahmed',
    email: 'ahmed.123@gmail.com',
    country: 'Australia', 
    shipping: 'Australian post Api', 
    source: 'ShopifyAU',
    ordertype: 'Customer',
  });
}

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false); 

  const start = () => {
    setLoading(true);
    // Simulating an ajax request
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
       
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} size="middle" />
    </div>
  );
};

export default App;

