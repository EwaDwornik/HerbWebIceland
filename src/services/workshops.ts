import {Workshop} from "../model";
import {generateIdWorkshop} from "./utilities";

export const workshopDB: Workshop[] = [
    {
        id: generateIdWorkshop(),
        title: "Jurtaganga og súpa",
        photo: "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/279608526_377619144379485_953895116504110704_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=340051&_nc_ohc=ccmwOJgS2gYAX8iOjud&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8XaPWRye45rUxkA0h9UBJiaqAYhUmdTmzmkJRE0tFmfw&oe=6287BE0C",
        email: "callunaherbs@gmail.com",
        description: "Verið Velkomin í fræðandi og nærandi jurtagöngu við Krókatjörn. Í þessari göngu stoppum við hjá ýmsum lækningajurtum sem kunna að vera á vegi okkar og fræðumst um þær, og látum okkur sogast inn í heim plantnana. Við förum svo í tesmökkun og virkjum þannig öll skynfærin. \n" +
            "Við endum gönguna heima í kofanum mínum (sem liggur við vatnið) í nærandi grænmetissúpu.\n" +
            "Þegar við fræðumst um náttúruna styrkjum við tenginguna okkar við hana ",
        event: "https://www.facebook.com/events/2297405753740513/?ref=newsfeed"
    },
    {
        id: generateIdWorkshop(),
        title: "NÁTTÚRAN KALLAR",
        photo: "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/279144472_369755491832517_1847404918599219671_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-6&_nc_sid=340051&_nc_ohc=pdx0QLd76cUAX9WBngs&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8wnHOGsyCDztoFZGCeyhaCxVYQ-hoBkvOWoBVzQIRzVA&oe=62870744",
        email: "callunaherbs@gmail.com",
        description: "Vilt þú efla þína tengingu við náttúruna í kring um þig? \n" +
            "Leyfa náttúrunni að vera þinn leiðarvísir, akkeri og innblástur?\n" +
            "Upplifa sjálfan þig í gegnum trén, grösin, vötnin og vinda?\n" +
            "\n" +
            "Þú, Ert, Náttúran.",
        event: "https://www.facebook.com/events/466423291839590/?ref=newsfeed",
    }
];
