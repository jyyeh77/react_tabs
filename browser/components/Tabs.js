import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
    constructor (props) {
        super(props);

        const { activeTabIndex } = props;

        this.state = { activeTabIndex };

        /**
         * @summary Set selected prop on component state to index of selected tab
         * @param index
         * @param event
         */
        const clickHandler = (index) => {
            return (event) => {
                event.preventDefault();
                this.setState({
                    activeTabIndex: index
                });
            }
        };

        this.displayLabels = (child, index) => {
            const activeClass = this.state.activeTabIndex === index ? 'active' : '';
            return (
                <li key={index}>
                    <a href="#"
                        className={activeClass}
                        onClick={clickHandler(index)}>
                        {child.props.label}
                    </a>
                </li>
            );
        };
    }

    /**
     * @description Passes indices of child components to labels,
     * renders labels above panels
     * @returns {XML}
     */
    renderTitles() {
        return (
            <ul className="tab_labels">
                {this.props.children.map(this.displayLabels)}
            </ul>
        )
    }

    /**
     * @description Renders the correct child Pane component
     * @returns {XML}
     */
    renderContent () {
        return (
            <div className="tabs_content">
                {this.props.children[this.state.activeTabIndex]}
            </div>
        );
    }

    render() {
        return (
            <div className="tabs">
                {this.renderTitles()}
                {this.renderContent()}
            </div>
        )
    }
}

Tabs.propTypes = {
  renderTitles: PropTypes.func,
  displayLabels: PropTypes.func,
  activeTabIndex: PropTypes.number
};

Tabs.defaultProps = {
    activeTabIndex: 0
};

export default Tabs;