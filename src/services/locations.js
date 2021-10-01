let data = {
    regions: [
        { "id": 1, "name": "Heffernan" },
        { "id": 2, "name": "Forest" },
        { "id": 3, "name": "Mendota" },
        { "id": 4, "name": "Longview" },
        { "id": 5, "name": "Granby" },
        { "id": 6, "name": "Dottie" },
        { "id": 7, "name": "Sloan" },
        { "id": 8, "name": "Pierstorff" },
        { "id": 9, "name": "Corry" },
        { "id": 10, "name": "Bultman" },
        { "id": 11, "name": "Nelson" },
        { "id": 12, "name": "Buhler" }
    ],
    subregions: [
        { "id": 1, "name": "Oneill" },
        { "id": 2, "name": "North" },
        { "id": 3, "name": "Esker" },
        { "id": 4, "name": "Pennsylvania" },
        { "id": 5, "name": "Gale" },
        { "id": 6, "name": "Crest Line" },
        { "id": 7, "name": "Cascade" },
        { "id": 8, "name": "Truax" },
        { "id": 9, "name": "Lillian" },
        { "id": 10, "name": "Bellgrove" },
        { "id": 11, "name": "Sunnyside" },
        { "id": 12, "name": "American" },
        { "id": 13, "name": "Cordelia" },
        { "id": 14, "name": "Quincy" },
        { "id": 15, "name": "Miller" }
    ]
}
let getRegions = () => {
    return data.regions;
}

let getSubregions = (regionId) => {
    return data.subregions;
}

module.exports = {
    getRegions,
    getSubregions
};