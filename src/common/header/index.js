import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
		HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button
		,SerchWrapper
} from './style'

const Header=(props)=>{
	return (
		<HeaderWrapper>
	<Logo></Logo>
	<Nav>
			<NavItem className='left active'>首页</NavItem>
			<NavItem className='left'>下载app</NavItem>
			<NavItem className='right'>登录</NavItem>
			<NavItem className='right'>
				Aa
			</NavItem>
			<SerchWrapper>
			<CSSTransition in={props.focused} timeout={200} classNames='slide'>
			<NavSearch onFocus={props.handleInputFocus} className={props.focused?'focused':''} onBlur={props.handleInputBlur}></NavSearch>
			</CSSTransition>
			<i  className={props.focused?'focused iconfont icon-search':'iconfont icon-search'}></i>
			</SerchWrapper>
	</Nav>
	<Addition>
		<Button className='reg'>注册</Button>
		<Button className='writting'>
		<i className="iconfont icon-icon-checkin"></i>
			写文章
		</Button>
	</Addition>
</HeaderWrapper>
	)
}

const mapStateToProps=(state)=>{
	return{
		focused:state.header.get('focused')
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		handleInputFocus(){
			const action=actionCreators.searchFocus()
			dispatch(action)
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)