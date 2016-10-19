export const BREWERYDB_ROOTADDRESS = "http://api.brewerydb.com/v2";
export const BREWERYDB_APIKEY = "e15b306e49707b31a1169a9fc6efcd2d";

export function buildBreweryDBEndpoint(service: string): string{
    return `https://crossorigin.me/${BREWERYDB_ROOTADDRESS}${service}?key=${BREWERYDB_APIKEY}&format=json`;
}