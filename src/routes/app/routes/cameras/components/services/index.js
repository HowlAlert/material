
export function Add_Devices(type, userData)
{

   let BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/';

   return new Promise((resolve, reject) =>{
        fetch(BaseURL+type,
           {
            method: "POST",
            body: JSON.stringify(userData),
            headers: new Headers({'content-type': 'application/json'}),
          })
          .then((response) => response.json())
          // .then((res) => {
          //             console.log(res);
          //             resolve(res);
          //           })
          .then( data => {
                let Images = data.response.map((pic)=>{
                  return(
                    <div key={pic.results}>
                       <img key={pic.response} src={pic.CameraImages.CameraID} />
                    </div>

                  )
                })
                    .catch((error) => {
                      console.log(error);
                      reject(error);
                    });

                });
}
