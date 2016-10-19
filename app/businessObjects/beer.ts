export class BeerImplementation implements Beer{
    
    public id: string;

    public createdOn: Date;

    public availability: { description: string, name: string};

    public name: string;
    public displayName: string;

}

/**
 * Beer Interface
 */
export interface Beer{
    /**
     * Gets or sets the id property
     */
    id: string,

    /**
     * Gets or sets the Created On property
     */
    createdOn: Date,

    /**
     * Time of the year when the beer is available to public sale.
     */
    availability: {
        /**
         * Avaliable description
         */
        description: string,
        /**
         * Name of the time of the year. Example "Fall"
         */
        name: string
    },

    /**
     * Beer internal name
     */
    name: string,

    /**
     * Display Name
     */
    displayName: string
}

/**
 * Beer Factory Class
 */
export class BeerFactory{
    /**
     * Create a Beer object based on the Brewery DB API Object.
     * 
     * @param breweryAPIObject Brewerey Db API Object. 
     */
    public static create(breweryAPIObject: any): Beer{
        let beer = new BeerImplementation();

        beer.id = breweryAPIObject.id;
        beer.name = breweryAPIObject.name;
        beer.displayName = breweryAPIObject.displayName;

        return beer;
    }
}