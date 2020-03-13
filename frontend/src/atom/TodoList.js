import React from 'react';

const TodoList = ({ListData}) => {
    return (
        <section>
            <ul>
                {
                    (!ListData)? '데이터없음'
                    :
                        ListData.map((data)=><li key={data.no}>{data.todo}</li>)
                }
            </ul>
        </section>
    );    
};

export default TodoList;