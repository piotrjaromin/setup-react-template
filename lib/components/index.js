import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    state = {
        answer: 42
    };

    asyncFunc = () => Promise.resolve(32112);

    async componentDidMount() {
        this.setState({ answer: await this.asyncFunc() });
    }

    render() {
        return (
            <h2>Hello {this.state.answer}</h2>
        );
    }
}

// const App = () => (
//     <h2>Hello React 2</h2>
// );

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
