import ColorPicker from './../ColorPicker';
import SizeSetting from './../SizeSetting';
import Content from './../Content';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            size: 12
        };
    }

    handleChaneColorPicker = (obj) => {
        let newState = update(this.state.color, {$set: obj.color});
        this.setState({color: newState});
    }

    handleChangeSize = (size) => {
        let newState = update(this.state.size, {$set: size});
        this.setState({size: newState});
    }

    handleReset = () => {
        this.setState({
            color: "red",
            size: 12
        });
        this.refs.colorPicker.hanleReset();
        this.refs.sizeSetting.hanleReset();
    }

    render() {
        // console.log(this.state);
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ColorPicker ref="colorPicker" changeColorPicker={this.handleChaneColorPicker}/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting ref="sizeSetting" changeSize={this.handleChangeSize}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => this.handleReset()}>Reset</button>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Content color={this.state.color} size={this.state.size}/>
                    </div>
                </div>
                
            </div>
        );
    }
}