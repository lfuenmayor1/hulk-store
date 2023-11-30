
import Button from 'react-bootstrap/Button';

interface CustomButtonProps {
  variant:string,
  text:string,
  icon:string,
  disabled:boolean;
  handelClick: () => void
}

const CustomButton = ({variant,text,icon,disabled,handelClick,...props}:CustomButtonProps) => (
  <>
    <br/>
    <Button disabled={disabled} variant={variant} onClick={handelClick}>{text} {icon} </Button>
    <br/>
  </> 
);

export default CustomButton;
