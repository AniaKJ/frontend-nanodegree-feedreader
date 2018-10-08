/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('All feeds URLs defined and not empty', function() {
            var length = allFeeds.length;
            for (var i=0; i<length; i++){
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url).not.toBe('');
            }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it(' All feeds names defined and not empty', function() {
            var length = allFeeds.length;
            for (var i=0; i<length; i++){
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name).not.toBe('');
            }
         });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it(' Menu element hidden by default', function() {
            expect(document.querySelector('body').className).toBe('menu-hidden');
         });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it(' Menu changes visibility when menu icon clicked', function() {
            document.querySelector('.menu-icon-link').click();
            expect(document.querySelector('body').className).toBe('');
            document.querySelector('.menu-icon-link').click();
            expect(document.querySelector('body').className).toBe('menu-hidden');
          });

    });


    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done){
           loadFeed(0);
           done();
         });

         it('Single element left within the .feed container', function(done) {
          expect(document.querySelector('.feed').innerHTML).not.toBe(null);
          done();
         });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         let firstFeed;
         let secondFeed;

         beforeEach(function(done) {
           loadFeed(0, function(){
             firstFeed = document.querySelector('.feed')[0].innerHTML;
             loadFeed(1, function(){
               secondFeed = document.querySelector('.feed')[1].innerHTML;
               done();
             });
           });
         });

         it('New feed loaded by loadFeed function', function(done) {
           expect(firstFeed===secondFeed).toBe(false);
           done();
         });

    });
}());
