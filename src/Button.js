import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

//button with id parameters linked to the url
const Button = ({id}) => {
    return (
        <>
        <Link to={`/users/${id}`}>
            <button className="btn btn-primary">MORE DETAILS</button>
        </Link>
        </>
    );
};


export default Button;
