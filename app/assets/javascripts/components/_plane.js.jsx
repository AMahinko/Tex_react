var Plane = React.createClass({

  getInitialState() {

    return{editable:false}


  },


  clickEdit() {

    if(this.state.editable) {
      var id = this.props.plane.id;
      var description = this.refs.description.value;
      var model_id = this.refs.model_id.value;
      var datetime = this.refs.datetime.value;
      var longitude = this.refs.longitude.value;
      var latitude = this.refs.latitude.value;
      var elevation =  this.refs.elevation.value;
      var plane = { id: id, description: description, model_id: model_id, datetime: datetime, longitude: longitude, latitude: latitude, elevation: elevation};
      this.props.onUpdate(plane);
    }

    this.setState({
      editable: !this.state.editable
    })


  },


  render() {

    console.log(this.state.editable);
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.plane.description} /> : <h3>{this.props.plane.description}</h3>
    var model_id = this.state.editable ? <input type='text' ref='model_id' defaultValue={this.props.plane.model_id} /> : <p>Model id: {this.props.plane.model_id}</p>
    var datetime = this.state.editable ? <input type='text' ref='datetime' defaultValue={this.props.plane.datetime} /> : <p>Date & time: {this.props.plane.datetime}</p>
    var longitude = this.state.editable ? <input type='text' ref='longitude' defaultValue={this.props.plane.longitude} /> : <p>Logitude: {this.props.plane.longitude}</p>
    var latitude = this.state.editable ? <input type='text' ref='latitude' defaultValue={this.props.plane.latitude} /> : <p>Latitude: {this.props.plane.latitude}</p>
    var elevation = this.state.editable ? <input type='text' ref='elevation' defaultValue={this.props.plane.elevation} /> : <p>Elevation: {this.props.plane.elevation}</p>

    return (
      <div>
        {description}
        {model_id}
        {datetime}
        {longitude}
        {latitude}
        {elevation}
        <button onClick={this.props.clickDelete} >Delete</button>
        <button onClick={this.clickEdit}> Edit </button>
      </div>
    )



  }

})
