import React, {Component} from "react";
import Navbar from "./../components/UserPage/Navbar/Navbar";
import Header from "./../components/UserPage/Header/Header";
import DataView from "./../components/UserPage/Data/DataView";
import { connect } from "react-redux";
import * as actions from "./../actions";

class UserPage extends Component {

  renderDataView = () => {
    if (this.props.statsData.renderDataView && this.props.statsData.playerFound) {
      return (
        <DataView statsData={this.props.statsData}/>
      )
    } else {
      return (
        <Header playerFound={this.props.statsData.playerFound}/>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar getStatsData={this.props.getStatsData} initStatsFetch={this.props.initStatsFetch} battletag={this.props.form} page={this.props.statsData.page} renderLoading={this.props.statsData.renderLoading}/>
        {this.renderDataView()}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    statsData: state.statsData,
    form: state.form
  }
}

export default connect(mapStateToProps, actions)(UserPage);