# Feedreader testing with Jasmine

In this project I created seven tests using Jasmine to test web-based application that reads RSS feeds.

This is part of Udacity Front End Web Developer Nanodegree.

# How to run the tests?

Open the index.html file in any browser. At the bottom of the page you will see the results of all seven test.

# Tests details

First test suite - RSS Feeds - makes sure that the allFeeds variable has been defined and that it is not empty:
1. are defined- tests if allFeeds variable is defined and is not empty
2. All feed URLs defined and not empty - tests if all feeds have URL property defined and this property is not empty
3. All feed names defined and not empty - tests if all feeds have name property defined and this property is not empty

Second test suite - The menu - testing of hiding/showing of menu:
4. Menu element hidden by default - ensures the menu element is hidden by default
5. Menu changes visibility when menu icon clicked - ensures the menu changes visibility when the menu icon is clicked

Third test suite - Initial entries- testing of initial entries for the feed:
6. Initial entries - ensures there is at least a single entry in the feed after initial load

Fourth test suite - New Feed Selection - ensures that the feed content changes when a new feed is loaded:
7. New Feed Selection - tests if the feed content changes after selection of new feed
