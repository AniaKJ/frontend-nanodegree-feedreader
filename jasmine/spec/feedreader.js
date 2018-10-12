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
            expect(allFeeds).toBeDefined();/*tests if allFeeds variable is defined*/
            expect(allFeeds.length).not.toBe(0);/*tests if allFeeds variable is not empty*/
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('All feed URLs defined and not empty',function(){
           allFeeds.forEach(feed=>{
             expect(feed.url).toBeDefined();/*tests if URL is defined*/
             expect(feed.url).not.toBe('');;/*tests if URL is not empty*/
           });
         });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it(' All feeds names defined and not empty', function() {
           allFeeds.forEach(feed=>{
              expect(feed.name).toBeDefined();/*tests if name is defined*/
              expect(feed.name).not.toBe('');/*tests if name is not empty*/
          });
         });
    });

    /* This is test suite for testing of hiding/showing of menu.*/

    describe('The menu', function() {

        /* This test that ensures the menu element is hidden by default. */

         it(' Menu element hidden by default', function() {
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(true);/*tests if menu element has class 'menu-hidden',this class hides the menu element*/
         });


         /* This test that ensures the menu changes visibility when the menu icon is clicked.*/

          it(' Menu changes visibility when menu icon clicked', function() {
            document.querySelector('.menu-icon-link').click();/*triggers click event on menu-icon-link*/
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(false);/*tests if the menu will be made visible, by removing the class 'menu-hidden' from body*/
            document.querySelector('.menu-icon-link').click();/*triggers click event on menu-icon-link*/
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(true);/*tests if the menu will be hidden, by adding the class 'menu-hidden' to body*/
          });

    });


    /* This is test suite for testing of initial entries for the feed*/

    describe('Initial entries', function() {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.*/

         beforeEach(function(done){/*asynchronous function loadFeed(0) is invoked*/
           loadFeed(0);
           done();
         });

         it('Single element left within the .feed container', function(done) {
          expect(document.querySelector('.feed').innerHTML).not.toBe(null);/*tests if .feed element is not empty*/
          done();
         });
    });

    /* This is test suite for testing if new feed content gets loaded properly */
    describe('New Feed Selection', function() {

        /* This test ensures that the feed content changes when a new feed is loaded by the loadFeed function*/

         let firstFeed;
         let secondFeed;

        beforeEach(function(done) {/*asynchronous function loadFeed is invoked*/
          loadFeed(0, function(){/*loadFeed loads the feed content for the first element in allFeeds object*/
            firstFeed = document.querySelector('.feed').innerHTML;/*.feed  content for the first feed from allFeeds object*/
            loadFeed(1, function(){/*loadFeed loads the feed content for the second element in allFeeds object*/
              secondFeed = document.querySelector('.feed').innerHTML;/*.feed  content for the second feed from allFeeds object*/
              done();
            });
          });
        });

        it('New feed loaded by loadFeed function', function(done) {/*tests if the feed contents are different */
           expect(firstFeed===secondFeed).toBe(false);
           done();
        });
    });
}());
