import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/HeroCopy';
import About from './components/About';
import Skill from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "teal";

  return (
    <div className='app'>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Skill color={color} />
      {/* <Experience color={color} /> */}
      <Projects color={color} />
      {/* <Resume color={color} /> */}
      <Contact color={color} />
      {/* <Footer /> */}
      <Toaster 
        toastOptions={{
          success: {
            style: {
              background: '#FFF9F0',
              borderRadius: 0,
            },
            iconTheme: {
              primary: '#7096D1',
              secondary: '#FFF9F0',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
        position="bottom-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
