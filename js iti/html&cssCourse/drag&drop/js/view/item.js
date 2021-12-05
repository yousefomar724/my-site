import DropZone from "./dropZone.js";
import dragDropAPI from "../api/api.js";

export default class Item {
    constructor(id, content) {
        const bottomDropZone = DropZone.createDropZone();

        this.elements = {};
        this.elements.root = Item.createRoot();
        this.elements.input = this.elements.root.querySelector('.col__item-input');

        this.elements.root.dataset.id = id;
        this.elements.input.textContent = content;
        this.content = content;
        this.elements.root.appendChild(bottomDropZone);

        const onBlur = () => {
            const newContent = this.elements.input.textContent.trim();

            if(newContent == this.content) {
                return;
            }
            // console.log(newContent); /* test */
            // console.log(this.content);

            this.content = newContent;
            dragDropAPI.updateItem(id, {
                content: this.content
            });
        };

        this.elements.input.addEventListener('blur', onBlur);

        this.elements.root.addEventListener('dblclick', ()=>{
            const check = confirm('Are You Sure you want to delete this item');

            if(check){
                dragDropAPI.deleteItem(id);

                this.elements.input.removeEventListener('blur', onBlur);
                this.elements.root.parentElement.removeChild(this.elements.root);
            }
        });

        this.elements.root.addEventListener('dragstart', e =>{
            e.dataTransfer.setData('text/plain', id);
        })

        this.elements.input.addEventListener('drop', e =>{
            e.preventDefault();

        })
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="col__item" draggable="true">
                <div class="col__item-input" contenteditable></div>
            </div>
        `).children[0];
    }
}