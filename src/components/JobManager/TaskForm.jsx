export default class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            status: false,

        }
    }

    componentWillMount() {
        let taskEditing = this.props.taskEditing;
        if (taskEditing)
            this.setState(
                {
                    id: taskEditing.id,
                    name: taskEditing.name,
                    status: taskEditing.status,
                }
            );
    }

    componentWillReceiveProps(nextProps) {
        let taskEditing = nextProps.taskEditing;
        if (nextProps && taskEditing)
            this.setState(
                {
                    id: taskEditing.id,
                    name: taskEditing.name,
                    status: taskEditing.status,
                }
            );
        else
            this.setState(
                {
                    id: null,
                    name: '',
                    status: false,
                }
            );
    }
    
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (fieldName, e) => {
        let target = e.target;
        let value = target.value;
        if (fieldName == 'status')
            value = value === "true" ? true : false;
        this.setState({[fieldName]: value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseForm();
        // console.log("a");
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false,
        });
    }

    render() {
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.state.id ? 'Cập nhật' : 'Thêm'} Công Việc
                        <span className="fa fa-times-circle pull-right" onClick={() => this.onCloseForm()}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.name}
                                onChange={(e) => this.onChange('name', e)}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select 
                            className="form-control" 
                            required="required"
                            value={this.state.status}
                            onChange={(e) => this.onChange('status', e)}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning" >Thêm</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={() => this.onClear()}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
