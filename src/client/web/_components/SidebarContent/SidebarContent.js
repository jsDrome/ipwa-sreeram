import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

import { list } from '../Blog/list';
import styles from './SidebarContent.style';

class SidebarContent extends Component {
  state = {
    selectedListItem: -1,
  }
  onSelect(i) {
    this.setState({
      selectedListItem: i,
    });
    this.props.onSelect();
  }
  isSelected(i) {
    const { selectedListItem } = this.state;
    return i === selectedListItem;
  }
  getClassname(i) {
    const { classes: { activeListItem, nestedListItem } } = this.props;
    return this.isSelected(i) ? activeListItem : nestedListItem;
  }
  render() {
    const { classes: { root, nestedListItemText }, onLinkClick } = this.props;
    return <div className={root}>
      {/* eslint-disable-next-line no-magic-numbers */}
      {list.slice(1).map((item, i) => <ListItem key={i} component={NavLink} onClick={() => this.onSelect(i)} className={this.getClassname(i)} to={item.route}>
        <ListItemText secondary={item.title} className={nestedListItemText} onClick={onLinkClick} />
      </ListItem>)}
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(SidebarContent);
