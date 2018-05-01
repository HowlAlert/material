
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
import cookie from 'react-cookies';


// const GOOGLE_MAPS_JS_API_KEY='AIzaSyAATCBLAB6FKMqK0HZMpt75zPQZVM9H4U4';


class GoogleMap extends React.Component {

  constructor() {
    super();
    this.state = {
        zoom: 15,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        latitude: '',
        longitude: '',

    }
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClicked = this.onMarkerClicked.bind(this);
    this.handleMapMount = this.handleMapMount.bind(this);

}


onMapClicked (props) {

    if (this.state.showingInfoWindow) {
        this.setState({

            showingInfoWindow: false,
            activeMarker: null,

        })

    }
      // console.log("In onclick");
      const location = window.navigator && window.navigator.geolocation

      if (location) {
        location.getCurrentPosition((position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        }, (error) => {
          this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
        })
      }
  console.log(this.state.latitude);
  console.log(this.state.longitude);

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
    // console.log(this.map.getBounds());

}


componentDidMount()
{


  const BaseURL ='https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetSpotCrimes';
   // 'http://sandbox.howlalarm.com/HOWL_WCF_SANDBOX/Service1.svc/GetSpotCrimes';


      fetch(BaseURL,
      {
       method: "POST",
       body: JSON.stringify({
         "UserID":cookie.load('Id'),
         "UserToken":cookie.load('UserToken'),
         "Radius":"0.01",
         "Lat":cookie.load('Latitude'),
         "Long":cookie.load('Longitude')
       }),
        headers: new Headers({'content-type': 'application/json'}),
      })
  .then((Response)=> Response.json())
  .then((findresponse)=>{
    console.log(findresponse);
    this.setState({
             GetSpotCrimesResult:JSON.parse(findresponse.GetSpotCrimesResult).crimes,

               })
        console.log(this.state.GetSpotCrimesResult);
  })


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



        <Map

            google={google}
            onClick={this.onMapClicked}

            initialCenter={{

              lat: cookie.load('Latitude'),
              lng: cookie.load('Longitude')

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


           containerStyle={{position: 'static'}}


          >

           {/* {this.getComponent()} */}


            {this.state.GetSpotCrimesResult.map(d => {

           if(d.type === "Arrest"){
               return (
                 <Marker
                      title={'Home Address Location '}
                      name={
                        <div>
                          {d.type}
                          <div>{d.address}</div>
                           <div>{d.date}</div>
                        </div>
                      }
                      onClick={this.onMarkerClicked}
                      position={{lat: d.lat,  lng: d.lon }}
                     icon={{
                              url: "assets/images/Arrest-Icon-Small.png",
                              anchor: new google.maps.Point(32,32),
                              scaledSize: new google.maps.Size(40,40)
                         }}


                    />
              )}

        if(d.type === "Assault"){
             return (
               <Marker
                    title={'Home Address Location '}
                    name={
                      <div>
                        {d.type}
                        <div>{d.address}</div>
                         <div>{d.date}</div>
                      </div>
                    }
                    onClick={this.onMarkerClicked}
                    position={{lat: d.lat,  lng: d.lon }}
                   icon={{
                            url: "assets/images/Assult-Icon-Small.png",
                            anchor: new google.maps.Point(32,32),
                            scaledSize: new google.maps.Size(40,40)
                       }}


                  />
            )}

         if(d.type === "Burglary"){
               return (
                 <Marker
                      title={'Home Address Location '}
                      name={
                        <div>
                          {d.type}
                          <div>{d.address}</div>
                           <div>{d.date}</div>
                        </div>
                        }
                      onClick={this.onMarkerClicked}
                        position={{lat: d.lat,  lng: d.lon }}
                     icon={{
                              url: "assets/images/Burglary-Icon-Small.png",
                              anchor: new google.maps.Point(32,32),
                              scaledSize: new google.maps.Size(40,40)
                         }}


                    />
              )}
              if(d.type === "Other"){
                   return (
                     <Marker
                          title={'Home Address Location '}
                          name={
                            <div>
                              {d.type}
                              <div>{d.address}</div>
                               <div>{d.date}</div>
                            </div>

                             }
                          onClick={this.onMarkerClicked}
                          position={{lat: d.lat,  lng: d.lon }}
                         icon={{
                                  url: "assets/images/Other-Icon-Small.png",
                                  anchor: new google.maps.Point(32,32),
                                  scaledSize: new google.maps.Size(40,40)
                             }}


                        />
                  )}

               if(d.type === "Robbery"){
                 return (
                   <Marker
                       title={'Home Address Location '}
                       name={
                         <div>
                           {d.type}
                           <div>{d.address}</div>
                            <div>{d.date}</div>
                         </div>
                        }
                       onClick={this.onMarkerClicked}
                         position={{lat: d.lat,  lng: d.lon }}
                      icon={{
                               url: "assets/images/Robbery-Icon-Small.png",
                               anchor: new google.maps.Point(32,32),
                               scaledSize: new google.maps.Size(40,40)
                          }}


                     />
                )}
                if(d.type === "Shooting"){
                    return (
                      <Marker
                           title={'Home Address Location '}
                           name={
                             <div>
                               {d.type}
                               <div>{d.address}</div>
                                <div>{d.date}</div>
                             </div>
                           }
                           onClick={this.onMarkerClicked}
                             position={{lat: d.lat,  lng: d.lon }}
                          icon={{
                                   url: "assets/images/Shooting-Icon-Small.png",
                                   anchor: new google.maps.Point(32,32),
                                   scaledSize: new google.maps.Size(40,40)
                              }}


                         />
                   )}
                if(d.type === "Theft"){
                    return (
                      <Marker
                           title={'Home Address Location '}
                          name={
                                <div>
                                  {d.type}
                                  <div>{d.address}</div>
                                   <div>{d.date}</div>
                                </div>

                                 }
                           onClick={this.onMarkerClicked}
                             position={{lat: d.lat,  lng: d.lon }}
                          icon={{
                                   url: "assets/images/Theft-Icon-Small.png",
                                   anchor: new google.maps.Point(32,32),
                                   scaledSize: new google.maps.Size(40,40)
                              }}


                         />
                   )}
                   if(d.type === "Vandalism"){
                       return (
                         <Marker
                              title={'Home Address Location '}
                              name={
                                 <div>
                                    {d.type}
                                    <div>{d.address}</div>
                                     <div>{d.date}</div>
                                  </div>
                                 }
                              onClick={this.onMarkerClicked}
                                position={{lat: d.lat,  lng: d.lon }}
                             icon={{
                                      url: "assets/images/Vandalism-Icon-Small.png",
                                      anchor: new google.maps.Point(32,32),
                                      scaledSize: new google.maps.Size(40,40)
                                 }}


                            />
                      )}
                      if(d.type === "Fire"){
                          return (
                            <Marker
                                 title={'Home Address Location '}
                                 name={
                                   <div>
                                     {d.type}
                                     <div>{d.address}</div>
                                      <div>{d.date}</div>
                                   </div>


                                     }
                                 onClick={this.onMarkerClicked}
                                   position={{lat: d.lat,  lng: d.lon }}
                                icon={{
                                         url: "assets/images/Fire-Arson-Icon-Small.png",
                                         anchor: new google.maps.Point(32,32),
                                         scaledSize: new google.maps.Size(40,40)
                                    }}


                               />
                         )}

        })}


              <Marker
                   title={'Home Address Location '}
                   name={fname+" "+lastname}
                   onClick={this.onMarkerClicked}
                   position={{lat: cookie.load('Latitude'),  lng: cookie.load('Longitude')}}
                  icon={{
                           url: "assets/images/howl-map-marker-small.png",
                           anchor: new google.maps.Point(32,32),
                           scaledSize: new google.maps.Size(64,64),

                      }}


                 />


                 <Marker
                      ttitle={'Home Address Location '}
                      name={fname+" "+lastname}
                      onClick={this.onMarkerClicked}
                     position={{lat: cookie.load('AlertLatitude'),  lng: cookie.load('AlertLongitude')}}
                     icon={{
                              url: "assets/images/howl-map-marker-small.png",
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
// apiKey: (GOOGLE_MAPS_JS_API_KEY)
})(GoogleMap);
