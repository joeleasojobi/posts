import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
          <AppBar>
             <Toolbar>
             <Typography>Exapmles</Typography>
              <NavLink style={{padding:15, color:"#00FFFF"}} to='/'>View News</NavLink>
              <NavLink style={{padding:15, color:"#00FFFF"}} to='/posts'>View Posts</NavLink>
              <NavLink style={{padding:15, color:"#00FFFF"}} to='/products'>View Products</NavLink>
             </Toolbar>
          </AppBar>
      </div>
    )
  }
}
