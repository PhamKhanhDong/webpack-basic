export default class Header extends React.Component {
    render() {
        return(
            <div className="header-bar">
                <nav className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}