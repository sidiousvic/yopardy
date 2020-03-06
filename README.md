## y o p a r d y 🍍

AN APP OF JEOPARDOUS FUN 🤖👍🏼🔥

Check it out by clicking the cheese. [🧀](https://sidiousvic.github.io/yopardy/)

_BUILT BY SIDIOUSVIC, ENGINEER @ CODE CHRYSALIS 🐛_

## Contribute

1. **Clone the repo** `git clone https://github.com/sidiousvic/yopardy.git`

2. **Set up environment variables:** `cp .env.default .env` and edit `.env` with appropriate details:

```
# This should point to the server root.
REACT_APP_SERVER_ROOT=http://localhost:4000/yopardy/

# Your database details.
DATABASE_URL=
DATABASE_USER=postgres
DATABASE_PASSWORD=
DATABASE_HOST=localhost
DATABASE_NAME=yopardy
DATABASE_PORT=5432

# The port you want the express server to run on.
EXPRESS_PORT=4000
```

3. **Migrate & feed database:** `yarn migrate && yarn seed`

4. **Make a feature branch** `git checkout -b <myfeature>`

5. **Start server:** `yarn server`

Your server should now be up and generating games at `http://localhost:4000/yopardy/game` by default.

6. **Start your React client:** `yarn start` **and hack away**

At this point, I reccomend you take a while to understand how state is implemented with [`zustand`](https://github.com/react-spring/zustand). Try your best to stay consistent with the current use.

7. **Commit often and atomically** ⚠️

8. **PR against master, assign** `@sidiousvic` **for review**

## Wanted Features

#### `🔥 Most wanted | 💅🏼 Easy | 😈 Fiddly | 🍪 Unneeded but fun | 🤬 You f*cking kidding me!?`

🥑 Add unit tests 🔥

🥑 Refactor to Typescript 🔥😈🍪

🥑 Emojis should appear on boxes to show right or wrong answer 💅🏼

🥑 Indicate which team answered and whether they got it right 💅🏼

🥑 Add music, and change music according to stage 😈🍪

🥑 Random double point round 🍪

🥑 Implement `xstate` finite state machines 🔥😈🍪

🥑 Final extra points question that anybody can answer 🍪

🥑 Implement a backend with a question database and server 🔥😈🤬

🥑 Points penalty if you got a question wrong (half of winnable points) 💅🏼

🥑 Implement an editor page where you can update questions 😈🍪🤬

🥑 Timer on the screen for choosing, another for answering 😈

🥑 Implement button to pick a random question 💅🏼🍪

🥑 Customizable team names 💅🏼

🥑 Add end to end testing with `cypress` 🔥🤬

🥑 Turn every item in this list into an issue with appropriate emoji labels 🔥🤬

For new features, [please create an issue](https://github.com/sidiousvic/yopardy/issues).
