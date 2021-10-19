//Class Components

//Component Structure.
//Card
//List

//Top to Bottom


//Cardlist

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);
// Above Cleans up below
// [<Card />, <Card />, <Card />]
// [React.creatElement(), React.creatElement(), React.createElement()]


class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={{margin:'1rem'}}>
                <img src="profile.avatar_url" />
            <div className="info" style={{display:'inline-block', marginLeft: 10}}>
                <div className="name" style={{fontSize: '125%'}}>{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
        </div>
        );
    }
}

class Form extends React.Component {
    state = { userName: ''};
    handleSubmit = async (event) => {
        event.preventDefault();
        //axios library
        const resp = await
        axious.get('https://api.github.com/users/${this.state.userName}')
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                value={this.state.userName}
                onChange={event => this.setState({  userName: event.target.value })}
                placeholder="GitHub username" 
                required 
                />
                <button>Add card</button>
            </form>
        );
    }
}

class App extends React.Component {
state = {
    profiles: [],
};
addNewProfile = (profileData) => {
    this.setState(prevState => ({
        profiles: [...prevState.profiles,profileData],
    }));
};
render() {
    return ( 
        <div>
            <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} />
        </div>
        };
    ) 
}

//const App = ({title}) => (
//   <div className="header">{title}</div>
//);

ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode,
);

class ConditionalStyle extends React.Component {
    render() {
        return (
            <div style={{ color: Math.random() < 0.5 ? 'green' : 'red'}}>
                How do you like this?
            </div>
        );
    }
}

ReactDOM.render(
    <ConditionalStyle />,
    mountNode,
);