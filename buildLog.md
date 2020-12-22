# 1. Set up TMDB

- API KEY: {a453ccc3de71c2e42666a84c496a52be}
- Test API Request: {https://api.themoviedb.org/3/movie/550?api_key=a453ccc3de71c2e42666a84c496a52be}

# 2. Set up Firebase

- Install
  `$ npm install -g firebase-tools`
- if (error) => { `$ sudo npm install -g firebase-tools` }
- Deployment
  `$ firebase login/ init/ deploy `

# 3. Start build

- set up react & clean up files
  `$ npx create-react-app .`

- install axios
  `$ npm i axios --save`

- touch ./js/requests.js

- touch ./js/axios.js

- App.js
  - create component <Row/>

# 4. Deployment

- host the project on firebase
- firebase login
- firebase init hosting
  - existing
  - build
  - npm run build
  - firebase deploy
