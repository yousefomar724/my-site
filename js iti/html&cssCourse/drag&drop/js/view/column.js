import DropZone from "./dropZone.js";
import dragDropAPI from "../api/api.js";
import Item from "./item.js";

export default class Column {
    constructor(id, title) {
        const topDropZone = DropZone.createDropZone();

        this.elements = {};
        this.elements.root = Column.createRoot();
        this.elements.title = this.elements.root.querySelector('.col__title');
        this.elements.items = this.elements.root.querySelector('.col__items');
        this.elements.addItem = this.elements.root.querySelector('.col__add');

        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;

        this.elements.items.appendChild(topDropZone);

        this.elements.addItem.addEventListener('click', () => {
            const newItem = dragDropAPI.insertItem(id, '');

            this.renderItem(newItem);
        });

        dragDropAPI.getItems(id).forEach(item => {
            this.renderItem(item);
        })
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="col">
                <div class="col__title"></div>
                <div class="col__items"></div>
                <button class="col__add" type="button">+ Add</button>
            </div>
        `).children[0];
    }

    renderItem(data) {
        const item = new Item(data.id, data.content);

        this.elements.items.appendChild(item.elements.root);
    }
}