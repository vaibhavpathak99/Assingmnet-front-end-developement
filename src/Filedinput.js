import React from 'react';
import { Input, TreeSelect, Card, Button,size} from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

function Filedinput() {
    const [value, setValue] = useState();
   
    const onChange = (newValue) => {
        setValue(newValue);
    };

    const treeData = [
        {
            value: 'parent 1',
            title: 'parent 1',
            children: [
                {
                    value: 'parent 1-0',
                    title: 'parent 1-0',
                    children: [
                        {
                            value: 'leaf1',
                            title: 'leaf1',
                        },
                        {
                            value: 'leaf2',
                            title: 'leaf2',
                        },
                    ],
                },
                {
                    value: 'parent 1-1',
                    title: 'parent 1-1',
                    children: [
                        {
                            value: 'leaf3',
                            title: (
                                <b
                                    style={{
                                        color: '#08c',
                                    }}
                                >
                                    leaf3
                                </b>
                            ),
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div>
            <h2 style={{ paddingRight: '1300px' }}>Orders</h2>   
            <Button type="primary" style={{ position: 'absolute', top: 15, right: 18, width:'150px' }}>
                CERATE NEW
            </Button>
           
            <Card title="" bordered={false} style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
               
                    <Input style={{ width: '900px', marginRight: '10px' }} size="middle" placeholder="Search for category name, company, etc" prefix={<SearchOutlined />} />
                    <Input style={{ width: '200px', marginRight: '10px' }} size="middle" placeholder="All" prefix={<DownOutlined />} />
                    <Input style={{ width: '200px' }} size="middle" placeholder="All" prefix={<DownOutlined />} />
                    <Button type="primary" icon={<SearchOutlined />} style={{ marginLeft: '10px' }}>
                        Search
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default Filedinput;
