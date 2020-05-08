import {
	fromJS
} from 'immutable'

import * as constants from './constants'

const defaultState = fromJS({
	title:'《让岁月变成诗》名人语录',
	content:'<img src="//upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg"></img><p>梁实秋说：你走，我不送你。你来，无论多大风多大雨，我要去接你。</p>'
})
export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_DETAIL:
			return state.merge({
				title:action.title,
				content:action.content
			})
		default:
			return state
	}

}