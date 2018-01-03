export function PostData(type, userData) {
    //let BaseURL = 'https://api.thewallscript.com/restful/';
    let BaseURL = 'http://sandbox.howlalarm.com/HOWL_WCF_Sandbox/Service1.svc/';

    return new Promise((resolve, reject) =>{

console.log(JSON.stringify(userData));
        fetch(BaseURL+type, {
            method: "POST",
          
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
            resolve(res);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });

      });
}
