import styles from './InputSelect.module.css';

interface Item {
  id:string,
  name:string
}
interface InputSelectProps {
  id:string,
  label:string,
  name:string
  items:Item[]
}

const InputSelect = ({id ,label, name, items , ...props} : InputSelectProps ) => {

  return(
    <div className={styles.InputSelect}>
      <div className="form-group">
        <label>{label}</label>
        <select className="form-control" id={id} name={name} >
          {
            items.map((item) => (
              <option key={item.id} value={item.id} > {item.name} </option>
            ))
          }
        </select>
      </div>
    </div>
  )
};
export default InputSelect;
