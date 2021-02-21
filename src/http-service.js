class Service {
  static URL = "http://104.198.201.4:8080";

  static async cpu() {
    
    const requestOptions = {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"POST, GET, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers":"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
      },
    };
    console.log('mierda')
    const DATA = await fetch(
      "http://104.198.201.4:8080/ram",
      requestOptions
    ).then((response) =>{response.json()
    console.log('mierda')});
    
    console.log(DATA,'LA DATA')
    return DATA;

  }
  static async ram() {
    const requestOptions = {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"POST, GET, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers":"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
      },
    };

    const DATA = await fetch(
      Service.URL + "/ram",
      requestOptions
    ).then((response) => response.json());

    const DATE = new Date();
    const HH = DATE.getHours().toString();
    const MM = DATE.getMinutes().toString();
    const SS = DATE.getSeconds().toString();

    return { name: `${HH}:${MM}:${SS}`, ram: DATA.Porcentaje };
  }
  static sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  static async conteo(){
    /*
    await Service.sleep(300);
    return {
      "Ejecucion": 0,
      "Suspendido": 108,
      "Detenido": 0,
      "Zombie": 0
    }
    */
    
    const requestOptions = {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"POST, GET, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers":"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
      },
    };

    const DATA = await fetch(
      Service.URL + "/conteo",
      requestOptions
    ).then((response) => response.json());
    return DATA;
    
  }

  static async kill(pid){
    
    const requestOptions = {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"POST, GET, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers":"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
      },
    };

    const DATA = await fetch(
      Service.URL + "/kill/"+pid,
      requestOptions
    ).then((response) => response.json());
    return DATA;
    
  }
}

export default Service;
