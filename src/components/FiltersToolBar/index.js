import React from "react";

import { push } from "redux-router";
import { connect } from "react-redux";

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import style from "./styles";


export class FiltersToolBarView extends React.Component {

    render() {
        const {
            filterOptions,
            context
        } = this.props

        if (!filterOptions || Object.keys(filterOptions).lengh === 0)
            return (
                <div></div>
            );

        return (
            <div className="text-right">
                <ul className="list-inline" style={style.list}>
                {filterOptions.map((configOptions, name) => {

                    let currentValue = context[configOptions.get("parameter")] || configOptions.get("default");

                    return (
                        <li style={style.listItem}>
                            <label style={style.label} htmlFor={name}>
                                {name}
                            </label>
                            <DropDownMenu
                                name={name}
                                value={currentValue}
                                style={style.dropdownMenu}
                                disabled={configOptions.get("disabled")}
                                >

                                {configOptions.get("options").map((option, index) => {

                                    let queryParams = Object.assign({}, context, {
                                        [configOptions.get("parameter")]: option.get("value")
                                    });

                                    let forceOptions = option.get("forceOptions");

                                    if (forceOptions)
                                        queryParams = Object.assign({}, queryParams, forceOptions.toJS());

                                    return (
                                        <MenuItem
                                            key={index}
                                            value={option.get("value")}
                                            primaryText={option.get("label")}
                                            style={style.menuItem}
                                            disabled={option.get("disabled")}
                                            onTouchTap={() => { this.props.goTo(window.location.pathname, queryParams);}}
                                            />
                                    )
                                })}
                            </DropDownMenu>

                        </li>
                    )

                })}
                </ul>
            </div>
        )
    }
}

FiltersToolBarView.propTypes = {
    filterOptions: React.PropTypes.object,
    context: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({

})

const actionCreators = (dispatch) => ({

    goTo: function(link, filters) {
        dispatch(push({pathname:link, query:filters}));
    }

});

export default connect(mapStateToProps, actionCreators)(FiltersToolBarView);