import React,{Component} from 'react'
import Aux from '../../../../burger_builder_app/src/Hoc/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../../../../burger_builder_app/src/components/Navigation/Toolbar/Toolbar'
import Sidedrawer from '../../../../burger_builder_app/src/components/Navigation/Sidedrawer/Sidedrawer'
class Layout extends Component{

state={
    Sidedrawer:false 
}
SidedrawerClosedHandler=()=>{
    this.setState({
        Sidedrawer:false
    })
}
SidedrawertoggleHandler=()=>{
    this.setState((prevState,props)=>{
        return({
        Sidedrawer:!prevState.Sidedrawer
        })
    })
}

    render(){
        return(
            <Aux>
                 <Toolbar  drawtoggleclicked={this.SidedrawertoggleHandler}/>
                <Sidedrawer open={this.state.Sidedrawer} closed={this.SidedrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
    </Aux>
        );
}
}


export default Layout;