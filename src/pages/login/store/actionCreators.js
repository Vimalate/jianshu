import axios from 'axios'
import * as constants from './constants'

const changeLogin =()=>({
  type:constants.CHANGE_LOGIN,
  value:true
}) 
export const logout=()=>({
  type:constants.CHANGE_LOGOUT,
  value:false
})
export const login=(account,password)=>{
  return (dispatch)=>{
    axios.get('/api/login.json?acconut'+account+'&password'+password).then(res=>{
      const result=res.data.data
      if(result){
        dispatch(changeLogin())
      }else{
        console.log('登录失败')
      }
      console.log(res)
    })
  }
}