<div id="top"></div>

# Google Docs Clone With NextjS & Firebase

## Table of content

- [About the project](https://github.com/aminbenz/google-docs-clone#about-the-project-)
- [Tech Stack](https://github.com/aminbenz/google-docs-clone#tech-stack-)
- [Screenshots](https://github.com/aminbenz/google-docs-clone#screenshots-)
- [Prerequisites](https://github.com/aminbenz/google-docs-clone#prerequisites-)
- [Steps for installation](https://github.com/aminbenz/google-docs-clone#steps-for-installation-)

## About The Project :

rebuild google docs with NextJs and Firebase powred by TinyMCE

## Tech Stack :

- [NextJS](https://nextjs.org/docs)
- [NextAuth](https://next-auth.js.org/getting-started/introduction)
- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Material UI](https://material-ui.com/getting-started/installation/)
- [Firebase](https://firebase.google.com/docs)
- [Heroicons](https://heroicons.com/)

## Screenshots :

**Login Page**
![Docs](https://awesomescreenshot.s3.amazonaws.com/image/3243786/28594072-11234808555de12c3a017e9e8e04ff7c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220611T164509Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=8c060e71ca170d0c324bfb7ba10eb3eac9ea10fa3eeb27d0aaf000546974e90c)

**Home Page**
![Docs](https://awesomescreenshot.s3.amazonaws.com/image/3243786/28593356-a24108cb81b0c3175b62c8b7fda00dfb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220611T164132Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=800e17f8199830eae45b6880e9efe20cbd6b08b3d6c819366df0071a4a5b0077)

**Document Page** (with Text Editor)
![Docs](https://awesomescreenshot.s3.amazonaws.com/image/3243786/28593940-658614826ab4f9a2b16de8ad73a62400.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220611T164402Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=3cbff659d54dc530355d38adb37f25fe6f8140b890252c5e44a6341e7b1576cf)

**Print Document**
![Docs](https://i.ibb.co/w6BZJ18/Print.png)

**Create Document**
![Docs](https://awesomescreenshot.s3.amazonaws.com/image/3243786/28593044-71d415020c864039f04f86b882a85de3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220611T165128Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=935d85761d7181a2382e7d170d788d44f97fe6efc155b78274375faa2f3b78c0)

**Delete Document**
![Docs](https://awesomescreenshot.s3.amazonaws.com/image/3243786/28593302-a97232b65b7150e8871cb16d86a2ff4f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220611T164939Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=f1a0841a87ebf3c0253bfb95cf67ae5cf996a5b03791baa4e80557367fd11b12)

**Author Page**
![Docs](https://awesomescreenshot.s3.amazonaws.com/image/3243786/28594091-cdb38b02a6663d2c7fd1193bde1e1e25.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220611T164709Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=9479a4f8ad23b625d90c8d7c6dc97bdce970b031409e58b538794d18b9726d33)

<!-- **Google Login**
![Docs](https://awesomescreenshot.s3.amazonaws.com/image/3243786/28594097-b16432f88c2d681493487c872b32235d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220611T164802Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=811f22b376369db95815213e0f2296b64ab06d7657b2a4348c96d0e865a39a5a) -->

  <p align="right">(<a href="#top">back to top</a>)</p>

## Prerequisites :

- Node Package Manager or npm
  ```sh
  npm install npm@latest -g
  ```

## Steps for Installation :

1. Clone this repository

```
$ git clone https://github.com/aminbenz/google-docs-clone.git
```

2. Install all required packages

```
$ npm install
```

3. If some vulnerabilities are found, try updating the packages using the following command

```
$ npm update -g
```

4. Start the development server

```
$ npm run dev
```

5. Don't forget to update the environment variables with yours in '.env.local' file
<p align="right">(<a href="#top">back to top</a>)</p>
