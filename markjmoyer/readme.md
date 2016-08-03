# PORTFOLIO - [Mark J Moyer](http://www.markjmoyer.com)

## Project Dependencies

Following are dependencies and packages used in developing this website:

* [Git](http://git-scm.com/) - Source Code Management
* [MAMP](http://mamp.info) - Web Server
* [PHP](http://php.net) - Server-side scripting
* [Apache](https://httpd.apache.org) -The HTTP Server
* [Craft CMS](http://craftcms.com) - The content management system
* [jQuery](http://jquery.com/) - The Write Less, Do More JavaScript Library
* [Modernizr](http://modernizr.com/) - Detects HTML5 and CSS3 features in the user’s browser
* [SASS](http://sass-lang.com//) - CSS Pre-Processor

##

## CRAFT CMS

# Documentation
* Installation instructions and much more.
* [Craft CMS](https://craftcms.com/docs)

# Changelog
* Release notes with bug fixes, improvements and additions.
* [Changelog](https://craftcms.com/changelog)

# Stack Exchange
* A great place to ask your Craft questions, meet the awesome Craft community and earn
  mad reputation.
* [Stack Exchange](https://craftcms.stackexchange.com/)


## Setting Up A Development Environment
MAMP was used to set this project up to run and test it locally. Run anyway you want. My
IDE of choice is ATOM but again, use whatever you want and drive it within your own capabilities.

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

### Finishing Your install
Grunt, Bower and NPM are not being employed at this time. However, as the project
grows this will undoubtedly change and more info will be added here.

### Viewing Your Local Website
Assuming you have setup a local web server, and assuming that you have cloned the
source code for this project into your web root, you should be able to access the
website at:

* (http://localhost:8888/dist/index.html)

#### Finding Your Web Root in Unix/Linux
Open a command-line terminal and enter one of the following commands based on the
distribution that you are using:

    # Find your web root
    $> grep -i 'DocumentRoot' /etc/httpd/conf/httpd.conf # RHEL/RedHat/Fedora/CentOS
    $> grep -i 'DocumentRoot' /usr/local/etc/apache22/httpd.conf # FreeBSD
    $> grep -i 'DocumentRoot' httpd.conf # Other distributions

&nbsp;

## Website Structure

### TWIG TEMPLATE ENGINE
This project relies on the Twig templating Engine and the files you will work on are
located in __/craft/templates, with exception to your __/assets/__ folder which is located
in __/public/__

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

## Deploying Code
/public/ is the root of this website and the contents of it can be removed from the
and placed at the same level. However, and for the sake of brevity, deploy this
project as is.
