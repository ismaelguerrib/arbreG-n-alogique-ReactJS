import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Button'

const familly = {
  papa: {
    firstname: 'Yazid',
    lastname: 'Guerrib',
    birth: '10 coctobre 1962',
    role: 'mon père',
    vote: 0
  },
  maman: {
    firstname: 'Isabelle',
    lastname: 'Teuffot',
    birth: '16 avril 1964',
    role: 'ma mère',
    vote: 0
  },
  merwan: {
    firstname: 'Merwan',
    lastname: 'Guerrib',
    birth: '2 novembre 1987',
    role: 'mon grand frère',
    vote: 0
  },
}
class App extends Component {
  state = { familly }
  handleClick = () => {
    const familly = { ...this.state.familly }
    familly.papa.vote += 1
    this.setState({ familly })
  };

  render() {
    const { familly } = this.state

    return (
      <Fragment>
        <div className="App">
          <h1> Ma famille </h1>
          <div>
            <h2> Je vais vous présenter les membres de ma famille :</h2>
            <Membre firstname={familly.papa.firstname} lastname={familly.papa.lastname} birth={familly.papa.birth} role={familly.papa.role} vote={familly.papa.vote} />
            <Membre firstname={familly.maman.firstname} lastname={familly.maman.lastname} birth={familly.maman.birth} role={familly.maman.role} vote={familly.maman.vote} />
            <Membre firstname={familly.merwan.firstname} lastname={familly.merwan.lastname} birth={familly.merwan.birth} role={familly.merwan.role} vote={familly.merwan.vote} />
            <Membre firstname="Idriss" lastname="Guerrib" birth="09 février 2017" role="mon neveu" />
            <Membre firstname="Sofyan-Elias" lastname="Guerrib" birth="28 avril 1990" role="mon grand-frère" />
            <Membre firstname="Ilyan" lastname="Guerrib" birth="28 decembre 2002" role="mon petit-frère" />
            <Membre firstname="Boukia" lastname="Boudmain" birth="26 octobre 1974" role="ma belle-mère" />
            <Membre firstname="Nour" lastname="Guerrib" birth="25 novembre 2016" role="ma petite-soeur" />
            <Membre firstname="Lina" lastname="Guerrib" birth="25 novembre 2016" role="ma petite-soeur" />
          </div>
          <Button voter={this.handleClick} />
        </div>

      </Fragment>
    );
  }

}

export default App;
