
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
import cookie from 'react-cookies';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

 const GOOGLE_MAPS_JS_API_KEY='AIzaSyAATCBLAB6FKMqK0HZMpt75zPQZVM9H4U4';


class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        zoom: 15,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        GetSpotCrimesResult:'',
        lat1: '',
        lon1: ''

    }
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClicked = this.onMarkerClicked.bind(this);
    this.handleMapMount = this.handleMapMount.bind(this);
    this.centerMoved = this.centerMoved.bind(this);

}



onMapClicked (e) {


    if (this.state.showingInfoWindow) {
        this.setState({

            showingInfoWindow: false,
            activeMarker: null,

        })

    }
   //    console.log("In onclick");
   //    const location = window.navigator && window.navigator.geolocation
   //
   //    if (location) {
   //
   //      location.getCurrentPosition((position) => {
   //        this.setState({
   //          lat1: position.coords.latitude,
   //          lon1: position.coords.longitude,
   //        })
   //        console.log(this.state.lat1);
   //        console.log(this.state.lon1);
   //
   //        fetch('https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetSpotCrimes',
   //        {
   //         method: "POST",
   //         body: JSON.stringify({
   //           "UserID":cookie.load('Id'),
   //           "UserToken":cookie.load('UserToken'),
   //           "Radius":"0.02",
   //           // "Lat":this.state.lat1,
   //           // "Long":this.state.lon1
   //           "Lat":this.state.lat1,
   //           "Long":this.state.lon1
   //
   //         }),
   //          headers: new Headers({'content-type': 'application/json'}),
   //        })
   //        .then((Response)=> Response.json())
   //        .then((findresponse)=>{
   //        //console.log(findresponse);
   //        this.setState({
   //               GetSpotCrimesResult:JSON.parse(findresponse.GetSpotCrimesResult).crimes,
   //
   //                 })
   //           console.log(this.state.GetSpotCrimesResult);
   //
   //
   //
   //     }, (error) => {
   //          this.setState({ lat1: 'err-latitude', log1: 'err-longitude' })
   //       })
   //     })
   //
   // }
}

onMarkerClicked (props, marker, e) {
  this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
      // console.log(this.state.showingInfoWindow);

}
handleMapMount(props, map) {

    this.map = map;

    //log map bounds
    //  console.log(this.map.getBounds());

}

centerMoved(props, map, e) {

  var mapurl = map.rmiUrl ;        //To get Latitude & Longitude
  var dyn_latitude = mapurl.substring(mapurl.indexOf("@")+1,mapurl.indexOf(","))
  // console.log(dyn_latitude);
  var latstring = mapurl.substring(mapurl.indexOf("-"))
  var dyn_longitude = latstring.substring(latstring.indexOf("-"),latstring.indexOf(","))
    // console.log(dyn_longitude);


        fetch('https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetSpotCrimes',
        {
         method: "POST",
         body: JSON.stringify({
           "UserID":cookie.load('Id'),
           "UserToken":cookie.load('UserToken'),
           "Radius":"0.02",
           "Lat":dyn_latitude,
           "Long":dyn_longitude


         }),
          headers: new Headers({'content-type': 'application/json'}),
        })
    .then((Response)=> Response.json())
    .then((findresponse)=>{
        console.log(findresponse);
      this.setState({
               GetSpotCrimesResult:JSON.parse(findresponse.GetSpotCrimesResult).crimes,

                 })
           // console.log(this.state.GetSpotCrimesResult);
          // console.log(cookie.load('Latitude'));
          // console.log(cookie.load('Longitude'));


    })





}
componentDidMount()
{


  const BaseURL ='https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetSpotCrimes';
  // const BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF_SANDBOX/Service1.svc/GetSpotCrimes';


      fetch(BaseURL,
      {
       method: "POST",
       body: JSON.stringify({
         "UserID":cookie.load('Id'),
         "UserToken":cookie.load('UserToken'),
         "Radius":"0.02",
         "Lat":cookie.load('Latitude'),
         "Long":cookie.load('Longitude')


       }),
        headers: new Headers({'content-type': 'application/json'}),
      })
  .then((Response)=> Response.json())
  .then((findresponse)=>{
      //console.log(findresponse);
    this.setState({
             GetSpotCrimesResult:JSON.parse(findresponse.GetSpotCrimesResult).crimes,

               })


        // console.log(this.state.GetSpotCrimesResult);
        // console.log(cookie.load('Latitude'));
        // console.log(cookie.load('Longitude'));
        // console.log(  cookie.load('AlertLatitude'));
        // console.log(cookie.load('AlertLongitude'));



  })






}


