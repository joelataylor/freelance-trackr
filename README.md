FreelanceTrackr
================

This is the new Ember.js version of FreelanceTrackr!

FreelanceTrackr (FT) is a small Ember.js app to help log freelance time. With FT you can create Clients and Projects, add Services to the Projects and when you're ready to bill, you'll generate and send out Invoices.

When you generate an Invoice, you'll have the option to create a PDF and email it to your client. You can also have the PDF automatically uploaded to a Dropbox account. You can easily see which Invoices are overdue and easily resend the invoice (with a note) to the client reminding them it's time to pay!

In the future I plan to integrate Stripe so clients will be able to click on an invoice Pay Now button and pay the invoice online. Checks are such a PITA to deposit - even with mobile photo banking.

When you receive payment for an invoice, you mark the date received and you're done!

Reports will be a section where you can see an overview of how much you've made - by year, overall, or by client. You'll be able to see who your top earning clients are so you can send them an end of year gift. :)


#### Install Guide
These instructions are for a Mac. I'm using OSX 10.9.3 but I'm pretty sure newer and older versions of OSX will run it fine, just as long as you have the required gems and node packages installed. FT is built on Ember.js and Ember CLI. npm install phantomjs -g

# Required Installs:
Node.js: http://nodejs.org/
Bower: npm install -g bower
Phantom.js: npm install -g phantomjs
Ember CLI: npm install -g ember-cli

SASS: sudo gem install sass

# Setup:
Clone the repo: git clone git@github.com:joelataylor/freelance-trackr.git
Change into the FT directory: cd freelance-trackr
Run Node package manager: npm install
Run Bower package manager: bower update

# Running:
Now in the same root project directory: ember serve
(if you get a problem here, make sure you're not running LiveReload anywhere else)
Now in a browser: http://0.0.0.0:4200

You should see the FT app running!
