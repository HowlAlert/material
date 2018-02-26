import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import cookie from 'react-cookies';



const GOOGLE_MAPS_JS_API_KEY='AIzaSyA_fAvgCclwN06F4wPstSINB6DlE2eTyx4';


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

onMapClicked (props) {
    if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })

    }
      console.log("In onclick");
}
onMarkerClicked (props, marker, e) {
  this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
      console.log("In Marker");
}
handleMapMount(mapProps, map) {
    this.map = map;

    //log map bounds
    console.log(this.map.getBounds());
}

render() {
    const {google} = this.props;

    if (!this.props.loaded) {
        return <div>Loading...</div>
    }
    var fname=cookie.load('FirstName');
     console.log(fname);
    var lname = cookie.load('LastName');
    var lastname=lname.substr(0, 1);
     console.log(lastname);

    return (


        <Map className='google-map'
            google={google}
            onClick={this.onMapClicked}
            initialCenter={{
              lat: 41.1798,
              lng: -73.1914

            }}
            zoom={this.state.zoom}
            onReady={this.handleMapMount}
            >
              <Marker
                   title={'Home Address Location '}
                   name={fname+" "+lastname}
                   onClick={this.onMarkerClicked}
                  position={{lat: 41.1798,  lng: -73.1914}}
                  icon={{
                           url: "assets/images//howl-map-marker-small.png",
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
        </Map>

        );
    }
}

export default GoogleApiWrapper({
apiKey: (GOOGLE_MAPS_JS_API_KEY)
})(GoogleMap);
