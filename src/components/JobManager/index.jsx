import 'font-awesome/css/font-awesome.min.css';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskList from './TaskList';

export default class JobManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyWord: '',
            sort: {
                by: '',
                value: 1
            }
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({tasks: tasks});
        }
    }

    handleGenerateData = () => {
        let tasks = [
            {
                id: this.generateID(),
                name: 'Học lập trình',
                status: true
        
            },
            {
                id: this.generateID(),
                name: 'Đi bơi',
                status: false
        
            },
            {
                id: this.generateID(),
                name: 'Đi ngủ',
                status: true
        
            }
        ];
        this.setState({tasks: tasks});
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    
    generateID() {
        return(`${this.s4()}-${this.s4()}-${this.s4()}`);
    }
    
    onToggleForm = () => {
        this.setState({
            isDisplayForm: true,
            taskEditing: null
        });
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm: true,
        });
    }
    
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false,
        });
    }
    
    onSubmit = (data) => {
        let {tasks} = this.state;
        if (data.id) {
            let index = tasks.findIndex(item => item.id == data.id);
            tasks[index] = data;
        } else {
            data.id = this.generateID();
            tasks.push(data);

        }
        this.setState({tasks: tasks, taskEditing: null});
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (data) => {
        let tasks = this.state.tasks;
        let index = tasks.findIndex(item => item.id == data.id);
        if (index != -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({tasks: tasks});
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    onDelete = (data) => {
        let tasks = this.state.tasks;
        let index = tasks.findIndex(item => item.id == data.id);
        if (index != -1) {
            tasks.splice(index, 1);
            this.setState({tasks: tasks});
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    onUpdate = (data) => {
        let tasks = this.state.tasks;
        let index = tasks.findIndex(item => item.id == data.id);
        if (index != -1) {
            this.setState({taskEditing: tasks[index]});
            this.onShowForm();
        }
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName,
                status: filterStatus
            }
        });
        
        // console.log(filterName, '-' ,filterStatus);
    }

    onSearch = (keyWork) => {
        this.setState({keyWord: keyWork});
        console.log(keyWork);
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sort: {
                by: sortBy,
                value: sortValue
            }
        });

        console.log(sortBy, ' ', sortValue);
    }

    render() {
        let {
            tasks, 
            isDisplayForm, 
            taskEditing, 
            filter, 
            keyWord,
            sort
        } = this.state;

        if (filter) {
            if (filter.name) {
                tasks = tasks.filter(task => {
                    return task.name.toLowerCase().includes(filter.name.toLowerCase());
                });
            }
            
            tasks = tasks.filter(task => {
                if (filter.status == -1) return task;
                else
                    return task.status == (filter.status == 1 ? true : false);
            });
        }

        if (keyWord) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().includes(keyWord);
            });
        }

        if (sort.by == 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            });
        }


        let elmTaskForm = isDisplayForm 
            ? <TaskForm 
                onSubmit={this.onSubmit} 
                onCloseForm={this.onCloseForm} 
                taskEditing={taskEditing}
            /> 
            : '';
        return(
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {elmTaskForm}
                    </div>
                    <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={() => this.onToggleForm()}
                        >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => this.handleGenerateData()}>
                            Generate data
                        </button>
                        <Control onSearch={this.onSearch} onSort={this.onSort} sort={sort}/>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    tasks={tasks} 
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onUpdate={this.onUpdate}
                                    onFilter={this.onFilter}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
