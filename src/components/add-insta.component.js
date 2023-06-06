import React, { Component } from "react";
import musicDataService from "../services/insta.service";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "../styles/add.css";

export const storage = firebase.storage();

export default class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
        title: "",
        description: "",
        published: false,
        submitted: false,
        file : null,
        url: "",
        uploadProgress: 0
        };
    }
    onChangeFile(e) {
        console.log(e.target.files[0]);
        this.setState({
            file : e.target.files[0],
        })
    }

    handleUpLoad(e, file) {
        e.preventDefault();
        const uploadTask = storage.ref('/fotos/' + file.name).put(file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({
                uploadProgress: progress
                });
            },
            console.error,
            () => {
                storage
                .ref("fotos")
                .child(file.name)
                .getDownloadURL()
                .then((myurl) => {
                    this.setState({
                    url: myurl
                    }, () => {
                    if (this.state.url !== "") {
                        this.saveTutorial();
                    }
                    });
                });
            }
            );
        }

        saveTutorial() {
            this.setState({
              loading: true, // establecer loading en verdadero al iniciar la carga
              message: "" // borrar cualquier mensaje previo
            });

            let data = {
                title: this.state.title,
                description: this.state.description,
                published: false,
                url: this.state.url // asignar la URL al objeto 'data'
                };
            
                musicDataService.create(data)
                .then(() => {
                    console.log("Created new Tutorials song successfully!");
                    this.setState({
                    loading: false, // establecer loading en falso al completar la carga
                    submitted: true,
                    message: "The clip was uploaded successfully.",
                    progress: 0 // restablecer la barra de progreso
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
            }
            onChangeTitle(e) {
                this.setState({
                    title: e.target.value,
                });
            }
        
            onChangeDescription(e) {
                this.setState({
                description: e.target.value,
                });
            }
        
            newTutorial() {
                this.setState({
                title: "",
                description: "",
                published: false,
                submitted: false,
                url: ""
                });
            }
            
            render() {
                return (
                    <div className="submit">
                        {this.state.submitted ? (
                        <div>
                            <h4>Se guardo correctamente</h4>
                            <button className="btn-success" onClick={this.newClip}>
                            Agregar Musico
                            </button>
                        </div>
                        ) : (
                        <div>
                            <div className="form">
                            <label htmlFor="title">Nombre: </label>
                            <input
                                type="text"
                                className="form-title"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                            </div>
                            <div className="form">
                    <label htmlFor="description">Descripcion: </label>
                    <input
                        type="text"
                        className="form-description"
                        id="description"
                        required
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        name="description"
                    />
                    </div>
        
                    <div>
                    <form
                        onSubmit={(event) => {
                        this.handleUpLoad(event, this.state.file);
                        }}
                    >
                        <input
                        type="file"
                        onChange={(event) => {
                            this.onChangeFile(event);
                        }}
                        />
                        <br></br>
                        <button disabled={!this.state.file}>Publicar recuerdo</button>
                    </form>
                    {/* mostrar estado de carga */}
                    {this.state.uploadProgress > 0 && (
                        <div>Subiendo recuerdo: {this.state.uploadProgress}%</div>
                    )}
                    <img src={this.state.url} alt="" />
                    </div>
        
                </div>
                )}
            </div>
          );
        }
}
        
