import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class login extends PureComponent {
  render() {
    const {loginStatus} =this.props
    if(loginStatus){
      return (
				<div>write</div>
		)
    }else{
      return <Redirect to='/login'></Redirect>
    }
		
}

}

const mapState=(state)=>({
	loginStatus:state.getIn(['login','login'])
})

export default connect(mapState,null)(login) 
