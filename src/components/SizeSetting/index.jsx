export default class SizeSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {size: 12}
    }

    handleSize = (number) => {
        let newSize = this.state.size + number;

        if (newSize > 36 || newSize < 8)
            return;
        this.setState({size: newSize});
        this.props.changeSize(newSize);
    }

    hanleReset = () => {
        this.setState({size: 12});
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    Size: {this.state.size}px
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={() => this.handleSize(-1)}>Deincrease</button>
                    &nbsp;
                    <button type="button" className="btn btn-success" onClick={() => this.handleSize(1)}>Increase</button>
                </div>
            </div>
        );
    }
}
