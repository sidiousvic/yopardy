## y o p a r d y 🍍

AN APP OF JEOPARDOUS FUN 🤖👍🏼🔥

Check it out by clicking the cheese. [🧀](https://sidiousvic.github.io/yopardy/)

_BUILT BY SIDIOUSVIC, ENGINEER @ CODE CHRYSALIS 🐛_

## Contribute

1. **Fork your respective cohort's branch** `ccXX`

2. **Clone your fork** `git clone https://github.com/<yourusername>/yopardy.git`

3. **Set up environment variables:** `cp .env.default .env` and edit `.env` with appropriate details:

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

4. **Migrate & feed database:** `yarn migrate && yarn seed`

5. **Start server:** `yarn server`

Your server should now be up and generating games at `http://localhost:4000/yopardy/game` by default.

6. **Start your React client:** `yarn start` **and hack away**

At this point, I reccomend you take a while to understand how state is implemented with [`zustand`](https://github.com/react-spring/zustand). Try your best to stay consistent with the current use.

7. **Commit often and atomically** ⚠️

8. **PR against master with a DESCRIPTIVE title, assign** `@sidiousvic` **for review**

## Wanted Features

For new features, [please create an issue](https://github.com/sidiousvic/yopardy/issues) with the prefix [FEATURE].
