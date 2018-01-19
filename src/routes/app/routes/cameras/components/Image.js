import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class ImageBox extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };


  }


componentDidMount(){

  const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/GetUserCameraImages';

      fetch(BaseURL,
      {
       method: "POST",
       body: JSON.stringify({ "UserID":"132",
       "UserToken":"Dbr\/k5trWmO3XRTk3AWfX90E9jwpoh59w\/EaiU9df\/OkFa6bxluaKsQmBtKDNDHbBpplmFe2Zo06m6TOpxxDc3iaHQaFLsi1zXjBFsfQRVTewDXwdZZ5mxNdEp4HEdrIQY6VRqDvBzltACUdl2CB+gr1grGpDN+UmOnCUh9wD+BcROYXx5SmyTNtFYi+oKU7gjPLI9dWeoLk\/n3QJcNSOAwiCifNh8i3O2qSoOYc0xwL7EFvQ9x4t0I0zfWrSegeLHB3EjO\/\/ziEk9gyXySjSVK\/GPmT7Qvu",
       "CameraID" :"HDXQ-038400-YFCHE",
       "StartTime" :"12/05/2017 05:42:00",
       "EndTime" : "01/05/2018 05:42:00",
       "PageNumber" : "1" }),
        headers: new Headers({'content-type': 'application/json'}),
      })
  .then((Response)=> Response.json())
  .then((findresponse)=>{
      console.log(findresponse)
      this.setState({
         data:findresponse.GetUserCameraImagesResult.CameraImages,
      })
    })

}

  render() {

    return (
      <div className="box box-transparent">
        {
          this.state.data.map((dyanamicData,key)=>
          <div>
              {dyanamicData.ImageURL}
          </div>

         )
        }

          <center>
            <a href="cam-add-devices#/app/cameraDevices/add-devices">
                   <i className="material-icons">add</i><br />
                        Touch here to follow the instructions to add a camera
            </a>

          </center>




      </div>
    );
  }
}

const ImageSection = () => (
  <article className="article">
    <h2 className="article-title text-center no-margin-top">CAMERA<button className="float-right"><a href="cam-settings-menu#/app/camerasettings/add-devices">Add Device Instructions</a></button></h2>
    <section className="box box-default">
      <div className="box-body padding-xl">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-lg-12">
              <ImageBox />
            </div>

          </div>
        </div>
      </div>
    </section>
  </article>
);

module.exports = ImageSection;
