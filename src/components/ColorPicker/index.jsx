import './ColorPicker.scss';
// import _ from 'lodash';

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {color: "red", active: true},
                {color: "green", active: false},
                {color: "blue", active: false},
                {color: "gray", active: false}
            ]
        };

        this.colors = [
            {color: "red", active: false},
            {color: "green", active: false},
            {color: "blue", active: false},
            {color: "gray", active: false}
        ];
    }

    hanleReset = () => {
        this.setState({
            colors: [
                {color: "red", active: true},
                {color: "green", active: false},
                {color: "blue", active: false},
                {color: "gray", active: false}
            ]
        });
    }

    handleClick = (color) => {
        let index = this.state.colors.findIndex(item => item.color == color);
        let colors = this.colors;
        let newState = update(colors, {[index]: {$set: {color: color, active: true}}});
        this.setState({colors: newState});
        this.props.changeColorPicker(newState[index]);
    }

    render() {
        let  colors = this.state.colors;
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                  Color picker
                </div>
                <div className="panel-body">
                    {colors.map((item, index) => {
                        let color = item.color;
                        return(
                            <span 
                                className={`color-item ${item.active ? 'active' : ''}`} 
                                key={index} 
                                style={{background: color}}
                                onClick={() => this.handleClick(color)}
                                >
                            </span>
                        );
                    })}
                  
                </div>
            </div>
        );
    }
}