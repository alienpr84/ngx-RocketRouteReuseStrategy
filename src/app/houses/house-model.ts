export class HouseModel {
    
    // attributes
    private _id: number;
    private _price: number;
    private _owner: string;
    private _location: string;
    private _tax: number;

    constructor(id:number, price: number, owner: string, location: string, tax: number) {
        this._id = id;
        this._price = price;
        this._owner = owner;
        this._location = location; 
        this._tax = tax;
    }

    // getters and setters properties
    get id(): number {
        return this._id;
    }
    
    get price(): number {
        return this._price;
    }
    set price(price: number) {
        this._price = price;
    }

    get owner(): string {
        return this._owner;
    }
    set own(owner: string) {
        this._owner = owner;
    }

    get location(): string {
        return this._location;
    }
    set location(location: string) {
        this._location = location;
    }

    get tax(): number {
        return this._tax;
    }
    set tax(tax: number) {
        this._tax = tax;
    }

    // methods
    calculateTaxes(): number {
        let priceWithTaxes = (this._price * this._tax/100) + this._price;
       
        return priceWithTaxes;
    }
}
