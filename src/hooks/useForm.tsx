import {useState} from "react"

export const useForm = (initialState:any ) => {

  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  }

  const setForm = (values:any) => {
    setValues(values);
  }

  const handleInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
   // console.log(target);
    setValues({
      ...values,
      [target.name]: target.value
    });
  }


  return [values, handleInputChange, reset, setForm];

}
