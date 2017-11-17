import React, {Component} from 'react';

class SidebarHeader extends Component {

  render() { 
    // Uncomment following code lines to add Sidebar Header
    return (
      <div className="sidebar-header">
         <img src="https://avatars0.githubusercontent.com/u/20698868?s=400&v=4" class="img-avatar" alt="Avatar" />
        <div>
          <strong>Justin</strong>
        </div>
        <div class="text-muted">
          <small>Tech &amp; Data </small>
        </div>
      </div>
    )
  }
}

export default SidebarHeader;
