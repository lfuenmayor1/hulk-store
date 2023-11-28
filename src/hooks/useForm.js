import {useState} from "react"

export const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  }

  const setForm = (values) => {
    setValues(values);
  }

  const handleInputChange = ({target}) => {
    setValues({
      ...values,
      [target.name]: target.value
    });
  }

  const handleCheckedChange = ({target}) => {
    setValues({
      ...values,
      [target.name]: target.checked
    });
  }

  return [values, handleInputChange, reset, handleCheckedChange, setForm];

}
