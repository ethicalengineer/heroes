import React from 'react';
import HeroCard from './HeroCard/HeroCard'

class Heroes extends React.Component {

  // Получаем информацию с API по карточкам героев
  componentDidMount() {
    this.props.getHeroes();
  }

  // Переход к карточке героя
  getHero = id => this.props.history.push(`/hero/${id}`);

  // Удаление героя
  deleteHero = (id, event) => {
    event.stopPropagation();
    this.props.deleteHero(id);
  }

  render() {
    return (
        <div>
          <h1>Hello, Heroes!</h1>
          {this.props.heroes.map((hero, i) => <HeroCard 
            getHero={this.getHero} 
            deleteHero={this.deleteHero}
            key={hero.id} 
            hero={hero}/>)}
        </div>
    );
  }
}

export default Heroes