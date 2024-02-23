import React from 'react';
import { Skeleton } from 'antd';

const App: React.FC = () => {
    return (
        <div className='skeleton'>
            <Skeleton active>
            </Skeleton>
            <Skeleton active>
            </Skeleton>
            <Skeleton active>
            </Skeleton>
            <Skeleton active>
            </Skeleton>
        </div>
    );
};

export default App;