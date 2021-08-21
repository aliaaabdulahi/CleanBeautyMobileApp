# CleanBeautyMobileApp
Take a photo of any Sephora Clean Beauty product while shopping &amp; this app will scan to see if its actually organic/natural. Using React Native, Google's Cloud Vision API, Node, Express, Sequelize, Postgres &amp; data scraped from the Sephora website


This weekend, I built a skin care application for a hackathon project. There are currently no styles because I prioritized functionality, but that's coming soon so be easy on me! Just wanted to show what I got done in a short time frame.

I wanted to build something useful. The application lets you take a photo of any Sephora Clean Beauty product and receive information on whether it's actually organic or natural.

What I used: React Native, Redux, Express, Node, and PostgreSQL. I also made use of the Google Cloud Vision machine learning API & a hidden API I found on the Sephora website when attempting to scrape data. I originally built a web crawler that would scrape data on the ingredients, but found that the hidden API was much more useful.

I seeded my database with information on each product and when Google Cloud Vision's API responded with the text it detected from the product, I queried my database for the detected text.

![ Alt text](skinapp. gif)
