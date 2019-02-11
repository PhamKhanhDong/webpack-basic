import './content.scss';
// import _ from 'lodash';

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           color: this.props.color,
           size: this.props.size
        }
    }

    render() {
        let style = {
            color: this.props.color,
            fontSize: `${this.props.size}px`
        };

        return (
            <div>
                <div>Color: {this.props.color} - Fontsize: {this.props.size}</div>
                <div style={style}>Nội dung setting</div>
            </div>
        );
    }
}