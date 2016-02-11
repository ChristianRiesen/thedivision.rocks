### Welcome, Agent!
`this repository contains the files which are needed to build the thedivision.rocks website`

  The Website provides a curated list of useful links for new agents as well as for experts

#### How-to build

###### Requirements
The Node Packet Manager `npm` should be installed on your machine.
  * Gulp `npm -g install gulp`
  * Bower `npm -g install bower`

###### Build the stuff
First time using this repository you've to fire up
`npm install` & `bower install`. So that every dependencies will be installed.

After that you're able to use different gulp commands which you can lookup in the `gulpfile.babel.js`.



| command | description |
|---|---|
| `gulp serve` | It serves the files, creating an browser-sync instance and watch for changes and rebuild if needed
| `gulp build` | Just build the files. **Required before you do a pull request** It also stuck somewhere right now and will take around one minute to shows that the build succeeded. (It's actually done after a few seconds)|

#### Contribute
This project is and should be always community driven. If you want to contribute something to this project just       create a fork, do some changes (for example, add a new link or delete dead links) and create a pull-request. I'm going to review the request as quickly as possible and push the changes to the server (that part will probably become an automatic process in the near future).

Also there're no rules except for one: Be nice!

#### Credits
  * [Miodec]()
  * [Angier]() for beeing awesome
  * [The Division Discord Community]() for beeing awesome
