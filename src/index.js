import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingListPart from './myParts.js'
import MyList from './comp/myList';

const myUtils = require('./utils');

/*class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            myId:props.value
        };
    }
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.state.value}
            </button>
        );
    }
}*/

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (<Square
            value = {this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />);
    }


    render() {
        return (
            <div>
                <div className="status">{}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });




        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                    status={status}
                    />
                </div>

                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>


        );
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

}

class MyApp extends React.Component {
    state = {
        contacts: []
    }
    render(){
        return (
            <div className="MyApp">
                <div className="game_sec">
                    <Game/>
                </div>
                <h1> Below are for test </h1>
                <div className="shopping-list">
                    <ShoppingList name="Mark" />
                </div>

                <div className="shopping-list">
                    <ShoppingListPart name="Mark" />
                </div>
                <h1> Try JS functions </h1>
                <p>{getGreeting('mark')} </p>

                <h1> Try JS functions from import</h1>
                <p>{myUtils.getHelloFromImport('mark')} </p>

                <h1> Return from rest call</h1>
                <p><MyList contacts={this.state.contacts} /></p>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h2>Shopping List for {this.props.name}</h2>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
<MyApp />,
//    <ShoppingList name="Mark" />,
    document.getElementById('root')
);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


function getGreeting(user) {
    if (user) {
        return 'Hello, from  js function user = ' + user;
    }
    return 'Hello, from  js function';
}

