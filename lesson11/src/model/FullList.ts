import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    add(itemObj: ListItem): void;
    remove(id: string): void;
    clear(): void;
    load(): void;
    save(): void;
}

export default class FullList implements List {

    static instance: FullList = new FullList(); //making a class singleton such that it can be instantiated only once in the entire app 
    private constructor(private _list: ListItem[] = []) {} //the constructor also must be private for us to achieve singleton

    get list(): ListItem[] {
        return this._list;
    }
    load(): void {
        const storedList: string | null = localStorage.getItem('myList');
        if (typeof storedList !== 'string') return

        const parsedList: {_id: string, _item: string, _checked:boolean} []  = JSON.parse(storedList) 

        parsedList.forEach(itemOject=> {
            const newListItem  = new ListItem(itemOject._id, itemOject._item, itemOject._checked);
            FullList.instance.add(newListItem);
        })
    }
    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list));
    }
    clear(): void {
        this._list = [];
        this.save();
    }
    add(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }
    remove(id: string): void {
        this._list = this._list.filter(item => item.id!== id);
        this.save();
    }

}