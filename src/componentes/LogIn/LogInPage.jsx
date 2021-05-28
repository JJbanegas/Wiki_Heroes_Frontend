import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
//import {useState, useEffect} from 'react'
//import {Routes, Route} from 'react-router-dom'
//import {NavLink} from 'react-router-dom';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = ({setToken}) => {


  const setearToken = (token) =>{
    setToken(token)
  }

  const onFinish = async (values) => {
    const response = await axios.post(`http://localhost:8080/api/users/singnin`, values)
    setearToken(response.data.token)
    localStorage.setItem("x-access-token", response.data.token)
    setToken(response.data.token)
  };
  
  const onFinishFailed = (values) => {
    console.log('Failed:', values);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="userName"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"> 
            Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo