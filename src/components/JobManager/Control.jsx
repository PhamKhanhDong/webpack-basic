import Search from './Search';
import Sort from './Sort';

export default class Control extends React.Component {
    render() {
        return(
            <div className="row mt-15">
               <Search onSearch={this.props.onSearch}/>
               <Sort onSort={this.props.onSort} sort={this.props.sort}/>
            </div>
        );
    }
}
