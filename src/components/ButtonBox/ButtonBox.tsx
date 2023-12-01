import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from './ButtonBox.module.css';
import CustomButton from '../ButtonCustom/CustomButton';
import Button from '../../interfaces/Button';

interface ButtonBoxProps {
  buttons:Button[]
}
const ButtonBox = ({buttons}:ButtonBoxProps) => (
  <div className={styles.ButtonBox}>
     <Container>
        <Row>
          { buttons.map((button:Button, index) => {
            return (
                <Col key={index}> 
                    <CustomButton key={index}
                      variant={button.variant}
                      text={button.text}
                      icon={""}
                      handelClick={button.handelClick}
                      disabled = {button.disabled}
                      isLink = {button.isLink}
                      link = {button.link}    
                    />
                </Col>
            );})
          }     
        </Row>
     </Container>
  </div>
);
export default ButtonBox;
