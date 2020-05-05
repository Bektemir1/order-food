import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from "../action/index";

class CartItems extends Component {

    render() {
        return (
            <div>
                {this.getdata()}
            </div>
        );
    }

    getdata() {
        return this.props.stateArray.cart.map((item) => {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4  col-md-4 col-sm-4 col-xs-4 mb-3">
                            <b>{item.fooditem}</b>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-5 col-xs-4 mb-3">
                            <b>Price:</b> {item.price}$<br/>
                            <span> <b>Quantity: </b> {item.numberOfFoods}</span>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-4">
                            <input type="button" value="Remove"
                                className="btn btn-danger"
                                id="btnAdd"
                                onClick={() => {
                                    this.props.removeFromCart(item);
                                }}
                            />
                        </div>
                    </div>
                    <hr />
                </div>




            );
        })
    }
}

function mapStateToProps(stateArray) {
    return { stateArray };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => dispatch(removeFromCart(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
