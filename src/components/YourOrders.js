/*
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from "../action/index";

class CartItems extends Component {

    render(){
        const {item} = this.props;
        const {qty} = this.props;
        console.log(item);

        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <div className="row justify-content-md-center">
                        <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                            <div
                                className="col-md-4 col-lg-4 col-sm-4 col-xs-4 col-md-offset-0 col-xs-offset-0 col-lg-offset-0">
                                <label>{item.fooditem}</label>
                            </div>
                            <div
                                className="col-md-3 col-lg-3 col-sm-3 col-xs-3 col-md-offset-1 col-xs-offset-1 col-lg-offset-1">
                                <label>Price: ${item.price} <br/> QTY: {qty}</label>
                            </div>
                            <div
                                className="col-md-2 col-lg-2 col-sm-2 col-xs-2 col-md-offset-1 col-xs-offset-1 col-lg-offset-1">
                                <input type="button" value="Remove"
                                       className="btn-group-lg btn-group-sm btn-group-xs btn-primary"
                                       id="btnAdd"
                                       onClick={() => {
                                           this.props.removeFromCart(item);
                                       }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart : (item) => dispatch(removeFromCart(item))
    };
}

export default connect(null, mapDispatchToProps)(CartItems);
*/


/* While passing initialstate from HomePage to CartItems page
 * and mapping its cart property as state to prop, we can perform this application in following way  */

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
                            <b>Price:</b> {item.price}$
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
