import React, {Component} from  'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class MenList extends Component {
    showList() {
        return this.props.men.map ( men =>{
            return(
                <li onClick={() => this.props.select(men)} key={men.id} className={'man' + men.id} ></li>
                );
        })
    }

    render(){
        return(
            <ul>
                {this.showList ()}
            </ul>
        );
    }
}

function mapStateToProps (state) {
    return{
        men: state.men
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({select: select}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MenList);