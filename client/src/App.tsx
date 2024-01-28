import './App.css'
import { Table, Form, Input, Checkbox, Button, notification } from 'antd'
import type { TableProps } from 'antd'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

interface DataType {
  key: string;
  title: string;
  description: string;
  completed: boolean;
}

interface FormValues {
  title: string;
  description: string;
  completed: boolean;
}

function App() {

  const [todos, setTodos] = useState<DataType[]>([])

  // Real time
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then((res) => {
        if (res.status === 200) {
          setTodos(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  const [api, contextHolder] = notification.useNotification();

  const columns: TableProps<DataType>['columns'] = [
    {
      key: '1',
      title: 'Title',
      dataIndex: 'title',
    },
    {
      key: '2',
      title: 'Description',
      dataIndex: 'description',
    },
    {
      key: '3',
      title: 'Completed',
      dataIndex: 'completed',
      render: (completed: boolean) => completed ? 'Yes' : 'No'
    }
  ]

  const handleAddTodo = (values: FormValues) => {
    console.log(values)
    axios.post('http://localhost:8000/api/todo', values)
      .then(
        res => {
          if (res.status === 201) {
            console.log(res.data)

            setTodos([...todos, res.data])

            api.success({
              message: 'Todo added',
              description: 'Todo added successfully',
              duration: 1000
            })
          }
        }
      )
      .catch(
        err => {
          api.error({
            message: 'Error to add todo',
            description: `${err.message}`,
            duration: 1000
          })
        }
      )
  }

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight]);


  return (
    <>
      {contextHolder}
      <Navbar isScrolling={scrollHeight} />
      <div className='pt-10 grid grid-cols-2'>
        <div className='p-8 flex flex-col gap-4'>
          <p className='text-2xl'>Agregar un pendiente</p>
          <Form
            name="addTodo"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={handleAddTodo}
          >
            <Form.Item
              label='Title'
              name='title'
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Description'
              name='description'
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='completed'
              valuePropName='checked'
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Completed</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Add Todo
              </Button>
            </Form.Item>
          </Form>

        </div>
        <div className='flex flex-col gap-4 p-8'>
          <p className='text-2xl'>Mi lista de pendiente</p>
          <Table columns={columns} dataSource={todos} />
        </div>
      </div>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
    </>
  )
}

export default App
