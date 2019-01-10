/*
 * @Author: JuYangjia
 * @Date: 2019-01-08 13:56:46
 * @Description: vantui组件按需加载，需要使用的vantui组件在这里注册
 */
import Vue from 'vue';

// 全局祖册vantui组件
import { 
    Button,
    NavBar,
    Icon,
    Popup,
    Field,
    Cell, CellGroup,
    Row, Col,Switch,
    Tab, Tabs,
    Swipe, SwipeItem,
    RadioGroup, Radio,
    Checkbox, CheckboxGroup,
    NumberKeyboard,
    Tag,
    PullRefresh,
    List 
} from 'vant'
Vue.use(Button)
.use(NavBar)
.use(Icon)
.use(Popup)
.use(Field)
.use(Cell)
.use(CellGroup)
.use(Row)
.use(Col)
.use(Switch)
.use( Tab)
.use( Tabs)
.use( Swipe)
.use( SwipeItem)
.use( RadioGroup)
.use( Radio)
.use( Checkbox)
.use( CheckboxGroup)
.use(NumberKeyboard)
.use(Tag )
.use(PullRefresh)
.use(List )
export default {
   
}