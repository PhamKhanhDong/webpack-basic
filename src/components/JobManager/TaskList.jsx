import TaskItem from './TaskItem';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChange = (fieldName, e) => {
        let target = e.target;
        let value = target.value;
        this.props.onFilter(
            fieldName == 'filterName' ? value : this.state.filterName,
            fieldName == 'filterStatus' ? value : this.state.filterStatus
        );
        console.log(value);
        this.setState({
            [fieldName]: value
        })
    }

    render() {
        let {tasks, filterName, filterStatus} = this.props;
        let elementTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key={index} 
                        index = {index+1} 
                        task={task}
                        onUpdateStatus={this.props.onUpdateStatus}
                        onDelete={this.props.onDelete}
                        onUpdate={this.props.onUpdate}
                    />
        });

        return(
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={(e) => this.onChange('filterName', e)}
                                value={filterName}
                            />
                        </td>
                        <td>
                            <select 
                                className="form-control" 
                                value={filterStatus} 
                                onChange={(e) => this.onChange('filterStatus', e)}
                            >
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {}
                    {elementTasks}
                </tbody>
            </table>
        );
    }
}
