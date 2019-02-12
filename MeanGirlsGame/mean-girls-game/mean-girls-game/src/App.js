
import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import images from "./images.json";
import Image from "./components/image";
// import Footer from "./components/Footer";
class App extends Component {

  state = {images :images,
  score: 0,
topScore:0,}
  render() {
        return (
          <div>
            <Header score={this.state.score} topScore={this.state.topScore} />
            <Jumbotron />
            <main class="container">
              <div >
                <Image url={this.state.images[0].image} name={this.state.images[0].name}id={this.state.images[0].id} />
                <Image url={this.state.images[1].image} name={this.state.images[1].name} id={this.state.images[1].id} />
                <Image url={this.state.images[2].image} name={this.state.images[2].name}id={this.state.images[2].id} />
                <Image url={this.state.images[3].image} name={this.state.images[3].name} id={this.state.images[3].id} />
                <Image url={this.state.images[4].image} name={this.state.images[4].name}id={this.state.images[4].id} />
                <Image url={this.state.images[5].image} name={this.state.images[5].name}id={this.state.images[5].id} />
                <Image url={this.state.images[6].image} name={this.state.images[6].name} id={this.state.images[6].id} />
                <Image url={this.state.images[7].image} name={this.state.images[7].name} id={this.state.images[7].id} />
               <Image url={this.state.images[8].image} name={this.state.images[8].name} id={this.state.images[8].id} />
                <Image url={this.state.images[9].image} name={this.state.images[9].name} id={this.state.images[9].id} />
                <Image url={this.state.images[10].image} name={this.state.images[10].name} id={this.state.images[10].id} />
  
              </div>
            </main>
    {/* <Footer/> */}
          </div>
          
    );
  }
}

export default App;
