var NewPlane = React.createClass({


  handleClick() {
    var model_id = this.refs.model_id.value;
    var description = this.refs.description.value;
    var latitude = this.refs.latitude.value;
    var longitude = this.refs.longitude.value;
    var elevation = this.refs.elevation.value;


    $.ajax({
      url: '/api/v1/planes',
      type: 'POST',
      data: { plane: {
        model_id: model_id,
        description: description,
        datetime: new Date(),
        latitude: latitude,
        longitude: longitude,
        elevation: elevation
      }}, success: (plane) => {
        console.log(plane[model_id])
        this.props.handleSubmit(plane);
      }
    })
  },



  render() {

    return (
      <div>
        <h3>New Plane</h3>
        <input ref='model_id' placeholder='Enter a model number' />
        {/* <input ref='datetime' placeholder='Enter a date and time (format: YYYY-MM-DD HH:MM:SS timezone)' /> */}
        <input ref='description' placeholder='Enter a description' />
        <input ref='latitude' placeholder='Latitude' />
        <input ref='longitude' placeholder='Logitude' />
        <input ref='elevation' placeholder='Elevation' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )

  }

});
