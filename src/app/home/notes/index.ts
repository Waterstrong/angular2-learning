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
        },
        {
            title: 'title2',
            value: 'value2'
        }
    ]

    checkCard(note, index) {
        this.notes.splice(index, 1)
    }

    addNote(note) {
        this.notes.push(note)
    }
}