render() {
    const {google} = this.props;

    if (!this.props.loaded) {
        return <div>Loading...</div>
    }
    var fname=cookie.load('FirstName');
   //   console.log(fname);
    var lname = cookie.load('LastName');
    var lastname=lname.substr(0, 1);
   //   console.log(lastname);



    return (



        <Map

            google={this.props.google}
            // onClick={this.onMapClicked}
            onClick={(e)=>this.onMapClicked()}

            initialCenter={{

              lat: cookie.load('Latitude'),
              lng: cookie.load('Longitude')

            }}
              onDragend={(e)=>this.centerMoved()}
            onDragend={this.centerMoved}
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
              // var alert_type = d.type ;
              // switch(alert_type) {
              //        case 'Arrest':
              //              return
              //              <Marker
              //                   title={'Home Address Location '}
              //                   // name={
              //                   //   <div>
              //                   //     {d.type}
              //                   //     <div>{d.address}</div>
              //                   //      <div>{d.date}</div>
              //                   //   </div>
              //                   // }
              //                   onClick={this.onMarkerClicked}
              //                   position={{lat: d.lat,  lng: d.lon }}
              //                  icon={{
              //                           url: "assets/images/Arrest-Icon-Small.png",
              //                           anchor: new google.maps.Point(32,32),
              //                           scaledSize: new google.maps.Size(40,40)
              //                      }}
              //
              //
              //                 />
              //        case 'Assault':
              //         return
              //        <Marker
              //             title={'Home Address Location '}
              //             // name={
              //             //   <div>
              //             //     {d.type}
              //             //     <div>{d.address}</div>
              //             //      <div>{d.date}</div>
              //             //   </div>
              //             // }
              //             onClick={this.onMarkerClicked}
              //             position={{lat: d.lat,  lng: d.lon }}
              //            icon={{
              //                     url: "assets/images/Assult-Icon-Small.png",
              //                     anchor: new google.maps.Point(32,32),
              //                     scaledSize: new google.maps.Size(40,40)
              //                }}
              //
              //
              //           />
              //        case 'Burglary':
              //         return
              //        <Marker
              //             title={'Home Address Location '}
              //             name={
              //               <div>
              //                 {d.type}
              //                 <div>{d.address}</div>
              //                  <div>{d.date}</div>
              //               </div>
              //               }
              //             onClick={this.onMarkerClicked}
              //               position={{lat: d.lat,  lng: d.lon }}
              //            icon={{
              //                     url: "assets/images/Burglary-Icon-Small.png",
              //                     anchor: new google.maps.Point(32,32),
              //                     scaledSize: new google.maps.Size(40,40)
              //                }}
              //
              //
              //           />
              //        case 'Other':
              //         return
              //        <Marker
              //             title={'Home Address Location '}
              //             name={
              //               <div>
              //                 {d.type}
              //                 <div>{d.address}</div>
              //                  <div>{d.date}</div>
              //               </div>
              //
              //                }
              //             onClick={this.onMarkerClicked}
              //             position={{lat: d.lat,  lng: d.lon }}
              //            icon={{
              //                     url: "assets/images/Other-Icon-Small.png",
              //                     anchor: new google.maps.Point(32,32),
              //                     scaledSize: new google.maps.Size(40,40)
              //                }}
              //
              //
              //           />
              //        case 'Robbery':
              //         return
              //        <Marker
              //             title={'Home Address Location '}
              //             name={
              //               <div>
              //                 {d.type}
              //                 <div>{d.address}</div>
              //                  <div>{d.date}</div>
              //               </div>
              //
              //                }
              //             onClick={this.onMarkerClicked}
              //             position={{lat: d.lat,  lng: d.lon }}
              //            icon={{
              //                     url: "assets/images/Robbery-Icon-Small.png",
              //                     anchor: new google.maps.Point(32,32),
              //                     scaledSize: new google.maps.Size(40,40)
              //                }}
              //
              //
              //           />
              //        case 'Shooting':
              //             return
              //
              //             <Marker
              //                  title={'Home Address Location '}
              //                  name={
              //                    <div>
              //                      {d.type}
              //                      <div>{d.address}</div>
              //                       <div>{d.date}</div>
              //                    </div>
              //
              //                     }
              //                  onClick={this.onMarkerClicked}
              //                  position={{lat: d.lat,  lng: d.lon }}
              //                 icon={{
              //                          url: "assets/images/Shooting-Icon-Small.png",
              //                          anchor: new google.maps.Point(32,32),
              //                          scaledSize: new google.maps.Size(40,40)
              //                     }}
              //
              //
              //                />
              //       case 'Theft':
              //             return
              //             <Marker
              //                  title={'Home Address Location '}
              //                  name={
              //                    <div>
              //                      {d.type}
              //                      <div>{d.address}</div>
              //                       <div>{d.date}</div>
              //                    </div>
              //
              //                     }
              //                  onClick={this.onMarkerClicked}
              //                  position={{lat: d.lat,  lng: d.lon }}
              //                 icon={{
              //                          url: "assets/images/Theft-Icon-Small.png",
              //                          anchor: new google.maps.Point(32,32),
              //                          scaledSize: new google.maps.Size(40,40)
              //                     }}
              //
              //
              //                />
              //       case 'Vandalism':
              //             return
              //             <Marker
              //                  title={'Home Address Location '}
              //                  name={
              //                    <div>
              //                      {d.type}
              //                      <div>{d.address}</div>
              //                       <div>{d.date}</div>
              //                    </div>
              //
              //                     }
              //                  onClick={this.onMarkerClicked}
              //                  position={{lat: d.lat,  lng: d.lon }}
              //                 icon={{
              //                          url: "assets/images/Vandalism-Icon-Small.png",
              //                          anchor: new google.maps.Point(32,32),
              //                          scaledSize: new google.maps.Size(40,40)
              //                     }}
              //
              //
              //                />
              //       case 'Fire':
              //             return
              //             <Marker
              //                  title={'Home Address Location '}
              //                  name={
              //                    <div>
              //                      {d.type}
              //                      <div>{d.address}</div>
              //                       <div>{d.date}</div>
              //                    </div>
              //
              //                     }
              //                  onClick={this.onMarkerClicked}
              //                  position={{lat: d.lat,  lng: d.lon }}
              //                 icon={{
              //                          url: "assets/images/Fire-Arson-Icon-Small.png",
              //                          anchor: new google.maps.Point(32,32),
              //                          scaledSize: new google.maps.Size(40,40)
              //                     }}
              //
              //
              //                />
              //
              //       default:
              //       return
              //       <Marker
              //            title={'Home Address Location '}
              //            name={
              //              <div>
              //                {d.type}
              //                <div>{d.address}</div>
              //                 <div>{d.date}</div>
              //              </div>
              //
              //               }
              //            onClick={this.onMarkerClicked}
              //            position={{lat: d.lat,  lng: d.lon }}
              //           icon={{
              //                    url: "assets/images/Fire-Arson-Icon-Small.png",
              //                    anchor: new google.maps.Point(32,32),
              //                    scaledSize: new google.maps.Size(40,40)
              //               }}
              //
              //
              //          />
              //
              //        }

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
