import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../action/index'
import logo from '../logo-removebg-preview.png';

class MenuItems extends Component {

    render() {
        const { item } = this.props;
        return (
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-4" >
                        <div className="logo-block"> <img className="logo" src={logo} /></div>
                       
         
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <span className="mr-1"><b>{item.fooditem}</b></span>
                        <b>Price:</b> {item.price}$

                        </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">

                        <input type="button" value="Add" className="btn btn-primary" id="btnAdd"
                            onClick={() => {
                                this.props.addToCart(item);
                            }} />

                    </div>
                </div>
                <hr />
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => dispatch(addToCart(item))
    };
}

export default connect(null, mapDispatchToProps)(MenuItems);