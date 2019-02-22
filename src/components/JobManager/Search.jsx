export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: '',
           
        }
    }

    onChange = (e) => {
        let target = e.target;
        let value = target.value;
        this.setState({keyWord: value});
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyWord);
    }

    render() {
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nhập từ khóa..." 
                        value={this.state.keyWord}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-primary" 
                            type="button"
                            onClick={this.onSearch}
                        >
                        <span className="fa fa-search mr-5"></span>
                        Tìm
                    </button>
                    </span>
                </div>
            </div>
        );
    }
}
