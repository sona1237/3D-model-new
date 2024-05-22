# 3D Model Display

This is 3D model Uploader and Viewer. Created using MERN stack.

## Installation

```bash
  * git clone 
  * cd 3D-Model-Viewer
  * cd client
  * npm i
  * npm run dev
  * cd ..
  * cd server
  * npm start
```


## App Structure

```
>Root
 ->App
  -->FileComponent
  -->ShowCaseComponent
   ---->Model
```

## Functionality

1. Upload 3D files (.gltb,glb,ftx).
2. Save Models in DB
3. Display 3D model.

## Design Choices

1. Why choose a Framework ?
   Framework makes managing a lot of things easier. Managing state, library support, and routing are some of the key advantages of using frameworks.

2. Why React ?
   Three.js is a powerful javascript library that can be used to render 3D models in a browser. There is a library called React Three Fibre, that is built for React to work with 3D models and is maintained continuously. I used this library extensively and Also, React has a huge community, so you can always get some help whenever you are stuck

3. Bootstrap
   Bootstrap makes things easy, as it comes with a lot of prebuilt components. Also, it helps a lot in Layouting the components.

4. Node.js
   Since, I was using React.js (which is essentially a JS Front end framework) , using Node.js (a JS runtime environment) was a good choice. Besides, Node.js comes with a lot of advantage but the primary reason for choosing Node.js was to seemlessly integrate front-end back-end and MongoDb Databases.

5. Express.js
   Express.js is a fast and lightweight web application framework for Node.js. It provides a robust set of features for building web and mobile applications, APIs, and web services. I used it for routing, and handling CORS.

6. MongoDb
   Mongo is a NoSQL database. I used mongodb because there is no relation in the records that we are storing. MongoDB also has built-in features like GridFS, which allows for efficient storage and retrieval of large files.

7. Tailwind CSS
   Used Tailwind for adding styles to components. It is easy to use and brings a lot of customisability to the table.


{

This schema consists of the basic things that are required to store and render the model.

1. data -> of Buffer type, to save the file
2. mimeType -> metadata parameter of file
3. filename-> File name
4. description -> Description about the file
5. timestamp-> to always get the latest file

## Approach

1. Upload the File and details From Front-end.
2. Save the File to DB.
3. Redirect to second page
5. Display it on the second page.





