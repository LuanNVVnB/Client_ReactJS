import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ProductManage.scss";
class ProductManage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="text-center">
        <h1> 404 not found</h1>
        <div class="container">
          <h2>
            Responsive Tables Using LI <small>Triggers on 767px</small>
          </h2>
          <ul class="responsive-table">
            <li class="table-header">
              <div class="col col-1">Job Id</div>
              <div class="col col-2">Customer Name</div>
              <div class="col col-3">Amount Due</div>
              <div class="col col-4">Payment Status</div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="Job Id">
                42235
              </div>
              <div class="col col-2" data-label="Customer Name">
                John Doe
              </div>
              <div class="col col-3" data-label="Amount">
                $350
              </div>
              <div class="col col-4" data-label="Payment Status">
                Pending
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="Job Id">
                42442
              </div>
              <div class="col col-2" data-label="Customer Name">
                Jennifer Smith
              </div>
              <div class="col col-3" data-label="Amount">
                $220
              </div>
              <div class="col col-4" data-label="Payment Status">
                Pending
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="Job Id">
                42257
              </div>
              <div class="col col-2" data-label="Customer Name">
                John Smith
              </div>
              <div class="col col-3" data-label="Amount">
                $341
              </div>
              <div class="col col-4" data-label="Payment Status">
                Pending
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="Job Id">
                42311
              </div>
              <div class="col col-2" data-label="Customer Name">
                John Carpenter
              </div>
              <div class="col col-3" data-label="Amount">
                $115
              </div>
              <div class="col col-4" data-label="Payment Status">
                Pending
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
