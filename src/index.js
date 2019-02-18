import ReactDOM from 'react-dom';
import App from './components/App';
import Form from './components/Form';
import JobManager from './components/JobManager';
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/style.scss';

ReactDOM.render(
    <JobManager/>,
    document.getElementById("root")
);