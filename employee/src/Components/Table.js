import React from "react";
import API from "../Utils/Api"
import Search from "../Components/Search"

class Table extends React.Component {

  state = {
    sortOrder: "",
    results: [],
    search: ""
  }

  componentDidMount() {
    API.ApiSearch()
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(this.state.results)
      }).catch(err => console.log(err))
  }


  handleInputChange = event => {

    if (event.target.name === "search") {
      const searchTerm = event.target.value.toLowerCase();
      this.setState({
        search: searchTerm
      })
    }
  }


  //Render items 
  render() {
    return (
      <div>
        <Search handleInputChange={this.handleInputChange}
          search={this.state.search} />

        <div className="table-responsive">
        <table className="table table-striped table-resposive text-center table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>First Name <span className="downArrow" onClick={this.sortByFName}></span></th>
                <th>Last Name <span className="downArrow" onClick={this.sortByLName}></span></th>
                <th>Phone Number</th>
                <th>Email</th>
              </tr>
            </thead>

            { //First Name sort
              this.state.results && this.state.results.map(item =>
                item.name.first.toLowerCase().includes(this.state.search) ?
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                      <td >{item.name.first}</td>
                      <td >{item.name.last}</td>
                      <td >{item.phone}</td>
                      <td >{item.email}</td>
                    </tr>
                  </tbody>

                  :
                  //Last Name sort
                  item.name.last.toLowerCase().includes(this.state.search) ?
                    <tbody key={item.login.uuid}>
                      <tr>
                      <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                        <td >{item.name.first}</td>
                        <td >{item.name.last}</td>
                        <td >{item.phone} </td>
                        <td >{item.email}</td>
                      </tr>
                    </tbody>
                    :
                    null
              )}
          </table>
        </div>
      </div>
    )
  }
}

export default Table;