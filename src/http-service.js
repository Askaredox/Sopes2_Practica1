class Service {
  static URL = "http://104.198.201.4:8080";

  static async cpu() {
    
    const requestOptions = {
      mode: "cors",
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    const DATA = await fetch(
      Service.URL + "/ram",
      requestOptions
    ).then((response) => response.json());
    return DATA;
    
    /*
    await Service.sleep(300);
    return [
      {
        PID: 1,
        Nombre: "systemd",
        Estado: 1,
        uid: 0,
        mm: 0,
        sub: [
          {
            PID: 168,
            Nombre: "systemd-journal",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 202,
            Nombre: "systemd-udevd",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 325,
            Nombre: "multipathd",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 422,
            Nombre: "systemd-network",
            Estado: 1,
            uid: 100,
            mm: 0,
          },
          {
            PID: 425,
            Nombre: "systemd-resolve",
            Estado: 1,
            uid: 101,
            mm: 0,
          },
          {
            PID: 550,
            Nombre: "accounts-daemon",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 566,
            Nombre: "dbus-daemon",
            Estado: 1,
            uid: 103,
            mm: 0,
          },
          {
            PID: 595,
            Nombre: "networkd-dispat",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 600,
            Nombre: "rsyslogd",
            Estado: 1,
            uid: 104,
            mm: 0,
          },
          {
            PID: 602,
            Nombre: "snapd",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 605,
            Nombre: "atd",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 712,
            Nombre: "google_guest_ag",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 879,
            Nombre: "polkitd",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
        ],
      },
      {
        PID: 2,
        Nombre: "kthreadd",
        Estado: 1,
        uid: 0,
        mm: 0,
        sub: [
          {
            PID: 3,
            Nombre: "rcu_gp",
            Estado: 1026,
            uid: 0,
            mm: 0,
          },
          {
            PID: 4,
            Nombre: "rcu_par_gp",
            Estado: 1026,
            uid: 0,
            mm: 0,
          },
          {
            PID: 6,
            Nombre: "kworker/0:0H",
            Estado: 1026,
            uid: 0,
            mm: 0,
          },
          {
            PID: 9,
            Nombre: "mm_percpu_wq",
            Estado: 1026,
            uid: 0,
            mm: 0,
          },
          {
            PID: 10,
            Nombre: "ksoftirqd/0",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 11,
            Nombre: "rcu_sched",
            Estado: 1026,
            uid: 0,
            mm: 0,
          },
          {
            PID: 12,
            Nombre: "migration/0",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
          {
            PID: 13,
            Nombre: "idle_inject/0",
            Estado: 1,
            uid: 0,
            mm: 0,
          },
        ],
      },
    ];
    */
  }
  static async ram() {
    const requestOptions = {
      mode: "cors",
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
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
        "Access-Control-Allow-Origin": "*",
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
        "Access-Control-Allow-Origin": "*",
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
