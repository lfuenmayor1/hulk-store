
import Button from 'react-bootstrap/Button';

interface CustomButtonProps {
  variant:string,
  text:string,
  icon:string,
  handelClick: () => void
}

const CustomButton = ({variant,text,icon,handelClick,...props}:CustomButtonProps) => (
  <>
    <br/>
    <Button variant={variant} onClick={handelClick}>{text} {icon} </Button>
    <br/>
  </> 
);

export default CustomButton;
