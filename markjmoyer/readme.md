# MARK J. MOYER: PORTFOLIO WEBSITE


## Project Dependencies

Following are the dependencies and packages used in developing this website:

* [Git](http://git-scm.com/) - Source Code Management
* [MAMP](http://mamp.info) - Web Server
* [PHP](http://php.net) - Server-side scripting
* [Apache](https://httpd.apache.org) -The HTTP Server
* [Craft CMS](http://craftcms.com) - The content management system
* [jQuery](http://jquery.com/) - The Write Less, Do More JavaScript Library
* [Modernizr](http://modernizr.com/) - Detects HTML5 and CSS3 features in the user’s browser
* [SASS](http://sass-lang.com//) - CSS Pre-Processor

&nbsp;

## Setting Up A Development Environment
MAMP was used to set this project up to run and test it locally. Run anyway you want.

### Installing Git
Visit the [Git](http://git-scm.com/downloads) downloads page and select the installer
for your particular environment. Run the installer and you're all set to start using
the Git version control system. If you're new to Git, there is a ton of documentation
online that will help you get started.

Once you have installed Git, you will need to checkout the source code into your
local web root. For more information on finding your web root, please see the section
titled [Viewing Your Local Website](#lws) below. Once you have identified your
web root, open a command-line terminal and enter the following command:

    $> cd <YOUR_WEB_ROOT>
    $> git clone https://github.com/markjmoyer/projects/markjmoyer.git

### Installing Bower
To install Bower, open a command-line terminal and run the command
`npm install -g bower`. Bower is used to manage packages and dependencies for building
websites. Bower-enabled packages exist for things like Bootstrap, jQuery, AngularJS,
Backbone.js, Require.js, etc. Bower makes it easy to keep these resources up-to-date
and separated from your custom code.

    $> npm install -g bower

### Finishing Your install
Once you have installed Node, Grunt and Bower, you're ready to initialize your project
by running "npm install" from the command line inside your target directory.

    $> npm install

### Viewing Your Local Website
Assuming you have setup a local web server, and assuming that you have cloned the
source code for this project into your web root, you should be able to access the
website at:

* [http://localhost:8888/dist/index.html)

#### Finding Your Web Root in Unix/Linux
Open a command-line terminal and enter one of the following commands based on the
distribution that you are using:

    # Find your web root
    $> grep -i 'DocumentRoot' /etc/httpd/conf/httpd.conf # RHEL/RedHat/Fedora/CentOS
    $> grep -i 'DocumentRoot' /usr/local/etc/apache22/httpd.conf # FreeBSD
    $> grep -i 'DocumentRoot' httpd.conf # Other distributions

&nbsp;

## Website Structure

### Assets
Website resources such as images, stylesheets, JavaScripts, etc. are all located in
the Assets directory in the root of the project. Within the Assets directory, you
will find sub-directories for each of these resources:

#### SASS / CSS
When authoring CSS for this project, you should be authoring using SASS - writing
\*.scss files into the __/public/assets/scss/__ directory. These files are then parsed
into CSS by the ruby SASS gem. To run SASS watch simply cd into the assets folder and
type in the command line: sass --watch scss:css

#### JavaScript
When authoring JavaScript files for this project, you should be saving those files
into the __/public/assets/js/__ directory, with each file being named appropriate to
its behavior or purpose.

#### Images
Nothing special about images in this website.

### TWIG TEMPLATES
This project relies on the Twig templating engine and the files you will work on are
located in craft/templates...

## Deploying Code

Once Grunt has completed, you should test and ultimately deploy your code from the
__/dist/__ directory, as this is the "distribution" version of the website. Issuing a
Pull Request and merging that code will result in the final "dist" directory being deployed
 to the target server.
