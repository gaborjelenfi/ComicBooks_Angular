# ComicBooks

### Live demo: <a href="https://dzsub-comicbooks.surge.sh/#/list" target="_blank">Comic Books</a>

### This Comic Books app using Angular. Focusing on the CRUD operations and the UI.

I used dummy data just for illustration.
If you reload the page you lose any added or modified data.

## Create

On  **Create** menu (/create or **Add New** button) you can fill a form field to add a new Comicbook to the database.

- Name (characters between 10 and 255)
- Image Url 
- Publication Date
- Genre
- Excerpt
- Written By (multi select drop-down list)
- Publisher (drop-down list)

The app navigate to the **List** (/list) menu after you clicked the **Create** or **Cancel** button.


## Read

On **List** (/list) menu you can see all the data the already stored in the database. The app using fake database and some dummy data for demo purpose.
There are eight columns. Those are the same data type that you added at the **Create** menu. There is an ID column and it's number is automatic generated.
You can sort every column in ascendant or descandant order except the image column.


## Update

Use the **Edit** button (beggining of every row) to select the Comicbook you like to change. The app navigate to the **Edit** menu (/edit/:id). Change any data you like and save the changes with the **Update** button. If you changed your mind just use the **Cancel** button. Use the **Update** or the **Cancel** button to navigate back to the **List** menu (/list).

## Delete

Use the **X** button (end of every row) to delete a Comicbook from the database.


