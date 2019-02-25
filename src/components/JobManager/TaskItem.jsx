export default class TaskItem extends React.Component {
    
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task);
        // console.log(this.props.task)
    }

    onDelete = () => {
        this.props.onDelete(this.props.task);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task);
    }

    render() {
        let {task} = this.props;
        return(
            <tr>
                <td>{this.props.index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={`label ${task.status ? 'label-success' : 'label-danger'}`}
                        onClick={() => this.onUpdateStatus()}
                    >
                        {task.status ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={() => this.onUpdate()}
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => this.onDelete()}
                    >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
