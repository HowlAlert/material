
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
import cookie from 'react-cookies';


const GOOGLE_MAPS_JS_API_KEY='AIzaSyAATCBLAB6FKMqK0HZMpt75zPQZVM9H4U4';


class GoogleMap extends React.Component {

  constructor() {
    super();
    this.state = {
        zoom: 15,
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
            activeMarker: null,

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


componentDidMount()
{

  this.setState({

       points: [
         {"cdid": 107986877, "type": "Arrest", "date": "04/24/18 12:26 AM", "address": "00 BLOCK OF LAWTON ST"},
         {"cdid": 107969554, "type": "Assault", "date": "04/23/18 01:50 PM", "address": "300 BLOCK OF 5 AVE"},
         {"cdid": 107951903, "type": "Burglary", "date": "04/16/18 08:27 AM", "address": "00 BLOCK OF ELIZABETH ST"},
         {"cdid": 107944910, "type": "Other", "date": "04/21/18 06:14 PM", "address": "100 BLOCK OF UNITED NATIONS PZ"},
         {"cdid": 107986200, "type": "Robbery", "date": "04/23/18 09:56 PM", "address": "500 BLOCK OF WEST 56TH ST"},
         {"cdid": 107931936, "type": "Shooting", "date": "04/22/18 12:07 PM", "address": "HENDRIX ST AND SUTTER AVE"},
         {"cdid": 107834468, "type": "Theft", "date": "04/15/18 10:00 PM", "address": "200 BLOCK OF E 15TH ST"},
         {"cdid": 108020779, "type": "Vandalism", "date": "04/24/18 10:35 PM", "address": "100 BLOCK OF LINCOLN AVE"},
         {"cdid": 108020779, "type": "Fire", "date": "04/24/18 10:35 PM", "address": "100 BLOCK OF LINCOLN AVE"},

        ]

  });
// const feedURL = 'http://api.spotcrime.com/crimes.json?key=17e9771d2c12fbe024563b0a77ee9f9976c3bea0eb30337a27dcb6c2e4ce&format=json';
//   fetch(feedURL,
// {
// method:'GET',
// mode:'no-cors',
// headers: new Headers({'Access-Control-Allow-Origin':'*',
// 'Content-Type': 'multipart/form-data'
// })
//
// })
//
//   .then(data => {
//       this.setState({
//           data: data
//
//       });
//
//       console.log(data)
//   })
//   .catch(resp => {
//       console.error(resp);
//   })
//


}
// getComponent(){
// {  switch (this.state.points.map(d =>d.type))
//   {
//       case 'Arrest': <Marker
//            title={'Home Address Location '}
//            name={this.state.points.address}
//            onClick={this.onMarkerClicked}
//            position={{lat: 40.9102073,  lng: -73.7827056 }}
//           icon={{
//                    url: "assets/images//Arrest-Icon-Small.png",
//                    anchor: new google.maps.Point(32,32),
//                    scaledSize: new google.maps.Size(40,40)
//               }}
//
//
//          /> ; break;
//       case 'Assault':<Marker
//            title={'Home Address Location '}
//            name={this.state.points.address}
//            onClick={this.onMarkerClicked}
//            position={{lat: 40.7143206,  lng: -73.9802421 }}
//           icon={{
//                    url: "assets/images//Assult-Icon-Small.png",
//                    anchor: new google.maps.Point(32,32),
//                    scaledSize: new google.maps.Size(40,40)
//               }}
//
//
//          />; break;
//
//       default:  <Marker
//             title={'Home Address Location '}
//             name={this.state.points.address}
//             onClick={this.onMarkerClicked}
//             position={{lat: 40.7530871,  lng: -73.9678144 }}
//            icon={{
//                     url: "assets/images//Other-Icon-Small.png",
//                     anchor: new google.maps.Point(32,32),
//                     scaledSize: new google.maps.Size(40,40)
//                }}
//
//
//           />;
//
//
// }}
// }

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


    var type = this.state.points["0"].type
    console.log(type)


    return (



        <Map className='google-map'

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


            {this.state.points.map(d => {

           if(d.type === "Arrest"){
               return (
                 <Marker
                      title={'Home Address Location '}
                      name={this.state.points.address}
                      onClick={this.onMarkerClicked}
                      position={{lat: 40.9102073,  lng: -73.7827056 }}
                     icon={{
                              url: "assets/images//Arrest-Icon-Small.png",
                              anchor: new google.maps.Point(32,32),
                              scaledSize: new google.maps.Size(40,40)
                         }}


                    />
              )}

        if(d.type === "Assault"){
             return (
               <Marker
                    title={'Home Address Location '}
                    name={this.state.points.address}
                    onClick={this.onMarkerClicked}
                    position={{lat: 40.7143206,  lng: -73.9802421 }}
                   icon={{
                            url: "assets/images//Assult-Icon-Small.png",
                            anchor: new google.maps.Point(32,32),
                            scaledSize: new google.maps.Size(40,40)
                       }}


                  />
            )}

         if(d.type === "Burglary"){
               return (
                 <Marker
                      title={'Home Address Location '}
                      name={this.state.points.address}
                      onClick={this.onMarkerClicked}
                      position={{lat: 40.7414098,  lng: -73.9833599 }}
                     icon={{
                              url: "assets/images//Burglary-Icon-Small.png",
                              anchor: new google.maps.Point(32,32),
                              scaledSize: new google.maps.Size(40,40)
                         }}


                    />
              )}
              if(d.type === "Other"){
                   return (
                     <Marker
                          title={'Home Address Location '}
                          name={this.state.points.address}
                          onClick={this.onMarkerClicked}
                          position={{lat: 40.7530871,  lng: -73.9678144 }}
                         icon={{
                                  url: "assets/images//Other-Icon-Small.png",
                                  anchor: new google.maps.Point(32,32),
                                  scaledSize: new google.maps.Size(40,40)
                             }}


                        />
                  )}

               if(d.type === "Robbery"){
                 return (
                   <Marker
                       title={'Home Address Location '}
                       name={this.state.points.address}
                       onClick={this.onMarkerClicked}
                       position={{lat: 40.7687448,  lng: -73.9902906 }}
                      icon={{
                               url: "assets/images//Robbery-Icon-Small.png",
                               anchor: new google.maps.Point(32,32),
                               scaledSize: new google.maps.Size(40,40)
                          }}


                     />
                )}
                if(d.type === "Shooting"){
                    return (
                      <Marker
                           title={'Home Address Location '}
                           name={this.state.points.address}
                           onClick={this.onMarkerClicked}
                           position={{lat: 40.6703256,  lng: -73.8887778}}
                          icon={{
                                   url: "assets/images//Shooting-Icon-Small.png",
                                   anchor: new google.maps.Point(32,32),
                                   scaledSize: new google.maps.Size(40,40)
                              }}


                         />
                   )}
                if(d.type === "Theft"){
                    return (
                      <Marker
                           title={'Home Address Location '}
                           name={this.state.points.address}
                           onClick={this.onMarkerClicked}
                           position={{lat: 40.7270939,  lng: -73.9526728 }}
                          icon={{
                                   url: "assets/images//Theft-Icon-Small.png",
                                   anchor: new google.maps.Point(32,32),
                                   scaledSize: new google.maps.Size(40,40)
                              }}


                         />
                   )}
                   if(d.type === "Vandalism"){
                       return (
                         <Marker
                              title={'Home Address Location '}
                              name={this.state.points.address}
                              onClick={this.onMarkerClicked}
                              position={{lat:40.9020274,  lng: -73.7823738 }}
                             icon={{
                                      url: "assets/images//Vandalism-Icon-Small.png",
                                      anchor: new google.maps.Point(32,32),
                                      scaledSize: new google.maps.Size(40,40)
                                 }}


                            />
                      )}
                      if(d.type === "Fire"){
                          return (
                            <Marker
                                 title={'Home Address Location '}
                                 name={this.state.points.address}
                                 onClick={this.onMarkerClicked}
                                 position={{lat:40.7348362,  lng: -73.8735609 }}
                                icon={{
                                         url: "assets/images//Fire-Arson-Icon-Small.png",
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
                           url: "assets/images//howl-map-marker-small.png",
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
