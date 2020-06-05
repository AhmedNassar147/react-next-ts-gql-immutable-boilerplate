import React from 'react';
import { List } from 'immutable';
import Todo from './Todo';
import Form from './Form';
import { TodosContainer } from './styled'
import { IStateImmutable } from './index.interface';


const TodosCreator: React.FC = () => {
  const [state, setState] = React.useState<List<unknown> | List<IStateImmutable>>(List([]));

  const AddNewItem = React.useCallback((newItem: IStateImmutable) => {
    setState(oldState => oldState.push(newItem))
  }, [setState])


  return (
    <TodosContainer>
      
      <Form onSubmit={AddNewItem} />
      
      {state.isEmpty() ? null : (
        <section>
          {(state as List<IStateImmutable>).map((item, idx) => item && <Todo item={item as IStateImmutable} key={idx} />)}
        </section>
      )}
    </TodosContainer>
  )
};

export default TodosCreator;
