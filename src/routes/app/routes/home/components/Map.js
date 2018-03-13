import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import cookie from 'react-cookies';


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
              lat: cookie.load('Latitude'),  lng: cookie.load('Longitude')

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
           // style={{ width:"85%"}}
          >
              <Marker
                   title={'Home Address Location '}
                   name={fname+" "+lastname}
                   onClick={this.onMarkerClicked}
                  position={{lat: cookie.load('Latitude'),  lng: cookie.load('Longitude')}}
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
