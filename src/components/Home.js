import React, { Component } from 'react';
import MenuItems from "./MenuItems";
import YourOrders from "./YourOrders";
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Our Delicious Menu</h2>
                        <hr/>
                        <div>
                            {
                                this.props.stateArray.menuList.map((item, index) => {
                                    return (
                                        
                                      
                                        <MenuItems
                                            key={index}
                                            item={item}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Your Orders</h2>
                        <hr/>
                        <YourOrders/>
                        <div className="text-center">
                            <label className="h1 control-label">Total Price: {this.props.stateArray.total.totalvalue}</label>
                        </div>
                    </div>

                    
                </div>
            </div>

        );
    }
}

function mapStateToProps(stateArray) {
    return { stateArray };
}


export default connect(mapStateToProps, null)(Home);