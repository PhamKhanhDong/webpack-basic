export default class Product extends React.Component {
    render() {
        return(
            <div>
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img src="./../../../images/iphone-x.jpeg" alt=""/>
                        <div className="caption">
                            <h3>iphone 8</h3>
                            <p>
                                32.000.000 VND
                            </p>
                        </div>
                        <a href="#" className="btn btn-default">Add to cart</a>
                    </div>
                </div>
            </div>
        );
    }
}