import './NewComponent.css';
import NewComponentHOC from '../NewComponentHOC/NewComponentHOC';

/* Types for NewComponent props */

interface Props {
    title: string;
    color: string;
    onClick: () => void;
    onMouseOver: () => void;
    onMouseLeave: () => void;
  }
  
/* Normal Component which is sent as a parameter for HOC */ 
 
const NewComponent: React.FC<Props> = (props) => {
    const {title, color, ...divProps } = props;

  return (
    <div className="newComponent" {...divProps }>
     <h2  style={{ color: color }}>{title}</h2>
    </div>
  );
}

export default NewComponentHOC(NewComponent);
