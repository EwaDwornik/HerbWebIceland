import {Herb} from "../model";
import {generateIdHerb} from "../services/utilities";
import angelica from "../components/static/angelica.png";
import yarrow from "../components/static/yarrow.png";
import alchemilla from '../components/static/alchemilla.png';
import birch from '../components/static/birch.png';
import garlic from '../components/static/garlic.png';

export const herbsDB: Herb[] = [
    {
        id: generateIdHerb(),
        names: {
            english: "Yarrow",
            latin: "Achillea millefolium",
            icelandic: 'Vallhumall'
        },
        imageHerb: yarrow,
        medicalUses: ["fever", "common cold", "hay fever", "stomach discomfort"],
        sideEffects: ["drowsines", "increased urination", "skin irritation"],
        precautions: ["pregnancy", "breastfeeding", "allergy to ragweed and related plants"],
        description: "Yarrow is a plant that grows throughout the world. The above ground parts are used to make medicine. Yarrow contains chemicals that might help to stop stomachcramps and fight infections. People commonly use yarrow for eczema, irritable bowel syndrome (IBS), wound healing, and many other conditions, but there is no good scientific evidence to support these uses.Yarrow is sometimes called bloodwort. Don't confuse this with Bloodroot.",
        vegetation: "Yarrow vegetation description",
        vegetationPhoto: 'https://kort.ni.is/geoserver/ni/wms?service=WMS&version=1.1.0&request=GetMap&layers=ni:island-haed,ni:Floraisl_dreifing&cql_filter=Include;nafn=%27Achillea%20millefolium%27&styles=&bbox=239093.000,290000.000,761000.00,679982.000&width=1325&height=994&srs=EPSG:3057&format=image%2Fjpeg',
    },
    {
        id: generateIdHerb(),
        names: {
            english: "Lady's Mantle",
            latin: "Alchemilla alpina",
            icelandic: 'Maríustakkur'
        },
        imageHerb: alchemilla,
        medicalUses: ["diarrhea", "vaginal disorders", "menstrual disorders", "menopausal disorders"],
        sideEffects: [],
        precautions: ["pregnancy", "brest feeding"],
        description: "Alchemilla vulgaris is a herbaceous perennial found throughout Europe, especially on upland grassland and verges. Thin round green stems (up to 60 cm but usually less) bear bright green, palmately lobed leaves with toothed edges.",
        vegetation: "Lady's mantle vegetation description",
        vegetationPhoto: 'https://kort.ni.is/geoserver/ni/wms?service=WMS&version=1.1.0&request=GetMap&layers=ni:island-haed,ni:Floraisl_dreifing&cql_filter=Include;nafn=%27Alchemilla%20alpina%27&styles=&bbox=239093.000,290000.000,761000.00,679982.000&width=1325&height=994&srs=EPSG:3057&format=image%2Fjpeg',
    },
    {
        id: generateIdHerb(),
        names: {
            english: "Garlic",
            latin: "Allium Sativa",
            icelandic: 'Hvítlaukur'
        },
        imageHerb: garlic,
        medicalUses: ["high blood pressure", "high blood sugar", "high cholesterol", "stomach discomfort"],
        sideEffects: ["bad breath", "might increase the risk of bleeding"],
        precautions: ["pregnancy", "breast-feeding"],
        description: 'Garlic description',
        vegetation: "garlic vegetation description",
    },
    {
        id: generateIdHerb(),
        names: {
            english: "Angelica",
            latin: "Angelica archangelica",
            icelandic: 'Ætihvönn'
        },
        imageHerb: angelica,
        medicalUses: ["digestive disorders", "respiratory disorders","common cold", "flu" , "stress and anxiety",  "insomnia"],
        sideEffects: ["Might make your skin more sensitive to sunlight"],
        precautions: ["pregnancy", "breast-feeding"],
        description: 'Angelica description',
        vegetation: 'Angelica vegetation description',
        vegetationPhoto: 'https://kort.ni.is/geoserver/ni/wms?service=WMS&version=1.1.0&request=GetMap&layers=ni:island-haed,ni:Floraisl_dreifing&cql_filter=Include;nafn=%27Angelica%20archangelica%27&styles=&bbox=239093.000,290000.000,761000.00,679982.000&width=1325&height=994&srs=EPSG:3057&format=image%2Fjpeg',

    },
    {
        id: generateIdHerb(),
        names: {
            english: "Birch",
            latin: "Betula pubescens",
            icelandic: 'Birki'
        },
        imageHerb: birch,
        medicalUses: ["joint pain", "kidney stones", "bladder stones", "dandruff"],
        sideEffects: ["drowsines", "increased urination", "skin irritation"],
        precautions: ["pregnancy", "breast-feeding", "allergy to wild carrot, mugwort and celery", "High blood pressure"],
        description: 'Birch description',
        vegetation: 'Birch vegetation description',
        vegetationPhoto: 'https://kort.ni.is/geoserver/ni/wms?service=WMS&version=1.1.0&request=GetMap&layers=ni:island-haed,ni:Floraisl_dreifing&cql_filter=Include;nafn=%27Betula%20pubescens%27&styles=&bbox=239093.000,290000.000,761000.00,679982.000&width=1325&height=994&srs=EPSG:3057&format=image%2Fjpeg',

    },
]

const allMedicalUsesSet = new Set<string>();
herbsDB.forEach(herb => herb.medicalUses.forEach( use => allMedicalUsesSet.add(use)));

export const allMedicalUses = Array.from(allMedicalUsesSet);
allMedicalUses.sort();

export function getAllHerbs(): Herb[] {
    return herbsDB.map((obj) => {
        const result: Herb = {...(obj)};
        return result
    })
}
