import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContextMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            location: {
                x: 0,
                y: 0,
            },
        };
        this.onRightClick = this.onRightClick.bind(this);
        this.onClickOff = this.onClickOff.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.onClickOff);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onClickOff);
    }

    onClickOff(event) {
        if (this.menuRef && !(event.target === this.menuRef || this.menuRef.contains(event.target))) {
            this.setState({
                open: false,
            });
        }
    }

    onRightClick(x, y) {
        this.setState(() => ({
            location: {
                x,
                y,
            },
        }));
    }

    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, {
                    onContextMenu: (event) => {
                        event.preventDefault();
                        this.onRightClick(event.pageX, event.pageY);
                    },
                })}
                {this.state.open &&
                    React.cloneElement(this.props.menu, {
                        style: {
                            ...this.props.menu.props.style,
                            position: 'absolute',
                            left: this.state.location.x,
                            top: this.state.location.y,
                        },
                    })
                }
            </div>
        );
    }
}

ContextMenu.propTypes = {
    children: PropTypes.node.isRequired,
    menu: PropTypes.node.isRequired,
};

export default ContextMenu;
