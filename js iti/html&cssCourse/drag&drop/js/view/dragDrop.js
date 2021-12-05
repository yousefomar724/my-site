import Column from "./column.js";

export default class DragDrop {
    constructor(root){
        this.root = root;

        DragDrop.columns().forEach(col => {
            const columnView = new Column(col.id, col.title);

            this.root.appendChild(columnView.elements.root);
        });
    }

    static columns() {
        return [
            {
                id: 1,
                title: 'Not started'
            },
            {
                id: 2,
                title: 'In Progress'
            },
            {
                id: 3,
                title: 'Completed'
            }
        ];
    }
}