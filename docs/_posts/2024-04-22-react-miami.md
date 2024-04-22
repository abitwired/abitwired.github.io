---
layout: post
title: React Miami 2024
date: 2024-04-22 12:52:00 -0700
categories: random
---

React Miami was a great conference this year. I learned a lot about React and made some new friends. I hope to attend next year! The conference was held at the Miami Beach Convention Center. The Miami Beach Convention Center was spacious and full of vendors from the overlapping eMerge conference. The second day of the conference was held at the Mona Commons, which was significantly smaller. The setup wasn't as nice as the convention center, but the talks were still great and everyone seemed to make the most of the equipment available.

## Day 0

Day 0 was a little underwhelming. They had some kick-off events and it was a day to check out the vendors, but overall I could have skipped the whole day.

## Day 1

Day 1 had a series of back-to-back conferences. They didn't have tracks which made it very low-key, which I enjoyed. I captured some notes from the talks I attended:

### Stop Lying to Your Users by Kent C. Dodds

_Stop Lying to Your Users_ was a great talk about the UI choices we make which mislead our users - intentionally or not. If your website is jumping around as it loads ads or other rich media content, you're lying to your users. If you're using a loading spinner that doesn't actually indicate progress, you're lying to your users. Kent gave a lot of great examples of CSS and JS techniques to avoid lying to your users (e.g., `aspect-ratio` in CSS can help create easy - honest - advertisement spaces on your website).

### History of React by Matheus Alburquerque

A good overview of where we came from and where we're going with React. I didn't learn anything new, but it was a good refresher.

### How to Succeed at Open Source by Christopher Chedeau

Christopher gave a great talk about how to succeed at open source. He talked about the importance of community and how to foster it. One point he stressed was "solve a real problem" - if you're not solving a real problem, you're not going to get contributors. He also mentioned the importance of documentation and how to make it easy for people to contribute. Lastly, he talked about the need to market your ideas. Unfortunately, good code doesn't lead to adoption - you need to market your ideas to get people to use them.

### Tall Poppy Syndrome by Brooke Jamieson

This was a talk about the challenges of being successful in the tech industry. Brooke talked about how people will try to cut you down if you're successful. She gave some great advice on how to deal with this, including surrounding yourself with people who support you and not letting the haters get to you. It was fun to get the Australian perspective on this topic that we've all experienced in some form or another. The talk emphasized empathy and self-assurance since Tall Poppy Syndrome is often a symptom of someone else's insecurities.

<hr/>

There were a lot of other great talks that I didn't capture notes for. I'm looking forward to watching the recordings if/when they're available. _Less Cruft more Power_ was easily the most entertaining talk with lots of great content and some excellent He-Man jokes.

## Day 2

Day 2 was a little more casual. The day started a little late and it was not easy to hear all of the talks. The Mona Commons was a little small for the number of attendees, but it was still a great day. I captured some notes from the talks I attended:

### Smart Contract Driven Development by Vinayak Joglekar and Ravi Verma

This was a workshop - not a talk. It was also poorly named because "Smart Contracts" imply Blockchain and this was not a Blockchain talk. The workshop was basically a How-To for turning a business idea into actionable unit tests via ChatGPT bots. They provided ~7 bots or so and each bot had a different personality. They asked each developer to come up with an idea and have the ChatGPT bot guide you through several processes:

- Define the problem
- Create a logo
- Have a bot generate questions you should answer prior to building the app
- Create an affinity diagram to help you understand the problem better
- Hand draw your affinity map (this was cool) and have the bot generate user stories based on those relationships
- Create unity tests from those user stories

It was a fun workshop and I learned a lot about how to use ChatGPT bots to help guide the development process, but it didn't _teach_ me much beyond a vague sense of an AI pipeline for generating business ideas.

Also, the devs in the workshop weren't super stoked about them asking us to provide ideas. They claimed the history wasn't available to them, but devs are always touchy about that and the speakers should have known better.

### Defending React Applications from Attack by Jessie Auguste

Jessie gave a great talk about how to defend your React applications from attack. While this talk had a lot of great points about the culture of security on a team, it neglected to provide some common examples of React-specific vulnerabilities. I would have liked to see some examples of common vulnerabilities and how to mitigate them. The end of the talk provided a couple of tools for testing a web application for vulnerabilities; I believe OWASP ZAP and Axe DevTools were some of the tools mentioned.

### How I Test a Million UI states with Every Merge by Chantastic

I enjoyed this talk immensely. Not only was the deep dive on [Storybook](https://storybook.js.org/) relevant to my interests, but the talk was also very well presented. Chantastic gave a great overview of how to use Storybook to test UI states and how to use it to test your components in isolation. He also talked about how to use Storybook to test your components in different states and how to use it to test your components in different contexts. I'm looking forward to trying out some of the techniques he mentioned in my own projects. I wish he had covered themeing a bit because I'm quite confused on the best ways to achieve that in Storybook, but it was a great talk nonetheless.

### Web, Mobile, and API, All Together: Universal Full Stack Apps in Expo Router by Keith Kurak

Keith had a fun presentation about Expo. If you've ever used Expo for more than a day, you probably could have skipped this talk, but it was a lot of fun regardless. Keith kept it conversational and had a live demo which added to the fun. Overall, it felt a bit like an Expo commercial, but it was still a good talk.

## Conclusion

React Miami was a great conference. I got sick on the way home and I'm still recovering (flying post-COVID always feels like a gamble). I would definitely attend the conference again.
