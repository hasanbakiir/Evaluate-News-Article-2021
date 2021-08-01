###
 * " Evaluate News Evaluate News Article First Project "
Using NPL, API.


# How to Use 
1- download a starter code repo kit from Udacity/github
2- install node-modules $ npm i
3- then install npm run build-prod
4- then install npm run build-dev to run a project on server

 ###
 the URL which i tested =>
 * "https://www.britannica.com/biography/Khafre-king-of-Egypt"

# Description for a Website
Website uses webpack to intiate the server, and multiples pligins to help make the enviroment easier.

# Using:
    - babel
    - node-sass
    - css-loader
    - sass-loader
    - style-loader
    - clean-webpack-plugin
    - html-webpack-plugin
    - mini-css-extract-plugin
    - optimize-css-assets-webpack-plugin
    - terser-webpack-plugin
Installed the jest to help with testing the client side functions too.


# Description for Api

Using the meaning cloud sentiment analysis to help analyze url submitted by the user
# My APIKEY="3c4f370dc7f2c98d7319c54ef9ff5161"

IMPORTANT NOTES
# error
1- Failed to load resource: the server responded with a status of 404 (Not Found)
* Solved { if you used
          ```
          Chrome: Enable 'Experimental Web Platform features '
          on 'chrome://flags/'

          ```
         }
2- Solved
          5 error just changed code from
          'href' to 'src' on link bellow.
         ```
          src="/styles/resets.css">
          src="/styles/base.css">
          src="/styles/header.css">
          src="/styles/form.css">
          src="/styles/footer.css">
         
         ```
