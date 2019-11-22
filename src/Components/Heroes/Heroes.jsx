import React from 'react';
import HeroCard from './HeroCard/HeroCard'

class Heroes extends React.Component {
  state = {
    heroes: []
  }

  // Получаем информацию с API по карточкам героев
  componentDidMount() {
    fetch('/users/all')
            .then(response => response.json())
            .then(result => {this.setState({heroes: result})})
            .catch(e => console.log(e));
  }

  // Переход к карточке героя
  getHero = id => {
    this.props.history.push(`/hero/${id}`);
  }

  // Удаление героя
  deleteHero = (id, event) => {
    event.stopPropagation();
    
    fetch(`/users?id=${id}`, {
      method: 'DELETE'})
          .then(response => response.json())
          .then(result => {
              console.log("Deleted Successeful")
          })
          .catch(e => console.log(e));
  }

  render() {
    return (
        <div>
          <h1>Hello, Heroes!</h1>
          {this.state.heroes.map((hero, i) => <HeroCard 
            getHero={this.getHero} 
            deleteHero={this.deleteHero}
            key={hero.id} 
            hero={hero}/>)}
        </div>
    );
  }
}

export default Heroes