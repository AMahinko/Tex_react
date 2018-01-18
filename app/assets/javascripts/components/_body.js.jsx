var Body = React.createClass({

  getInitialState() {
    return { planes: []}
  },

  componentDidMount() {
     $.getJSON('/api/v1/planes.json', (response) => {
        this.setState({ planes: response })
      })
   },

   handleSubmit(plane) {

     var newState = this.state.planes.concat(plane)
     this.setState( {planes: newState} )

     console.log(plane)

   },



   handleDelete(id) {
     console.log(id)
     $.ajax({
       url:'/api/v1/planes/' + id,
       type: 'DELETE',
       success: () => {
         this.removePlane(id);

       }
     });
   },

   handleUpdate(plane) {
    $.ajax({
      url: `/api/v1/planes/${plane.id}`,
      type: 'PUT',
      data: { plane: plane },
        success: () => {
          this.updatePlanes(plane);
      }
    })
  },



   removePlane(id) {
     var newPlanes = this.state.planes.filter((plane) => {
       return plane.id != id;
     });
      this.setState({ planes: newPlanes });
   },

   updatePlanes(plane) {
     var planes = this.state.planes.filter((i) => { return i.id != plane.id });
       planes.push(plane);
       this.setState({planes: planes }); },


  render() {
    return (
      <div>
        <NewPlane handleSubmit = {this.handleSubmit} />
        <AllPlanes planes = {this.state.planes} handleDelete = {this.handleDelete} handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
});
