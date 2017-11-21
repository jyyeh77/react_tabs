import {Component} from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: 0
        };

        /**
         * @summary Set selected prop on component state to index of selected tab
         * @param index
         * @param event
         */
        const clickHandler = (index, event) => {
            event.preventDefault();
            this.setState({
                selected: index
            });
        };

        this.displayLabels = (child, index) => {
            const activeClass = this.state.selected === index ? 'active' : '';
            return (
                <li key={index}>
                    <a href="#">
                        className={activeClass}
                        onClick={clickHandler}
                        {child.props.label}
                    </a>
                </li>
            );
        };
    }

    renderTitles() {
        return (
            <ul className="tab_labels">
                {this.props.children.map(this.displayLabels)}
            </ul>
        )
    }

    renderContent () {
        return (
            <div className="tabs_content">
                {this.props.children[this.state.selected]}
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
  displayLabels: PropTypes.func
};

export default Tabs;