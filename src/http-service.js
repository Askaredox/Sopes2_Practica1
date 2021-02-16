
class Service{
    ip = '' //TODO: colocar ip aquí
    static async watch(){
        const DATA = { ram: Math.floor((Math.random() * 100) + 1)};

        const DATE = new Date();
        const HH = DATE.getHours().toString();
        const MM = DATE.getMinutes().toString();
        const SS = DATE.getSeconds().toString();

        return { name:`${HH}:${MM}:${SS}`, ram:DATA.ram }
    }
}

export default Service