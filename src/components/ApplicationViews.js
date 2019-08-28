import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import OwnerForm from './owner/OwnerForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
// import Login from './auth/Login'


class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* <Route path="/login" compon/ent={Login} /> */}

        <Route exact path="/animals" render={props => {
          return <AnimalList {...props} />

        }} />

        {/* path to add a new animal */}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}{...props} />
        }} />

        <Route exact path="/locations" render={(props) => {
          return <LocationList {...props} />
        }} />

        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />

        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationlId to the LocationDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}{...props} />
        }} />

        <Route exact path="/employees" render={(props) => {
          return <EmployeeList {...props} />
        }} />

        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />

        <Route path="/owners" render={(props) => {
          return <OwnerList{...props} />
        }} />

        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
