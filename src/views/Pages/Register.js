import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className='app flex-row align-items-center'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card mx-4">
                                <div className="card-body p-4">
                                    <h1>注册</h1>
                                    <p className="text-muted">注册帐号</p>
                                    <div className="input-group mb-3">
                                        <span className="input-group-addon"><i className="icon-user"></i></span>
                                        <input type="text" className="form-control" placeholder="用户名" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-addon">@</span>
                                        <input type="text" className="form-control" placeholder="邮箱" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-addon"><i className="icon-lock"></i></span>
                                        <input type="password" className="form-control" placeholder="密码" />
                                    </div>

                                    <div className="input-group mb-4">
                                        <span className="input-group-addon"><i className="icon-lock"></i></span>
                                        <input type="password" className="form-control" placeholder="重新录入密码" />
                                    </div>
                                    <button type="button" className="btn btn-block btn-success">创建帐号</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Register;