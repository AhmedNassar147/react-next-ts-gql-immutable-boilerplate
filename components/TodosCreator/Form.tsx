import React from 'react';
import { Map } from 'immutable';
import { HeadControllersSection, StyledForm, Input } from './styled'
import { IStateImmutable, FormProps } from './index.interface';

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formValues, setState] = React.useState<IStateImmutable>(Map({ name: "", age: 1 }));


  const handleChange = React.useCallback(({ target:{ name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setState(oldValues => oldValues.update(name, () => value))  
  }, [setState])

  const handleSubmit = React.useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
     if(!!formValues.get("name")?.toString().length){
        onSubmit(formValues)
    }
    }
  }, [onSubmit, formValues])

  return (
      <HeadControllersSection css="background-color: green;">
        <StyledForm>
          <Input 
            type="text" 
            name="name" 
            placeholder="Type Name" 
            onChange={handleChange} 
            value={formValues.get("name")}
            onKeyPress={handleSubmit}
            autoComplete="off"
          />

          <Input 
            type="number" 
            name="age" 
            placeholder="Type Age" 
            onChange={handleChange}
            value={formValues.get("age")}
            onKeyPress={handleSubmit}
            min={1}
          />
        </StyledForm>
      </HeadControllersSection>
    )
  };

export default React.memo(Form);
