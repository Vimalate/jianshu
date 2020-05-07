import React ,{Component}from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
		HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button
		,SerchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchinfoItem,SearchInfoList
} from './style'

 

class Header extends Component{
	getListArea(){
		if(this.props.focused){
			return (
				<SearchInfo>
					<SearchInfoTitle>热门搜索
						<SearchInfoSwitch>换一换</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							this.props.list.map((item)=>{
								return <SearchinfoItem key={item}>{item}</SearchinfoItem>
								
							})
						}
					</SearchInfoList>
			</SearchInfo>
			)
		}else{
			return null
		}
	}
	render(){
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
				<CSSTransition in={this.props.focused} timeout={200} classNames='slide'>
				<NavSearch onFocus={this.props.handleInputFocus} className={this.props.focused?'focused':''} onBlur={this.props.handleInputBlur}></NavSearch>
				</CSSTransition>
				<i  className={this.props.focused?'focused iconfont icon-search':'iconfont icon-search'}></i>
				{this.getListArea()}
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
}

const mapStateToProps=(state)=>{
	return{
		focused:state.get('header').get('focused'),
		list:state.getIn(['header','list'])
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		handleInputFocus(){
			dispatch(actionCreators.searchFocus())
			dispatch(actionCreators.getList())
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)