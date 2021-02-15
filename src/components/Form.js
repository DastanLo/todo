import React from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

const Form = (props) => {
  return (
    <InputGroup className="mt-5">
      <Input onChange={props.change}/>
      <InputGroupAddon style={{cursor: 'pointer'}} onClick={props.click} addonType="append">
        <InputGroupText>{props.btnText}</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Form;
