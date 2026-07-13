---
id: prepper-retrospective-analysis
title: Prepper
date: July 13, 2026
type: Applications
status: Finished
category: ANALYSIS
description: What I learned building an app that didn't make me rich.
excerpt: What I learned building an app that didn't make me rich.
---

# PrepPal: what I learned building an app that didn't make me rich

A retrospective on ~2.5 years, 245 commits, and 70 merged PRs of a meal-planning side project — what it was for, what it became, and what I'd tell myself at the start if I could.

---

# 1. The idea, and bringing it to life

Meal planning is a small, boring problem that costs a surprising amount of mental energy. You plan a week, forget what you planned by Wednesday, lose the shopping list, re-decide the same meals you already decided, and end up throwing out half a bag of spinach anyway. Every "meal app" I'd tried was either a recipe-discovery feed dressed up as a planner, or a calorie tracker that judged you. I wanted a place to store the meals I actually cook, plan a week from them in minutes, and get an accurate shopping list out the other end — nothing more opinionated than that. I also wanted to get hands on experience with technologies that I wasnt getting access to in work.

That became **PrepPal** (shipped under the name **Prepper**). The honest goal going in was two things: learn how to build and ship a real full-stack product end to end, and — if it landed — maybe make some money from it. It didn't make any money. In fact it cost me quite a lot as I provision Azure resources and accidentally left them on longer than I should have. It did however teach me a lot, and I don't think either of those outcomes cancels the other out.

![Dashboard](/data/build-log/Images/Web/dashboard.png)

