# EXHIBIT    

A website for creating personalised exhibitions built using React JS, JSX and CSS.  

<a href="https://virtual-exhibit.netlify.app/" target="_blank">Go to website</a>


---


## Contents:
1. [Introduction](#introduction)

2. [Instructions](#instructions)

3. [Acknowledgments](#acknowledgements)


---

## Introduction


Exhibit is a website featuring images of artworks from [Victoria & Albert Musuem](#acknowledgements) and the[ Art Institute of Chicago](#acknowledgements) for curating user driven exhibitions. Once a user creates an account or logs in, they can start adding artworks in the exhibition gallery. The user can add and delete images or delete the entire collection and start over. The exhibition gallery can be viewed in the user's dashboard and has a limitation of 30 artworks.

**Existing user details for signing in:** 

Email: borsha_b@outlook.com 
Password: boishakh

More mock users can be added or used from curatorsData.js file located in ./src/assets.

No data is saved in a database or locally between sessions, but it is advisable not to input any sensitive information nonetheless.

### Hosted Website

The Exhibit website is hosted on Netlify.

<a href="https://virtual-exhibit.netlify.app/" target="_blank">Exhibit</a>

https://virtual-exhibit.netlify.app/


---


## Instructions


The Exhibit project uses Node runtime environment and requires version 21.2.0 or above.

React version 18.3.1 or above is required.

Vite was used to create the React JS template for this project. 


#### To run this repository locally:

1. Open VS code or another text editor and run the command below in the terminal from the root directory:

```
git clone https://github.com/Humayra-R/exhibition-curator-app.git 

```

2. Enter the command below in the terminal to open the directory:  

```

cd exhibition-curator-app

```

3. Enter the command below in the terminal to install the required dependencies: 

```

npm install

```

4. Enter the command below in the terminal to start the application locally: 

```

npm run dev

```

---


## Acknowledgements

Documentation for the APIs used to request artwork data in this project:

1. <a href="https://developers.vam.ac.uk/guide/v2/welcome.html" target="_blank" >Victoria & Albert Museum API</a>

2. <a href="https://api.artic.edu/docs/#quick-start" target="_blank" >The Art Institue of Chicago API</a>

The Exhibit project uses <a href="https://www.vecteezy.com/free-vector/website-error">Website Error Vectors by Vecteezy</a>
