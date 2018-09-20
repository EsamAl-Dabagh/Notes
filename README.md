# Notes App

A notes app created in pure JavaScript without relying on any frameworks. Test-Driven without using a testing framework. 

## Domain Model

```

+===============+
|               |
|   BROWSER     |
|               |
+===============+
        |
        |       +===============+ Instantiates with a new instance of Notebook and the NotebookView.
        |-----> | CONTROLLER    | addNote()    -> executes createNote() on Notebook instance.
                |               |              -> excutes createView() to update the page with new note.
                |               |              -> executes counterIncrease() to keep track of number of notes.
                +===============+
                        |         createView() -> executes returnHtml() on NotebookView.
                        |                      -> gets element by ID from the document.
                        |                      -> sets innerHTML of this element to returned HTML string.
                        |                      
                        |
                        |        +===============+ Instantiates with an instance of Notebook (passed in from Controller)
                        |------> | VIEW          | returnHtml() -> Iterates over all notes in instance of Notebook
                        |        |               |                 and places the first 20 characters in <li> tags.
                        |        | NotebookView  |                 Returns a string.
                        |        +===============+
                        |
                        |        +===============+ 
                        |------> | MODELS        | Note     -> returnText()         
                                 |               |          -> returnID()
                                 | Note          | 
                                 | Notebook      | Notebook -> createNote()        
                                 +===============+          -> returnAllNotes()


```
