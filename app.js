const App = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    }
  },
  onInputChange: function(event) {
    this.setState({text: event.target.value});
  },
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>{this.state.text}</h2>
        <input type="text" onChange={this.onInputChange}/>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
