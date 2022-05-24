import {Herb} from "../model";
import {generateIdHerb} from "../services/utilities";

export const herbsDB: Herb[] = [
    {
        id: generateIdHerb(),
        names: {
            english: "Yarrow",
            latin: "Achillea millefolium",
            icelandic: 'Vallhumall'
        },
        imageHerb: "https://png2.cleanpng.com/sh/4b49932678d9239fce191a94ab63a454/L0KzQYm3VcE6N6RsgJH0aYP2gLBuTglieqN0j595bHHxhH7pjCRidppoed42aXzvhcT7kvF1cZDzRdd1ZXPkfcHojvUuepD0RadrMECzSIbpUfE2OZU9RqM6NUm5Q4a7UcUzPmg3UKkENUGzR4m1kP5o/kisspng-yarrow-plant-botanical-illustration-elecampane-roo-5b00085b1a51d8.1159635415267287951078.png",
        medicalUses: ["fever", "common cold", "hay fever", "stomach discomfort"],
        sideEffects: ["drowsines", "increased urination", "skin irritation"],
        precautions: ["pregnancy", "brest feeding", "allergy to ragweed and related plants"],
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
        imageHerb: "https://png2.cleanpng.com/sh/7559608cdd2f6b2b16ab7a62b9d3c520/L0KzQYm3U8I5N5x8j5H0aYP2gLBuTfFta5lqhdt1bHGwfbFzjPl0NZJxe9pubXnvfLK0lwVtb5J3geU2Znzyh7b5TfJwfJJzgdVqbD24cbPqVPRnPWVqSqpuND65Roe9WMA3O2I6SqQ7OUC0Roa6UsAzNqFzf3==/kisspng-alchemilla-mollis-alchemilla-vulgaris-flower-botanical-5abc4df54e28e4.6666806315222901653202.png",
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
        imageHerb: "https://png2.cleanpng.com/sh/c55fc1d21a8c270fd1d39fc57432466a/L0KzQYi4UsE3N5c3SZGAYUO3c4iBgBU3OWg7TpCBM0C4R4i8VsE2OWQ5SKo8OUa8RIO8TwBvbz==/5a34c78ce61766.6305775615134083969425.png",
        medicalUses: ["high blood pressure", "high blood sugar", "high cholesterol", "stomach discomfort"],
        sideEffects: ["bad breath", "might increase the risk of bleeding"],
        precautions: ["Garlic is possibly unsafe when used in medicinal amounts during pregnancy and when breast-feeding"],
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
        imageHerb: "https://png2.cleanpng.com/sh/e6bd396b64de0ec3626a1f3eb6ad01ee/L0KzQYm3VsIzN5t4eZH0aYP2gLBuTgBieqRxfes2YX7qdb3wgBEuaaNogNN3Z3XvebToTfljbaN0f9N8dD3wdbXwgBlvaZ0ygNd7Yj3zfLL1lL02amNofqdrY0bpdbOCUb44O2E3UKkEMEG4Qoq9V8MyPGk5Tao9LoDxd1==/kisspng-parsley-angelica-archangelica-iberogast-medicinal-herb-plant-5b2cf5bc6feb91.7302879015296731484584.png",
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
        imageHerb: "https://png2.cleanpng.com/sh/8076db68a1fb7391c3de7b02a1799e07/L0KzQYm3VcIxN5Jmf5H0aYP2gLBuTfJmfKZxeZ95dXLog7TsjwMue5pxjtd7LXLsgrTvTgBieJZ3RdRycnPrPcX5hfUuapD5RadrMEG1QILsVsBnPpM5RqM5N0C4RYKBUcUzPmk1SKY6NEO8R4O1kP5o/kisspng-betula-pubescens-silver-birch-paper-birch-tree-bot-5b01201e60f6b4.1070551815268004143972.png",
        medicalUses: ["joint pain", "kidney stones", "bladder stones", "dandruff"],
        sideEffects: ["drowsines", "increased urination", "skin irritation"],
        precautions: ["pregnancy", "breast-feeding", "allergy to wild carrot, mugwort, celery, and other spices", "High blood pressure"],
        description: 'Birch description',
        vegetation: 'Birch vegetation description',
        vegetationPhoto: 'https://kort.ni.is/geoserver/ni/wms?service=WMS&version=1.1.0&request=GetMap&layers=ni:island-haed,ni:Floraisl_dreifing&cql_filter=Include;nafn=%27Betula%20pubescens%27&styles=&bbox=239093.000,290000.000,761000.00,679982.000&width=1325&height=994&srs=EPSG:3057&format=image%2Fjpeg',

    },
]

export const UsesListOfLists: string[][] = [];
for (let i = 0; i < herbsDB.length; i++) {
    UsesListOfLists.push(herbsDB[i].medicalUses);
}
export const flatUsesList = UsesListOfLists.flat();
export const allMedicalUsesList = flatUsesList.filter(
    (element, i) => i === flatUsesList.indexOf(element)
);

