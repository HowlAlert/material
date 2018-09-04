
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
import cookie from 'react-cookies';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Icon_Details from '../../home/components/Icon_Details';
// import AlertBox from './AlertBox';

import RaisedButton from 'material-ui/RaisedButton';



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
        address: ' ',
        mapTypeId: 'roadmap',
        latitude:'',
        longitude:'',
        isVisible: true,
        // redirectToAlertBox: false,


    }
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClicked = this.onMarkerClicked.bind(this);
    this.handleMapMount = this.handleMapMount.bind(this);
    this.centerMoved = this.centerMoved.bind(this);
    // this.handleEnter = this.handleEnter.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
}

handleChange = (address) => {
   this.setState({ address })
 }

onMapClicked (e) {


    if (this.state.showingInfoWindow) {
        this.setState({

            showingInfoWindow: false,
            activeMarker: null,

        })

    }

}

  handleSelect(address){
       this.setState({ address })
       geocodeByAddress(address)
         .then(results => getLatLng(results[0]))
         .then(latLng =>{

           this.setState({
              latitude:latLng.lat,
              longitude:latLng.lng
           });
           // console.log(this.state.latitude);
           // console.log(this.state.longitude);

           fetch('https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetSpotCrimes',
           {
            method: "POST",
            body: JSON.stringify({
              "UserID":cookie.load('Id'),
              "UserToken":cookie.load('UserToken'),
              "Radius":"0.02",
              "Lat":this.state.latitude,
              "Long":this.state.longitude


            }),
             headers: new Headers({'content-type': 'application/json'}),
           })
       .then((Response)=> Response.json())
       .then((findresponse)=>{
           // console.log(findresponse);
         this.setState({
                  GetSpotCrimesResult:JSON.parse(findresponse.GetSpotCrimesResult).crimes,
                  redirectToReferrer: true

                    })
              // console.log(this.state.GetSpotCrimesResult);

       })
         })
         .catch(error => console.error('Error', error))


  }
//   handleEnter(address){
//        geocodeByAddress(address)
//          .then(results => getLatLng(results[0]))
//          .then(latLng =>{
//            // this.setState({
//            //     L1:latLng.lat,
//            //     L2:latLng.lng,
//            // })
//
//            cookie.save('Home_lat', this.state.latitude);
//            cookie.save('Home_lon', this.state.longitude);
//            this.setState({
//               latitude:latLng.lat,
//               longitude:latLng.lng
//              //  console.log(Home_lon);
//              // latitude:cookie.load('Home_lat'),
//              // longitude: cookie.load('Home_lon')
//            });
//            console.log(this.state.latitude);
//            console.log(this.state.longitude);
//
//            fetch('https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/GetSpotCrimes',
//            {
//             method: "POST",
//             body: JSON.stringify({
//               "UserID":cookie.load('Id'),
//               "UserToken":cookie.load('UserToken'),
//               "Radius":"0.02",
//               "Lat":this.state.latitude,
//               "Long":this.state.longitude
//
//
//             }),
//              headers: new Headers({'content-type': 'application/json'}),
//            })
//        .then((Response)=> Response.json())
//        .then((findresponse)=>{
//            // console.log(findresponse);
//          this.setState({
//                   GetSpotCrimesResult:JSON.parse(findresponse.GetSpotCrimesResult).crimes,
//                   redirectToReferrer: true
//
//                     })
//               console.log(this.state.GetSpotCrimesResult);
//
//        })
//          })
//          .catch(error => console.error('Error', error))
//
//
//
// }
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
     // console.log(props);

}

centerMoved(props, map, e) {
// console.log(map)
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
        // console.log(findresponse);
      this.setState({
               GetSpotCrimesResult:JSON.parse(findresponse.GetSpotCrimesResult).crimes,

                 })
           // console.log(this.state.GetSpotCrimesResult);
          // console.log(cookie.load('Latitude'));
          // console.log(cookie.load('Longitude'));


    })





}

