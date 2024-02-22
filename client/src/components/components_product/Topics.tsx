import type { TableColumnsType, TableProps } from "antd";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Table } from 'antd';


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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8000/api/v1/product/${searchValue}/topics_data`
        const response: AxiosResponse<TopicsData[]> = await axios.get(url)
        setData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

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
      <Table columns={columns} dataSource={transformData(data)} onChange={onChange} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default Topics;
