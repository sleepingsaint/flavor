# :fire: :fire: flavor
 Inspired by **WYSIWYG - What You See Is What You Get**.
 
 Simple yet powerful web text editor. Its features, customization and lightweightness is taken care efficiently.

* Thanks to **[highlight.js](https://highlightjs.org/)** and **[flaticons](https://www.flaticon.com/)** for making my life easy :sunglasses: :sunglasses:.

## Contents
  * [Flavor Actions Bar](#wrench-flavor-actions-bar)
    * [Code](#joystick-code)
    * [Paragraph](#memo-paragraph)
    * [Images](#camera-images)
    * [Save](#floppy_disk-save)
  * [Getting Started](#tada-getting-started)
  * [Simple Setup](#star2-simple-setup)
  * [Contribute](#handshake-contribute)
  
  ----
![Screenshot](https://user-images.githubusercontent.com/35530053/93792697-7b56e980-fc53-11ea-8eb2-1b2eeb0cef2a.png)

* At first look it might not please the aesthetic eyes ( let's say Iam more concerned about the editor features rather than looks ) 
 but give it a try it won't disappoint you like your ex :rage: (who Iam I kidding :disappointed: I am so lonely :weary:) .

### :wrench: Flavor Actions Bar

![Screenshot](https://user-images.githubusercontent.com/35530053/93791424-d4be1900-fc51-11ea-8d39-422bee47f7f2.png)

 * It handles all the features of the flavor editor.
 * You can add three flavors - **code, paragraph, images**

### :joystick: Code
  
![Screenshot](https://user-images.githubusercontent.com/35530053/93791544-033bf400-fc52-11ea-9952-4ed5b3f8488c.png)

* The code will be automatically detected thanks to **[highlight.js](https://highlightjs.org/)** and you choose the programming language (in case the code is not detected) 

### :memo: Paragraph

![Screenshot](https://user-images.githubusercontent.com/35530053/93791692-2c5c8480-fc52-11ea-8d0f-74c5a7da7755.png)

* You get a simple yet powerful text editor to meet all of your needs (atleast my meet mine). If you want to see a new feature please raise a **pull request**.

### :camera: Images

* You will be prompted to for a image link and the rest is handled by the scripts.

### :floppy_disk: Save

* It downloads a html file with all the content. Note that it won't include any headers or any script tags.
* It only contains plain html of the flavor elements.
* In this way you can add your custom stylesheets and scripts or else just add the **/styles/flavor.css/**

## :tada: Getting started

* Download the assets, scripts, styles folder

* Create a html file **<file_name>.html** 

* Add the corresponding css files 
  * While using flavor editor
  ```
    <link rel="stylesheet" href="./styles/flavor-editor.css">
  ```
  * For displaying the saved flavor documents
  
  ```
    <link rel="stylesheet" href="./styles/flavor.css">
  ```
  
* Create a div and add a class flavor to it

```
  <div class="flavor"></div>  
```

* Add script tags to the html file

```
  <script src="./scripts/flavor.js"></script>
```

* For automatic code recognization add the following script tags

```
  <script src="./scripts/highlight.pack.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>
```

### :star2: Simple setup

* copy and paste the below code in your html file and place it in the directory of assets, styles and scripts.

```
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Title</title>
      <link rel="stylesheet" href="./styles/flavor-editor.css">
      <link rel="stylesheet" href="./styles/dark.css">
  </head>

  <body>
      <div class="flavor"></div>
      <script src="./scripts/flavor.js"></script>
      <script src="./scripts/highlight.pack.js"></script>
      <script>hljs.initHighlightingOnLoad();</script>
  </body>

  </html>
```

### :handshake: Contribute

  * Any suggestions and contributions are highly appreciated.
  * Feel free to raise a PR or drop a message at suryasantosh14523@gmail.com
  
