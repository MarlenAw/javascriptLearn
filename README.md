<h1 align="center"> This Repo has been made for the sake of teaching others </h1>

<h3 align="center"> GIT </h3>

- Set Git username and email: 
  
                      git config --global user.name "MarlenAw"
                      git config --global user.email "marlenawsh3@gmail.com"
                     

- Check git username and email:

                      
                      git config user.name
                      git config user.email
                      

<h3 align="center"> Updating/Upgrading Node.js </h3>

 - Download nvm-setup.zip https://github.com/coreybutler/nvm-windows/releases 
 - In CMD: 
   1. <b> nvm list </b>
   2. <b> nvm install (node version number) </b>
   3. Pick what node version you want to use -> <b> nvm use (node version number) </b>


<h3 align="center"> ATOM packages </h3>

 - Platformio-ide-terminal  - ALT + SHIFT + T
 - Pigments
 - Minimap
 - Highlight-selected
 - File-icons
 - Emmet
 - Autocomplete-paths
 - Atom-beautify

<h3 align="center"> "Cross origin requests are only supported for HTTP." - Error Fix </h3>


- Install http-server by typing npm install -g http-server

- Change into your working directory, where yoursome.html lives

- Start your http server by issuing http-server -c-1

- This spins up a Node.js httpd which serves the files in your directory as static files accessible from http://localhost:8080



<h3 align="center"> ++someVariable Vs. someVariable++ in Javascript </h3>

- <b>++x </b> -> (Pre-Increment) means "increment the variable; the value of the expression is the final value". 
- <b>x++ </b> -> (Post-Increment) means "remember the original value, then increment the variable; the value of the expression is the original value".

```
Example: 

var n = 0, m = 0;

alert(n++); /* Shows 0, then stores n = 1 */
alert(++m); /* Shows 1, then stores m = 1 */
```

