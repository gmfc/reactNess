import React, { Component } from 'react'
import Header from './components/Header';
import Icon from './components/Icons'
import '../node_modules/nes.css/css/nes.min.css'
import './index.css'
import Container from './components/Container';
import Section from './components/Section';
import Button from './components/Button';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <h1>NES.css React</h1>
          <p>React NES-style CSS Framework.</p>
        </Header>
        <Section title='Buttons'>
          <div>
            <Button text='Normal' />    <Button text='Primary' primary />    <Button text='Success' success />    <Button text='Warning' warning />    <Button text='Error' error />    <Button text='Disabled' disabled />
          </div>
        </Section>
        <Section title='Containers'>
          <div className='containers'>
            <Container title='Container.is-centered' centered>
              <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </Container>
            <Container title='Container.is-dark' dark>
              <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </Container>
            <Container>
              <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </Container>
            <Container dark>
              <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </Container>
          </div>
        </Section>
        <Section title='Radios'>
          <div>
            <Radio text='Yes' name='answer' checked/>
            <Radio text='No' name='answer'/>
          </div>
        </Section>
        <Section title='Checkboxes'>
          <Checkbox text='Enable' name='checkbox' checked />
        </Section>
        <Section title='Icons'>
          <Container title='Reaction'>
            <Icon heart small /> <Icon heart /> <Icon heart medium/> <Icon heart large/>  <Icon heart empty/>
            <Icon star small /> <Icon star /> <Icon star medium/> <Icon star large/>  <Icon star empty/>
            <Icon star half /> <Icon star medium half /> <Icon star large half />
          </Container>
        </Section>
        
      </div>
    )
  }
}

export default App;
