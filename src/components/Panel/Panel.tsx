import styles from './Panel.module.css';

interface PanelProps {
  header:string,
  body:any
}

const Panel = (props : PanelProps) => (
    <div className={styles.panel}>
        <div className={ styles.panelheading} id="header-text"> {props.header} </div>
        <div>
            {props.body}
        </div>
    </div>
);

export default Panel;

