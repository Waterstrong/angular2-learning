import {Component} from "@angular/core"
import {NoteCard} from './note-card'

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    styles: [require('./notes.css')],
    directives: [NoteCard]
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
}