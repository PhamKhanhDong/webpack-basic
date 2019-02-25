export default class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSort: false,
        }
    }

    toggleMenuSort = () => {
        this.setState({showSort: !this.state.showSort});
    }

    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
    }

    render() {
        let {showSort} = this.state;
        let {sort} = this.props;


        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className={`dropdown ${showSort ? 'open' : ''}`}>
                    <button 
                        className="btn btn-primary dropdown-toggle" 
                        type="button"
                        onClick={() => this.toggleMenuSort()}
                    >
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a 
                                role="button"
                                className={
                                    (sort.by == 'name' && sort.value == 1)
                                    ? 'sort_selected' : ''
                                }
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a 
                                role="button"
                                className={
                                    (sort.by == 'name' && sort.value == -1)
                                    ? 'sort_selected' : ''
                                }
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <a 
                                role="button"
                                className={
                                    (sort.by == 'status' && sort.value == 1)
                                    ? 'sort_selected' : ''
                                }
                            >
                                Trạng Thái Kích Hoạt
                            </a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a 
                                role="button"
                                className={
                                    (sort.by == 'status' && sort.value == -1)
                                    ? 'sort_selected' : ''
                                }
                            >
                                Trạng Thái Ẩn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