The first thing built, before any of the meal-planning logic, was auth — sign up, email verification, login. It's the least interesting part of any app for users but app security is something I find very interesting. Auth is also the foundation that everything else sits on top of, so it went in first and stayed mostly untouched for the rest of the project's life. I used (MailGun)[https://www.mailgun.com/lander/enterprise-email/] as the email delivery service. It was free and easy to use.

![Login](/data/build-log/Images/Web/login.png)

From there the core loop came together roughly in this order: a recipe library you own and edit yourself, a weekly meal-plan grid built from that library, and a shopping list generated from whatever's on the plan. That was the core of the app and to be fair, it did the job. Not complex enough to be worth paying for, slightly too much effort that I still wanted it automated.

![Create meal](/data/build-log/Images/Web/create%20meal%20-%20ingredients.png)

![Meal plan](/data/build-log/Images/Web/meal%20plan.png)

![Shopping list](/data/build-log/Images/Web/shopping%20list.png)

Later on, features got added that weren't in the original scope at all — reminders for things that might go off before you remember them, and a settings area for the custom tags and units the rest of the app is built around. At this point the rationale was 'okay this was fun to learn some new stuff but can I monetize this?'

![Reminders](/data/build-log/Images/Web/reminders.png)

![User settings](/data/build-log/Images/Web/user%20settings.png)

The "did it make money" question got a real answer only in the last week of this project, when I finally sat down and did the competitive and monetization research I should have done much earlier (more on that in section 3). Short version: there are already well-funded, AI-native competitors doing a version of what PrepPal was reaching for, with more traction and more capital behind them than a side project can realistically out-run. That's not a failure of the build — it's a market reality that should have been checked on day one instead of year two. To be fair I always knew this was destined to be a learning over earning project. I want to learn certain technologies that I wasnt using in work and thought this was the best way to do it.

---

# 2. Tech stack

- **Frontend:** React 18 SPA, React Router for client-side routing, plain React Context for state (no Redux), Tailwind CSS for styling (an earlier pass through Material UI and Bootstrap is still visible as unused dependencies — more on why in section 3), Lucide for icons, Sonner for toasts, `axios` for API calls.
- **Backend:** Spring Boot 3 (Java 17), REST API, Spring Data JPA over Microsoft SQL Server, Spring Security with JWT access tokens.
- **Database:** Azure SQL (SQL Server), schema evolved through hand-written migration scripts as features were added — leftovers, reminders, remember-me sessions, shopping-list date windows.
- **Auth:** Short-lived JWT access tokens plus an HTTP-only refresh-token cookie for silent session restore, with credentials encrypted client-side (RSA public key) before they ever hit the wire.
- **AI:** Anthropic's Claude API on the backend for every AI-assisted feature — parsing a pasted recipe or a recipe URL into structured fields, suggesting meals from a free-text description or from what's in the fridge, and generating alternatives to an existing recipe.
- **Hosting:** Azure App Service (backend) with Azure SQL, a custom domain (`chefprepper.app`) with Azure handling TLS termination, Mailgun for transactional email (verification codes).
- **Ops:** No CI pipeline and no container orchestration — deploys were manual, and the whole thing runs as a single instance against a single database.

---

# 3. Things I learned

The one underneath all the others: there's a real difference between knowing how a piece of technology works in isolation and actually shipping it as part of one working product, end to end, with real users' data on the other side of it. Tutorials teach you the first. Only finishing something teaches you the second.

**Responsive design.** This was always intended to be a mobile app. As it had a shopping list feature I didnt expect users to bring their laptop to the grocery shop. However, building web first was easier for me as I had some eperience with it and hosting web apps was far more frictionless than commiting to putting it on any app stoos. But building the desktop layout first and "making it fit" on mobile after the fact doesn't work — several pages ended up with genuinely different layouts for mobile (a day-carousel instead of a full week grid, a single-column list instead of a card grid), not just a squeezed version of the same one. Certain layouts/components were simply different on mobile vs web and this was a pretty interesting thing as a primarily backend dev to tackle.

<table align="center">
  <tr>
    <td align="center"><img src="./Documentation/Images/mobile/recipes .png" width="250"><br><sub>Recipes</sub></td>
    <td align="center"><img src="./Documentation/Images/mobile/meal plan.png" width="250"><br><sub>Meal Plan</sub></td>
    <td align="center"><img src="./Documentation/Images/mobile/Screenshot 2026-07-10 133602.png" width="250"><br><sub>Shopping List</sub></td>
  </tr>
</table>

**Refresh tokens and cookies.** The first step in trying to make my app feel premium was cookies. It would be pretty amateur to get users to constantly sign in each time they boot up or refresh the page. I have expereince with JWT authentication but that doesnt fix poor auth UX. But getting a JWT-based session to survive a browser refresh without asking the user to log in again — while not leaving a long-lived credential sitting somewhere JavaScript can read it — was new to me. The solution was short-lived access token in memory, long-lived refresh token in an HTTP-only cookie, and a silent refresh call on app load.

**Hosting and dev ops.** Getting from "runs on my machine" to "runs on a domain other people can hit" is its own project: environment-specific config, TLS, CORS that only breaks in production, and a database that isn't the one on your laptop. I learned a lot about the hosting side (especially the cost of idle resources) and I hope to get more hands on experience of live users soon.

**DNS.** A surprising amount of "why doesn't this work" time went into DNS propagation. There is a surprising lack of feedback when pointing azure resources to a custom domain. Records silently pointing at the wrong thing had me waiting hours as 'it can take up to 24 hours'. But then you add the right thing and its kind of instant. Interesting but frustrating at the same time.

**UX/UI.** The difference between a feature working and a feature feeling good is almost entirely in the in-between states — what happens while something is loading, what an empty state says, what happens when the AI comes back with nothing useful. UX is something I became way more interested in when I owned the project. It is actually something I have come to care deeply about. Its interesting to think of how users will feel during loading times or transitions between pages and how you can make this better for them.

![Fridge, empty state](/data/build-log/Images/Web/fridge.png)

![Fridge, loading state](/data/build-log/Images/Web/fridge%20-%20loading%20.png)

![Fridge, suggestions](/data/build-log/Images/Web/fridge%20-%20suggestions.png)

**Domain-Driven Design.** Once the frontend grew past a handful of pages, an undifferentiated pile of `components/` stopped scaling. Splitting the codebase into bounded domains, with a strict rule that a component is either a page-level orchestrator or a leaf that does one thing, made it possible to add a feature without having to re-learn half the app first. If I was starting this project again I would lean fully into DDD code structure.

![Meal plan — leftovers modal](/data/build-log/Images/Web/meal%20plan%20-%20add%20meal%20modal%20-%20leftovers.png)

**Designing systems that change — make it modular.** The leftovers feature above didn't exist in the original design; neither did reminders, AI suggestions, or half of what's in the settings page now. Every one of those landed with a database migration and a new module rather than a rewrite, which only worked because nothing early on assumed the feature set was final. This also applies to frontend components and backend classes. The more you can reuse the better.

**Budgets for Azure resources!! (the double exclamation marks are earned)** Cloud infrastructure bills whether or not anyone opened the app that month. It's easy to forget that a side project has a running cost until something reminds you. I really wanted a live app. Just to say that I had something up there. But that came at a cost. I should have gone with a cheaper alternative but I had experience in the Azure ecosystem and I thought why not, maybe this app will take off and ill need such powerful hosting infrastructure.

**Do the feasibility work first.** The concept for this app began many many yeasrs ago and started as a python script reading from an excel spreadsheet. I intended this project to be a way to learn and get hands on experience with certain tech, and in that sense it was a success. However, the distance I went (buying a domain etc) could have easily been avoided by doing a proper research analysis. I guess I always knew they existsed but I just want to bring the project to life, end to end, and was somewhat blinded by that.

**How best to use AI — as an engineer, not just as a user.** My approach to AI within the app was simple: one focused job with rigid input/output sanitation. Personally I dont care for chat bots in an app. Too much can go wrong. I prefer to narrow the focus of a user to one thing. Say, meal alternatives. You dont want them asking for how best to store leftovers in this section. Thats just personal preference. Someone smarter than I would probably have one AI chatbot control the entire app but I prefered to break it down into smaller more narrowly focused parts. This made it slightly more black and white to decide if a request was malicious or out of scope.

The other thing I learned with regards to AI was how to get more use out of it. Progress exploded when I bit the bullet and bought a claude subscription. Prior to that I was booting up a gemini chat and copying and pasting. There is a fine balance of control here though. The 'I own everything but can copy and paste from chat' approach is secure and you truly know your code. You can make sure you follow best practices and dont veer off course. However, its almost impossible to keep up. AI moves at a dizzying rate. But this comes with a warning, if you move in the wrong direction, you go far in the wrong direction, and quick! I learned that its best to give AI focused tasks in clean branches with clear guidlines and guardrails. My general approach was describe what I want, have it repeat it back to me and go from there with small clear checkpoints. Commit often!

![Create meal with AI](/data/build-log/Images/Web/create%20meal%20-%20fill%20with%20AI.png)

**Scope creep — ship the MVP first.** This was always meant to be a simple meal plan -> shopping list engine with AI features being nice to haves once I got it off the ground. However, they quickly became a huge part of the app. This isnt bad and with how fast we can develop these days it wasnt that much effort. Maybe I alwayus knew this was destined to be a side project for learnig but I did learn one thing for sure. If the idea is novel or you really think you have something your competitors dont, get it into users hands. Perfect is the enemy of done. There is always time to add more features even after users join.

---

# 4. Where it stopped, and what I'd still like to do

While the app was a great learning experience there are some learnings that can only happen if the app has users.

- **Kubernetes.** The whole thing runs as a single instance today. Container
  orchestration was never necessary at this scale, but it's genuinely
  something I want hands-on experience with rather than theory.
- **Load balancing.** Same story — single instance, single database, no need
  for it yet, still on the list of things I want to have actually done once
  rather than just read about.

---

# Conclusion

All in all this project was a success, I learned alot and (mostly) enjoying doing it.
