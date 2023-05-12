import './index.scss';
import { Fragment } from 'react';
import Navigation from './components/navigation/navigation.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import Projects from './components/projects/projects.component';
import Skills from './components/skills/skills.component';

function App() {
  return (
    <Fragment>
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Fragment>
  );
}

export default App;
