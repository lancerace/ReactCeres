var React = require('react');
var PropTypes = React.PropTypes;

var DashBoard = React.createClass({
   loadPlantFromServer: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            var length = data.length;
            //console.log(data[length - 1]);
            var lastData = data[length - 1]; //the json data that we want
            this.setState({ name: lastData['name'] });
            var gc = lastData['growing_conditions'];
            this.setState({ temp: gc['temp'] });
            this.setState({ humid: gc['humid'] });
            this.setState({ light: gc['light'] });
            this.setState({ power: gc['power'] });
        }.bind(this);
        xhr.send();
    },
   getInitialState: function(){
        return {
            name: '-',
            temp: '-',
            humid: '-',
            water: '-',
            care: '',
            light: '-',
            power: '-',
        }
    },
   componentDidMount: function(){
       this.loadPlantFromServer();
      //console.log("cdm main:" + this.state.main);
   },
   render: function() {
        return (
          <div id="page-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Dashboard</h1>
              </div>
                {/* /.col-lg-12 */}
            </div>
              {/* /.row */}
        <div className="row">
          
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-thermometer-empty fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.temp}°C</div>
                    <div>Temperature</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-green">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-tint fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.humid}%</div>
                    <div>Humidity</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-yellow">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-bolt fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.power}W</div>
                    <div>Electricity</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-red">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-sun-o fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.light}lm</div>
                    <div>Light Intensity</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="panel panel-success">
              <div className="panel-heading">
                <i className="fa fa-info-circle fa-fw" /> Information Panel
              </div>
                {/* /.panel-heading */}
        <div className="panel-body">
          <h4>Your CERES Unit is growing <span className="text-success">{this.state.name}<i className="fa fa-pagelines" aria-hidden="true" /></span></h4>
          <div className="list-group">
               <a href="#" className="list-group-item">
                  <i className="fa fa-birthday-cake fa-fw"></i> 22 November 2016
                    <span className="pull-right text-muted small">
                        <em>just today</em>
                    </span>
               </a>
              <a href="#" className="list-group-item">
                    <i className="fa fa-hourglass-end fa-fw"></i> 22 December 2016
                    <span className="pull-right text-muted small">
                        <em>29 days to go</em>
                    </span>
              </a>
          </div>
            {/* /.list-group */}
        <a href="#" className="btn btn-default btn-block">View All Info</a>
        </div>
                {/* /.panel-body */}
            </div>
              {/*/.panel*/}
          </div>
            {/*/.col-md-6 */}
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <i className="fa fa-bar-chart-o fa-fw" />Sunlight Intensity
            </div>
              {/* /.panel-heading */}
        <div className="panel-body">
          <div className="flot-chart">
            <div className="flot-chart-content" id="flot-line-chart-moving" style={{height: 400}} />
          </div>
        </div>
              {/* /.panel-body */}
          </div>
            {/* /.panel */}
        </div>
            {/* /.col-lg-12 */}
        </div>
              {/* /.row */}
          </div>
    );
}
});

module.exports = DashBoard;