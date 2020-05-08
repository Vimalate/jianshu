import React ,{Component}from 'react'
import {CSSTransition} from 'react-transition-group'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
		HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button
		,SerchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchinfoItem,SearchInfoList
} from './style'

 

class Header extends Component{
	getListArea(){
		const {focused,mouseIn,totalPage,list,page,handleMouseEnter,handleChangePage,handleMouseLeave} =this.props
		const pageList=[]
		const newList=list.toJS()
		if(newList.length){
			for(let i=(page-1)*10;i<page*10;i++){
				pageList.push(
					<SearchinfoItem key={newList[i]}>{newList[i]}</SearchinfoItem>
				)
			}
		}
		
		if(focused||mouseIn){
			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>热门搜索
						<SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>
							<i className="iconfont icon-gengxin"></i>
							换一换
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
			</SearchInfo>
			)
		}else{
			return null
		}
	}
	render(){
		const {focused,list,handleInputFocus,handleInputBlur} =this.props
		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo></Logo>
				</Link>
		<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载app</NavItem>
				<NavItem className='right'>登录</NavItem>
				<NavItem className='right'>
					Aa
				</NavItem>
				<SerchWrapper>
				<CSSTransition in={focused} timeout={200} classNames='slide'>
				<NavSearch onFocus={()=>handleInputFocus(list)} className={focused?'focused':''} onBlur={handleInputBlur}></NavSearch>
				</CSSTransition>
				<i  className={focused?'focused iconfont zoom icon-search':'iconfont icon-search zoom'}></i>
				{this.getListArea()}
				</SerchWrapper>
		</Nav>
		<Addition>
			<Button className='reg'>注册</Button>
			<Button className='writting'>
			<i className="iconfont icon-icon-checkin zoom"></i>
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
		list:state.getIn(['header','list']),
		page:state.getIn(['header','page']),
		mouseIn:state.getIn(['header','mouseIn']),
		totalPage:state.getIn(['header','totalPage']),
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		handleInputFocus(list){
			if(list.size===0){
			dispatch(actionCreators.getList())
			}
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page,totalPage){
			console.log(page,totalPage)
			if(page<totalPage){
				dispatch(actionCreators.changePage(page+1))
			}else{
				dispatch(actionCreators.changePage(1))
			}
		
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)