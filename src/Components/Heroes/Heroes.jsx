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

  render() {
    return (
        <div>
          <h1>Hello, Heroes!</h1>
          {this.state.heroes.map((hero, i) => <HeroCard 
            getHero={this.getHero} 
            key={hero.id} 
            hero={hero}/>)}
        </div>
    );
  }
}

export default Heroes