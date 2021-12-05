import dragDropAPI from "../api/api.js";

export default class DropZone {
    static createDropZone() {
        const range = document.createRange();

        range.selectNode(document.body);

        const dropZone =  range.createContextualFragment(`
            <div class="col__dropzone"></div>
        `).children[0];

        dropZone.addEventListener('dragover', e =>{
            e.preventDefault();
            dropZone.classList.add('active');
        });

        dropZone.addEventListener('dragleave', ()=>{
            dropZone.classList.remove('active');
        })

        dropZone.addEventListener('drop', e => {
            e.preventDefault();
            dropZone.classList.remove('active');

            const curCol = dropZone.closest('.col');
            const colId = Number(curCol.dataset.id);
            
            const dropZonesInCol = Array.from(curCol.querySelectorAll('.col__dropzone'));
            const droppedIndex = dropZonesInCol.indexOf(dropZone);
            const itemId = Number(e.dataTransfer.getData('text/plain'));
            const droppedItemEl = document.querySelector(`[data-id="${itemId}"]`)
            const insertAfter = dropZone.parentElement.classList.contains('col__item') ? dropZone.parentElement : dropZone;

            // if you drag item to the same place
            if(droppedItemEl.contains(dropZone)){
                return;
            }

            insertAfter.after(droppedItemEl);

            dragDropAPI.updateItem(itemId, {
                columnId: colId,
                position: droppedIndex
            })
        })

        return dropZone;
    }
}