handleTiggertAlert(e){
 this.setState({ redirectToAlertBox: true })
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
             // address:cookie.load('Address1')+ ','+ ' '+cookie.load('City')+','+ ' '+cookie.load('State')+','+ ' '+cookie.load('Zip')
             address:""
               })


        // console.log(this.state.GetSpotCrimesResult);
        // console.log(cookie.load('Latitude'));
        // console.log(cookie.load('Longitude'));
        // console.log(  cookie.load('AlertLatitude'));
        // console.log(cookie.load('AlertLongitude'));

  })

  // var Home_lat= cookie.load('Latitude');
  //  console.log(Home_lat);
  // var Home_lon = cookie.load('Longitude');
  //  console.log(Home_lon);

   // cookie.save('Home_lat', Home_lat);
   // console.log(cookie.load('Home_lat'));
   // cookie.save('Home_lon', Home_lon);
   // console.log(cookie.load('Home_lon'));


   // this.setState({
   //    latitude:Home_lat,
   //    longitude:Home_lon
   //   //  console.log(Home_lon);
   //   // latitude:cookie.load('Home_lat'),
   //   // longitude: cookie.load('Home_lon')
   // });


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

// const {redirectToAlertBox} = this.state
//    if(redirectToAlertBox === true)
//      {
//        return (
//           <AlertBox />
//         )
//       }

   const inputProps = {
   value: this.state.address,
   // onChange: this.onChange,
   onChange:this.handleChange,
   placeholder: 'Search address or information',
   // autoFocus: true,

    }
    // console.log(this.state.latitude);
    // console.log(this.state.longitude);


    const { redirectToReferrer} = this.state                     //To update the center of the map on change of address
      if(redirectToReferrer === true)
      {
        return (

                  <Map

                      google={this.props.google}
                      onClick={(e)=>this.onMapClicked()}
                     center=  {{
                        lat:this.state.latitude,
                        lng:this.state.longitude
                      }}

                      onDragend={this.centerMoved}
                      zoom={this.state.zoom}
                      onReady={this.handleEnter}
                      containerStyle={{position: 'static'}}
                      style={{left: '250',top: '80'}}

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
                                           url: "assets/images/Arrest-Icon-2.svg",
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
                                         url: "assets/images/Assult-Icon-2.svg",
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
                                           url: "assets/images/Burglary-Icon-2.svg",
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
                                               url: "assets/images/Other-Icon-2.svg",
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
                                            url: "assets/images/Robbery-Icon-2.svg",
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
                                                url: "assets/images/Shooting-Icon-2.svg",
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
                                                url: "assets/images/Theft-Icon-2.svg",
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
                                                   url: "assets/images/Vandalism-Icon-2.svg",
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
                                                      url: "assets/images/Fire-Arson-Icon-2.svg",
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
                             position={{lat:cookie.load('Latitude') ,  lng:cookie.load('Longitude') }}
                            icon={{
                                     url: "assets/images/howl-map-marker-small.png",
                                     anchor: new google.maps.Point(64,64),
                                     scaledSize: new google.maps.Size(128,128),

                                }}


                           />

                           <Marker
                                title={'New Address Location '}
                                // onClick={this.onMarkerClicked}
                                position={{lat:this.state.latitude ,  lng:this.state.longitude }}
                               icon={{
                                        url: "assets/images/howl-map-marker-small.png",
                                        anchor: new google.maps.Point(64,64),
                                        scaledSize: new google.maps.Size(128,128),

                                   }}


                              />

                            <InfoWindow
                                   marker={this.state.activeMarker}
                                   visible={this.state.showingInfoWindow}>
                                  <div>
                                        <h1>{this.state.selectedPlace.name}</h1>
                                  </div>
                            </InfoWindow>


                      <div className="col-lg-6 ">
                        <PlacesAutocomplete
            inputProps={inputProps}
             onSelect={this.handleSelect}
          />
                        {/* <PlacesAutocomplete inputProps={inputProps} onEnterKeyDown={this.handleEnter}  /> */}
                      </div>
                      <div className="IconBox">
                        {/* <div className="box box-default box-body homeAlert dkShadow"> */}
                          <Icon_Details/>

                      </div>
                  </Map>

         )
      }

    return (                     //Default Map load with home address


        <Map

            google={this.props.google}
            onClick={(e)=>this.onMapClicked()}

            initialCenter=  {{

              lat:cookie.load('Latitude'),
              lng:cookie.load('Longitude')
              // lat:this.state.latitude,
              // lng:this.state.longitude

            }}
           // center=  {{
           //    lat:this.state.latitude,
           //    lng:this.state.longitude
           //  }}

            onDragend={this.centerMoved}
            zoom={this.state.zoom}
            onReady={this.handleEnter}
            containerStyle={{position: 'static'}}
            style={{left: '250',top: '60'}}


          >


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
                              url: "assets/images/Arrest-Icon-2.svg",
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
                            url: "assets/images/Assult-Icon-2.svg",
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
                              url: "assets/images/Burglary-Icon-2.svg",
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
                                  url: "assets/images/Other-Icon-2.svg",
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
                               url: "assets/images/Robbery-Icon-2.svg",
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
                                   url: "assets/images/Shooting-Icon-2.svg",
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
                                   url: "assets/images/Theft-Icon-2.svg",
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
                                      url: "assets/images/Vandalism-Icon-2.svg",
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
                                         url: "assets/images/Fire-Arson-Icon-2.svg",
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
                   position={{lat:cookie.load('Latitude') ,  lng:cookie.load('Longitude') }}
                  icon={{
                           url: "assets/images/howl-map-marker-small.png",
                           anchor: new google.maps.Point(64,64),
                           scaledSize: new google.maps.Size(128,128),

                      }}


                 />

                 <Marker
                      title={'Home Address Location '}
                      name={fname+" "+lastname}
                      onClick={this.onMarkerClicked}
                      position={{lat:this.state.latitude ,  lng:this.state.longitude }}
                     icon={{
                              url: "assets/images/howl-map-marker-small.png",
                              anchor: new google.maps.Point(32,32),
                              scaledSize: new google.maps.Size(64,64),

                         }}


                    />
                 {/* <Marker
                      ttitle={'Home Address Location '}
                      name={fname+" "+lastname}
                      onClick={this.onMarkerClicked}
                      onEnterKeyDown={this.handleEnter}
                     position={{lat: cookie.load('Latitude'),  lng: cookie.load('Longitude')}}
                     icon={{
                              url: "assets/images/howl-map-marker-small.png",
                              anchor: new google.maps.Point(32,32),
                              scaledSize: new google.maps.Size(64,64)
                         }}


                    /> */}

                  <InfoWindow
                         marker={this.state.activeMarker}
                         visible={this.state.showingInfoWindow}>
                        <div>
                              <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                  </InfoWindow>


            <div className="col-lg-6 AddressSearchbar ">
              {/* <PlacesAutocomplete inputProps={inputProps} onEnterKeyDown={this.handleEnter}  /> */}
              <PlacesAutocomplete
  inputProps={inputProps}
   onSelect={this.handleSelect}
/>

            </div>

            <div className="IconBox">
              {/* <div className="box box-default box-body homeAlert dkShadow"> */}
                <Icon_Details/>

            </div>
            {/* <div className="col-lg-3 AlertBox"> */}
              {/* <div className="box box-default box-body homeAlert dkShadow"> */}
                   {/* <RaisedButton primary label="Tigger Alerts" onClick={(e)=>this.handleTiggertAlert(e)}/> */}
                   {/* <AlertBox /> */}

            {/* </div> */}




        </Map>


        );
    }
}

export default GoogleApiWrapper({
// apiKey: (GOOGLE_MAPS_JS_API_KEY)
})(GoogleMap);
