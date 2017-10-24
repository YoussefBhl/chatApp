import React from "react";


export default class Footer extends React.Component {
  render() {
    const style = {
    rightP:{
      float: 'right'
    },
    leftP:{
      float: 'left'
    }
  };
    return (
      <footer>
        <div class="row">
          <div class="col-lg-12">
            <hr />
            <p style={style.leftP}>Copyright &copy; ChatApp</p>
            <p style={style.rightP}>2017-2018</p>
          </div>
        </div>
      </footer>
    );
  }
}