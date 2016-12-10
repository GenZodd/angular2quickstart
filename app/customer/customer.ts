export class Customer {
    
    private __id : number;
    public get _id() : number {
        return this.__id;
    }
    public set _id(v : number) {
        this.__id = v;
    }
    
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
}