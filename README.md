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
        |         +===============+
        |-------> | CONTROLLER    |
                  |               |
                  |               |
                  +===============+
                           |
                           |        +===============+
                           |------> | VIEW          |
                                    |               |
                                    | NotebookView  |
                                    +===============+
                                            |
                                            |         +===============+
                                            |-------> | MODELS        |
                                                      |               |
                                                      | Note          |
                                                      | Notebook      |
                                                      +===============+


```
