import React, {Component} from 'react';
import './App.css';

const App = () =>  <PersonList />;

const PersonList = () => {
      return (
              <section>
                <Person img="8" name="John" job="developer" >
                    <p>web, js, react</p>
                </Person>
                <Person img="6" name="Fredd" job="designer">
                    <p>ps, pr, ai</p>
                </Person>
                <Person img="93" name="Kennedy" job="blogger">
                    <p>blogging, analysing</p>
                </Person>
              </section>
      );
};

const Person = ({img,name,job, children}) => {
      const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
      return(
              <div className="person">
                    <img src={url} alt="person img" />
                    <div>
                          <h4>{name}</h4>
                          <h4>{job}</h4>
                          {children}
                    </div>
              </div>
            );
};




export default App;
