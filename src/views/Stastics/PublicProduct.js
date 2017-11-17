import React, { Component } from 'react';

class PublicProduct extends Component {

    render() {
        return (
            <div className="animated fadeIn">
                <div className="card-columns cols-2">
                    <div className="card">
                        <div className="card-header">
                            组合
                        </div>
                        <div className="card-body">
                            <div className="chart-wrapper">
                                <canvas id="canvas-1"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            投资比例
                        </div>
                        <div className="card-body">
                            <div className="chart-wrapper">
                                <canvas id="canvas-3"></canvas>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default PublicProduct;