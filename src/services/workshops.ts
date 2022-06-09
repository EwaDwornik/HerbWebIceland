import {Herb, Workshop} from "../model";
import {generateIdWorkshop} from "./utilities";
import {herbsDB} from "./herbs";

export const workshopDB: Workshop[] = [
    {
        id: generateIdWorkshop(),
        title: "Jurtaganga og súpa",
        date: "2020-03-03",
        imageWorkshop: "https://cdn.mbl.is/m2/pxItjpRdiWUPF_3Eq9Z7eLzQWCQ=/1640x1093/smart/frimg/1/6/74/1067433.jpg",
        email: "callunaherbs@gmail.com",
        description: "Verið Velkomin í fræðandi og nærandi jurtagöngu við Krókatjörn. Í þessari göngu stoppum við hjá ýmsum lækningajurtum sem kunna að vera á vegi okkar og fræðumst um þær, og látum okkur sogast inn í heim plantnana. Við förum svo í tesmökkun og virkjum þannig öll skynfærin. \n" +
            "Við endum gönguna heima í kofanum mínum (sem liggur við vatnið) í nærandi grænmetissúpu.\n" +
            "Þegar við fræðumst um náttúruna styrkjum við tenginguna okkar við hana ",
        event: "https://www.facebook.com/events/2297405753740513/?ref=newsfeed"
    },
    {
        id: generateIdWorkshop(),
        title: "NÁTTÚRAN KALLAR",
        date: "2022-01-01",
        imageWorkshop: "https://cdn.mbl.is/m2/pxItjpRdiWUPF_3Eq9Z7eLzQWCQ=/1640x1093/smart/frimg/1/6/74/1067433.jpg",
        email: "callunaherbs@gmail.com",
        description: "Vilt þú efla þína tengingu við náttúruna í kring um þig? \n" +
            "Leyfa náttúrunni að vera þinn leiðarvísir, akkeri og innblástur?\n" +
            "Upplifa sjálfan þig í gegnum trén, grösin, vötnin og vinda?\n" +
            "\n" +
            "Þú, Ert, Náttúran.",
        event: "https://www.facebook.com/events/466423291839590/?ref=newsfeed",
    }
];

export function getAllWorkshops(): Workshop[] {
    return workshopDB.map((obj) => {
        const result: Workshop = {...(obj)};
        return result
    })
}
