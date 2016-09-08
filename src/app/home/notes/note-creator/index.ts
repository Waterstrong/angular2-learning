import {Component, Output, EventEmitter} from "@angular/core"

@Component({
    selector: 'note-creator',
    template: require('./note-creator.html'),
    styles: [require('./note-creator.css')]
})

export class NoteCreator {
    newNote = {
        title: '',
        value: ''
    };

    @Output() onCreateNode = new EventEmitter();

    createNode() {
        const {title, value} = this.newNote;

        this.onCreateNode.emit({title, value});

        return false;

    }
}