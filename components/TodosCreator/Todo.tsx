import React from 'react';
import { TodoContainerItem } from './styled'
import { TodoProps } from './index.interface';

const TodoItem: React.FC<TodoProps> = ({ item }) => (
    <TodoContainerItem>
      <p>
        {item.get("name")}
      </p>

      <p>
        {item.get("age")  || ""}
      </p>
    </TodoContainerItem>
  )

export default TodoItem;
