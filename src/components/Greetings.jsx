import React, { Component } from 'react';
import './Greetings.css';

class Greetings extends React.Component {
  render() {
    const { lang = 'en' } = this.props;
    const validLang = ['de', 'fr', 'es', 'en'];
    return (
      <div className="greetings">
        {lang === 'de' && <h3>Hallo {this.props.children}</h3>}
        {lang === 'fr' && <h3>Bonjour {this.props.children}</h3>}
        {lang === 'es' && <h3>Hola {this.props.children}</h3>}
        {lang === 'en' && <h3>Hello {this.props.children}</h3>}
        {!validLang.includes(lang) && <h3>Hello {this.props.children}</h3>}
      </div>
    );
  }
}

export default Greetings;
