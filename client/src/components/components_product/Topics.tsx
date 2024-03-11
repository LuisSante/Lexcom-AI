import type { TableColumnsType, TableProps } from "antd";
import { useEffect, useState } from "react";
import { Table, notification } from 'antd';
import axiosInstance from "../axios";


interface TopicsData {
  topic: {
    title: string;
    type: string;
  };
  value: string;
}

interface TypeTopics {
  searchValue: string;
}

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Value',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  }
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Topics: React.FC<TypeTopics> = ({ searchValue }) => {
  const [data, setData] = useState<TopicsData[] | null>(null);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const fetchData = () => {
      const url = `product/${searchValue}/topics_data`
      axiosInstance.get(url)
        .then(response => {
          setData(response.data);
          api.success({
            message: 'Operación realizada',
            description: 'Espere por favor',
            duration: 4
          });
        })
        .catch(err => {
          api.error({
            message: 'No hay productos relacionados',
            duration: 4
          });
          api.error({
            message: 'Error al realizar la operación',
            description: `${err.message}`,
            duration: 4
          });
        })
    };

    fetchData();
  }, [searchValue, api]);

  const transformData = (topicsData: TopicsData[] | null): DataType[] => {
    if (!topicsData) return [];
    return topicsData.map((item, index) => ({
      key: index,
      name: item.topic.title,
      chinese: parseFloat(item.value),
      math: 0,
      english: 0,
    }));
  };

  return (
    <div>
      {contextHolder}
      <Table columns={columns} dataSource={transformData(data)} onChange={onChange} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default Topics;
