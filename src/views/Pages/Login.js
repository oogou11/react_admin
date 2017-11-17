import React, { Component } from 'react';

class Login extends Component {   
      render(){
          return (
              <div className="app flex-row align-items-center">
              <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-group mb-4">
          <div className="card p-4">
            <div className="card-body">
              <h1>登 录</h1>
              <p className="text-muted">登录您的帐号</p>
              <div className="input-group mb-3">
                <span className="input-group-addon"><i className="icon-user"></i></span>
                <input type="text" className="form-control" placeholder="用户名" />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-addon"><i className="icon-lock"></i></span>
                <input type="password" className="form-control" placeholder="密码" />
              </div>
              <div className="row">
                <div className="col-6">
                  <button type="button" className="btn btn-primary px-4">登 录</button>
                </div>
                <div className="col-6 text-right">
                  <button type="button" className="btn btn-link px-0">忘记密码?</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card text-white bg-primary py-5 d-md-down-none" width="44%">
            <div className="card-body text-center">
              <div>
                <h2>注 册</h2>
                <p>注册后可以 获取更多的功能.</p>
                <button type="button" className="btn btn-primary active mt-3">立即注册!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
          )
      }
};

export default Login;