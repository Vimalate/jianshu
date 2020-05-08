import React, {Component} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {
	HomeWrapper,
	HomeRight,
	HomeLeft
} from './style'
export default class index extends Component {
	render() {
		return ( 
		<HomeWrapper >
			<HomeLeft >
			<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
			<Topic></Topic>
			<List></List>
			</HomeLeft>
			<HomeRight > 
				<Recommend></Recommend>
				<Writer></Writer>
			</HomeRight> 
		</HomeWrapper>
		)
	}
}