import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

class App extends React.Component {
    render() {
        return (
            <div>
                <Tabs>
                    <Tab label="Tab 1">
                    </Tab>
                    <Tab label="Tab 2">
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default App;