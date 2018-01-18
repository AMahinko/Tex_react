var AllPlanes = React.createClass({

  clickDelete(id) {
    console.log(id)
    this.props.handleDelete(id);
  },

  onUpdate(plane) {
    this.props.handleUpdate(plane);
  },



  render() {
    // console.log(this.props.planes)
    var planes_divs = [];
    for (i = 0; i < this.props.planes.length; i++) {
      planes_divs.push(<div key={this.props.planes[i].id}>
        <Plane plane={this.props.planes[i]}
        clickDelete = {this.clickDelete.bind(this, this.props.planes[i].id)}
        onUpdate={this.onUpdate}/>
      />
      <hr/>
      </div>)
      console.log(this.props.planes[i])
    }

      return(
        <div>
          <h1>
            Planes
          </h1>
          {planes_divs}
        </div>
      )

    }


});
