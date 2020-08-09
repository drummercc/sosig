import { GoogleSpreadsheet } from ('google-spreadsheet');
// const { promisify } = require('util');

import { client_email as _client_email, private_key as _private_key } from './TeamSosig-3ce025db40d3.json';
const doc = new GoogleSpreadsheet('1A8iak5L46OB4I1gShhpSM7D_fU9ROaQa2mY3FzY0npk');

async function accessSpreadsheet(){
    await doc.useServiceAccountAuth({
        client_email: _client_email ,
        private_key: _private_key,
    });

    await doc.useServiceAcccountAuth(require('./TeamSosig-3ce025db40d3.json'));
    // doc.useApiKey('AIzaSyCyqkWJsN154FVPuG6tp71r1U26z_EU8E4');

    await doc.loadInfo();
    console.log(doc.title);
    const sheet = doc.sheetsByIndex[0];
}

accessSpreadsheet();