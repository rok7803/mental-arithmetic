import React from 'react';
import Cookies from 'universal-cookie';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCookiePolicy: true,
    }
    //this.setCookie = this.setCookie.bind(this);
    this.setMyCat = this.setMyCat.bind(this);
    this.setPolicy = this.setPolicy.bind(this);
    this.removeMyCat = this.removeMyCat.bind(this);
    this.setCookiePolicyUnvisible = this.setCookiePolicyUnvisible.bind(this);
  }
  componentDidMount(){
    this.getCookie('cookiePolicy');
  }
  setCookie(cookieName){
    const cookies = new Cookies();
    const isSet = true;
    let d = new Date();
    d.setTime(d.getTime() + (90*24*60*60*1000));


    cookies.set(cookieName, isSet, { path: '/', expires: d});
    console.log(cookies.get(cookieName));
    if(cookieName === 'cookiePolicy') setInterval(this.setCookiePolicyUnvisible, 2000);
  }
  setMyCat(){
    this.setCookie('myCat');
  }
  setPolicy(){
    this.setCookie('cookiePolicy');
  }
  getCookie(cookieName){
    const cookies = new Cookies();

    const cookieValue = cookies.get(cookieName);
    if(cookieValue) this.setState({
      showCookiePolicy: false,
    });
    //console.log('In getCookie');
  }
  removeCookie(cookieName){
    const cookies = new Cookies();

    cookies.remove(cookieName,{ path: '/'});
    console.log('Cookie Removed', cookies.get(cookieName));
  }
  removeMyCat(){
    this.removeCookie('myCat');
  }
  setCookiePolicyUnvisible(){
    this.setState({
      showCookiePolicy: false,
    })
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.setMyCat}>Set Cookie</button>
        <button onClick={this.removeMyCat}>Remove Cookie</button>
        {this.state.showCookiePolicy && <div className="Cookie-Policy">
          <p>This site uses cookies. To use this site proberly, you have to accept cookies.</p>
          <button onClick={this.setPolicy}>Accept Cookies</button>
        </div>}
      </div>
    );
  }
}

export default App;
