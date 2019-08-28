
import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        loadingStatus: true,
    }

    componentDidMount() {
        console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to the data; put it into state
        AnimalManager.get(this.props.animalId)
            .then((animal) => {
                this.setState({
                    name: animal.name,
                    breed: animal.breed,
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        AnimalManager.delete(this.props.animalId)
            .then(() => this.props.history.push("/animals"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">

                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>Breed: {this.state.breed}</p>
                    <picture>
                        <img src={require('./images/dog.svg')} alt="My Dog" className="center" />
                    </picture>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>


                </div>
            </div>
        );
    }
}

export default AnimalDetail;