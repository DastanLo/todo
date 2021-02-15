import React from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

const Form = (props) => {
  return (
    <form onSubmit={props.click}>
      <InputGroup className="mt-5">
        <Input value={props.value} onChange={props.change}/>
        <InputGroupAddon style={{cursor: 'pointer'}}  addonType="append">
          <button type="submit">{props.btnText}</button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};

export default Form;
