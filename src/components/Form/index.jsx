const user = {
    txtUsername: "",
    txtPassword: "",
    txtDescription: "",
    sltGender: 0,
    rdLang: 'en',
    cbActive: true
}

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = user;
    }

    handleChange = (fieldName, event) => {
        let target = event.target;
        let value = target.type == "checkbox" ? target.checked : target.value;
        this.setState({
            [fieldName]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    handleReset = () => {
        this.setState(user);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Form</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <legend>Form title</legend>
                                        <div className="form-group">
                                            <label>Username: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => this.handleChange("txtUsername", e)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password: </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                onChange={(e) => this.handleChange("txtPassword", e)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Description: </label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                onChange={(e) => this.handleChange("txtDescription", e)}
                                            >
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Gender: </label>
                                            <select
                                                className="form-control"
                                                value={this.state.sltGender}
                                                onChange={(e) => this.handleChange("sltGender", e)}
                                            >

                                                <option value={0}>Female</option>
                                                <option value={1}>Male</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Language: </label>

                                            <div className="radio">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="en"
                                                        onChange={(e) => this.handleChange("rdLang", e)}
                                                        checked={this.state.rdLang=="en"}
                                                    />
                                                    English
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="vi"
                                                        onChange={(e) => this.handleChange("rdLang", e)}
                                                        checked={this.state.rdLang=="vi"}
                                                    />
                                                    Vietnamese
                                                </label>
                                            </div>

                                        </div>
                                        <div className="form-group">

                                            <div className="checkbox">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={this.state.cbActive}
                                                        onChange={(e) => {this.handleChange("cbActive", e)}}
                                                    />
                                                    Active
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                                            <button type="reset" className="btn btn-primary" onClick={() => this.handleReset()}>Reset</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
