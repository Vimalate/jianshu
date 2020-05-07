import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import {
		HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button
		,SerchWrapper
} from './style'
export default class Header extends Component {
	constructor(props){
		super(props)
		this.state={
			focused:false
		}
		this.handleInputFocus=this.handleInputFocus.bind(this)
		this.handleInputBlur=this.handleInputBlur.bind(this)
	}
    render() {
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
										<CSSTransition in={this.state.focused} timeout={200} classNames='slide'>
                    <NavSearch onFocus={this.handleInputFocus} className={this.state.focused?'focused':''} onBlur={this.handleInputBlur}></NavSearch>
										</CSSTransition>
										<i  className={this.state.focused?'focused iconfont icon-search':'iconfont icon-search'}></i>
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
		handleInputFocus(){
			this.setState({
				focused:true
			})
		}
		handleInputBlur(){
			this.setState({
				focused:false
			})
		}
}
