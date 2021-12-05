export default class dragDropAPI {
    static getItems(columnId) {
        const col = read().find(col => col.id == columnId);

        if(!col){
            return [];
        }

        return col.items;
    }

    static insertItem(columnId, content){
        const data = read(),
            col = data.find(c => c.id == columnId),
            item = {
                id: Math.floor(Math.random() * 1000000),
                content
            };

        if(!col){
            throw new Error('column does not exist');
        }

        col.items.push(item);
        save(data);

        return item;
    }

    static updateItem(itemId, newProps) {
        const data = read();
        const [currentItem, currentCol] = (()=>{
            for(const col of data){
                const item = col.items.find(i => i.id == itemId);

                if(item){
                    return [item, col];
                }
            }
        })();

        if(!currentItem){
            throw new Error('Item Not Found');
        }

        currentItem.content = newProps.content === undefined ? currentItem.content : newProps.content;
        
        // update column and poisiton
        if(
            newProps.columnId !== undefined
            && newProps.position !== undefined
        ){
            const targetCol = data.find(col => col.id == newProps.columnId);

            if(!targetCol){
                throw new Error('tagret column not found');
            }

            // delete item from its current column
            currentCol.items.splice(currentCol.items.indexOf(currentItem), 1);

            // move item to new column
            targetCol.items.splice(newProps.position, 0, currentItem);
        }
        save(data);
    }

    static deleteItem(itemId){
        const data = read();

        for (const col of data) {
            const item = col.items.find(i => i.id == itemId);

            if (item) {
                col.items.splice(col.items.indexOf(item), 1);
            }
        }
        save(data);
    }
}

function read() {
    const json = localStorage.getItem('col-data');

    if(!json) {
        return [{
            id: 1,
            items: []
        },
        {
            id: 2,
            items: []
        },
        {
            id: 3,
            items: []
        }]
    }

    return JSON.parse(json);
}

function save(data){
    localStorage.setItem('col-data', JSON.stringify(data));
}