import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonInterface from '../../interfaces/Button';


const CustomButton = ({variant,text,icon,disabled,isLink,link,handelClick,...props}:ButtonInterface) => {

return(

  <div >
    {isLink
      ?    <Link to={link}>
                <br/>
                <Button disabled={disabled} variant={variant} onClick={handelClick}> {text} {icon} </Button>
                <br/>
          </Link>
      : 
      <>
        <br/>
          <Button disabled={disabled} variant={variant} onClick={handelClick}> {text} {icon} </Button>
        <br/>
      </>
    }
  </div>  
)

};

export default CustomButton;
