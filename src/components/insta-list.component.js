import React, { Component } from "react";
import musicDataService from "../services/insta.service";
import '../styles/cards.css';
import '../styles/player.css'
import Insta from "./insta.component";

export default class PhotosList extends Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
    
        this.state = {
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,
        };
    
        this.unsubscribe = undefined;
        }
    
        componentDidMount() {
        this.unsubscribe = musicDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
        }
    
        componentWillUnmount() {
        this.unsubscribe();
        }
    
        onDataChange(items) {
        let tutorials = [];
    
        items.forEach((item) => {
            let id = item.id;
            let data = item.data();
            tutorials.push({
            id: id,
            title: data.title,
            description: data.description,
            published: data.published,
            url: data.url,
            });
        });
    
        this.setState({
            tutorials: tutorials,
        });
        }
    
        refreshList() {
        this.setState({
          currentTutorial: null,
            currentIndex: -1,
        });
        }
    
        setActiveTutorial = (tutorial) => {
        this.setState({
          currentTutorial: tutorial,
        });
        };
    
        
    
        render() {
        const { tutorials, currentTutorial } = this.state;
    
        return (
            <><div className="contenedorDeMiniatura">
            {tutorials.map((tutorial) => (
                <div className="miniatura" key={tutorial.title}>
                <div
                    className="card"
                    onClick={() => {
                    console.log("La tarjeta ha sido clickeada");
                    this.setActiveTutorial(tutorial);
                    }}
                >
                    <div className="image-container">
                    <img className="card-img-top image" src={tutorial.url} alt=""></img>
                    </div>
                </div>
                <h5 className="title">{tutorial.title}</h5>
                </div>
            ))}
            </div>
            <div className="mostrarImagen">
                {currentTutorial ? (
                <Insta
                    tutorial={currentTutorial}
                    refreshList={this.refreshList}
                    key={currentTutorial.id}
                />
                ) : (
                <div>
                </div>
                )}
            </div></>
        );
      }
}