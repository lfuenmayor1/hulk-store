import React from 'react';

interface InputProps {
  label:string,
  name   :string,
  value  :string,
  disabled:boolean
  change : React.ChangeEventHandler<HTMLInputElement>
}
const Input = (Props: InputProps) => (
  <div className="form-group">
      <label>{Props.label}</label>
      <input
        className="form-control"
        type="text"
        placeholder={Props.label}
        name={Props.name}
        value={Props.value}
        disabled={Props.disabled}
        onChange={Props.change}
      />
</div>
);
export default Input;
