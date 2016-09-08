import {Component} from "@angular/core"
import {NoteCard} from './note-card'
import {NoteCreator} from './note-creator'

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    styles: [require('./notes.css')],
    directives: [NoteCard, NoteCreator]
})

export class Notes {
    notes = [
        {
            title: 'title',
            value: 'value'
        }
    ];

    checkCard(note, index) {
        this.notes.splice(index, 1)
    }

    addNote(note) {
        this.notes.push(note)
    }
}