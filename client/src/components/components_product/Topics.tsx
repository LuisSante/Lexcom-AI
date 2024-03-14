import type { TableColumnsType, TableProps } from "antd";
import { useEffect, useState } from "react";
import { Skeleton, Table, notification } from 'antd';
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
  chinese: string;
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
      compare: (a, b) => parseFloat(a.chinese) - parseFloat(b.chinese),
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
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
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transformData = (topicsData: TopicsData[] | null): DataType[] => {
    if (!topicsData) return [];
    return topicsData.map((item, index) => ({
      key: index,
      name: item.topic.title,
      // chinese: parseFloat(item.value),
      chinese: item.value,
      math: 0,
      english: 0,
    }));
  };

  return (
    <>
      {contextHolder}
      <div>
        {isLoading && <Skeleton active/>}
        {data && !isLoading && (
          <Table columns={columns} dataSource={transformData(data)} onChange={onChange} pagination={{ pageSize: 5 }} />
        )}
      </div>
    </>
  );
};

export default Topics;
