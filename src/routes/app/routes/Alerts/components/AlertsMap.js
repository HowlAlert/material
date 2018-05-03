import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import cookie from 'react-cookies';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';

const GOOGLE_MAPS_JS_API_KEY='AIzaSyAATCBLAB6FKMqK0HZMpt75zPQZVM9H4U4';

class GoogleMap extends React.Component {

  constructor() {
    super();
    this.state = {
        zoom: 13,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

    }

    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClicked = this.onMarkerClicked.bind(this);
    this.handleMapMount = this.handleMapMount.bind(this);
}

// handleBack(event) {
//   window.location.reload();
// }




onMapClicked (props) {
    if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })

    }
<<<<<<< HEAD
       console.log("In onclick");
=======
      // console.log("In onclick");
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f
        window.location.reload();
}

onMarkerClicked (props, marker, e) {
  this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
<<<<<<< HEAD
       console.log("In Marker");
=======
      // console.log("In Marker");
>>>>>>> a02cd271ac18fb85f437f94b3b64d915ce37ff4f


}
handleMapMount(mapProps, map) {
    this.map = map;

    //log map bounds
    //  console.log(this.map.getBounds());
}


render() {
    const {google} = this.props;

    if (!this.props.loaded) {
        return <div>Loading...</div>
    }
    // var fname=cookie.load('FirstName');
    //   console.log(fname);
    // var lname = cookie.load('LastName');
    // var lastname=lname.substr(0, 1);
    //   console.log(lastname);
    // var AlertDate=cookie.load('AlertDate');
    //    console.log(AlertDate)
    //   var AlertAddress=cookie.load('AlertAddress');
    //      console.log(AlertAddress)




    return (

      <div className="box box-default dkShadow overHidden">
        <div className="box-body height400">
           <h2 className="article-title-header">Triggered Alerts</h2>


        <Map
            google={google}
            onClick={this.onMapClicked}
            initialCenter={{
              lat: cookie.load('AlertLatitude'),  lng: cookie.load('AlertLongitude')

            }}
            zoom={this.state.zoom}
            onReady={this.handleMapMount}

           styles={[{"featureType":"all","elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},
             {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility": "off"}]},
             {"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},
             {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color": "#f5f5f5"}]},
             {"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color": "#bdbdbd"}]},
             {"featureType":"poi","elementType":"geometry","stylers":[{"color": "#eeeeee"}]},
             {"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},
             {"featureType":"poi.park","elementType":"geometry","stylers":[{"color": "#e5e5e5"}]},
             {"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color": "#9e9e9e"}]},
             {"featureType":"road","elementType":"geometry","stylers":[{"color": "#ffffff"}]},
             {"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color": "#757575"}]},
             {"featureType":"road.highway","elementType":"geometry","stylers":[{"color": "#dadada"}]},
             {"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color": "#616161"}]},
             {"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color": "#9e9e9e"}]},
             {"featureType":"transit.line","elementType":"geometry","stylers":[{ "color": "#e5e5e5"}]},
             {"featureType":"transit.station","elementType":"geometry","stylers":[{ "color":  "#eeeeee"}]},
             {"featureType":"water","elementType":"geometry","stylers":[{"color": "#c9c9c9"}]},
             {"featureType":"water","elementType":"labels.text.fill","stylers":[{"color": "#9e9e9e"}]}
           ]}
           style={{ width:"91%" , height:"81%"}}
            // style={{ width:"630" , height:"330"}}
          >

            <Marker
                 title={'Alert Details'}
                 // name={"Alert on " +
                 //  moment(new Date(AlertDate +" "+ 'UTC').toString()).format('DD-MMM-YYYY hh:mm:ss A')
                 //  }
                 onClick={this.onMarkerClicked}
                position={{lat: cookie.load('AlertLatitude'),  lng: cookie.load('AlertLongitude')}}
                icon={{
                         url: "assets/images/Howl-Final-Red-small.png",
                         anchor: new google.maps.Point(32,32),
                         scaledSize: new google.maps.Size(64,64)
                    }}


               />


                  <InfoWindow
                         marker={this.state.activeMarker}
                         visible={this.state.showingInfoWindow}>
                        <div>
                              <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                  </InfoWindow>

                  {/* <RaisedButton  primary label="Alert Location" /> */}




        </Map>
        <div className="row">
      <div className="col-lg-4">
      </div>

        <div className="col-lg-4">
          <div className="howlbackfull margin380" onClick={this.onMapClicked } primary label="Exit" >Close</div>

          </div>

        <div className="col-lg-4">
        </div>
        </div>
      </div>
        </div>



        );
    }
}

export default GoogleApiWrapper({
apiKey: (GOOGLE_MAPS_JS_API_KEY)
})(GoogleMap);
