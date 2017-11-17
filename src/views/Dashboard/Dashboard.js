import React, { Component } from 'react';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card text-white bg-primary">
              <div className="card-body pb-0">
                <div className="btn-group float-right">
                  <button type="button" className="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="icon-settings"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <h4 className="mb-0">30,000+</h4>
                <p>浏览量</p>
              </div>
              <div className="chart-wrapper px-3" height="70px">
                <canvas id="card-chart1" className="chart" height="70"></canvas>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card text-white bg-info">
              <div className="card-body pb-0">
                <button type="button" className="btn btn-transparent p-0 float-right">
                  <i className="icon-location-pin"></i>
                </button>
                <h4 className="mb-0">1000+</h4>
                <p>注册人数</p>
              </div>
              <div className="chart-wrapper px-3" height="70px">
                <canvas id="card-chart2" className="chart" height="70"></canvas>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card text-white bg-warning">
              <div className="card-body pb-0">
                <div className="btn-group float-right">
                  <button type="button" className="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="icon-settings"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <h4 className="mb-0">3000</h4>
                <p>在线人数</p>
              </div>
              <div className="chart-wrapper px-3" height="70px">
                <canvas id="card-chart3" className="chart" height="70"></canvas>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card text-white bg-danger">
              <div className="card-body pb-0">
                <div className="btn-group float-right">
                  <button type="button" className="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="icon-settings"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <h4 className="mb-0">20</h4>
                <p>产品总数</p>
              </div>
              <div className="chart-wrapper px-3" height="70px">
                <canvas id="card-chart4" className="chart" height="70"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-5">
                <h4 className="card-title mb-0">分析</h4>
                <div className="small text-muted">2017-11</div>
              </div>               
            </div>
            <div className="chart-wrapper" height="300px" margin-top="40px">
              <canvas id="main-chart" className="chart" height="300"></canvas>
            </div>
          </div>
          <div className="card-footer">
             
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
