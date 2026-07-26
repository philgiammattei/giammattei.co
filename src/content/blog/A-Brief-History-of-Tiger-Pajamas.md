---
title: A Brief History of Tiger Pajamas
description: An overview of the web agency that I ran with my friends
pubDate: 2026-07-26T00:00:00.000Z
heroImage: /img/group-close.dIYuDSMd_Z1rmFkU.webp
published: true
---

[Tiger Pajamas Web Site Company](https://tigerpajamas.com), the web agency composed of [Ashley McQuaid](https://ashleymcquaid.com), [Jon Mitchell](https://jonmitchell.net), and myself, is on indefinite hiatus as we pursue other projects.  One of the ironies of Tiger Pajamas was that we were so busy making sites for our clients (and being employees and spouses and parents elsewhere) that we never had much time to work on our own. We had a quick discussion about our brand, Ashley picked out some good typefaces and colors, and I put them up, and that was it, aside from an occasional blog post.  Relatedly, I haven’t had much time or energy to reflect on our time together, but it was an extremely fun two years and I hope this post can serve as a one-person oral history of a company that changed my life.

Jon forms group chats. This is one his unique skills, and he’s very good at it.  I first encountered him on Twitter while he was assembling a corpus of writing that became [taalumot.space](https://taalumot.space). This was deep in the pandemic and I was a new dad and eager to make new friends and form new hobbies.  Jon was happy to help, and swept me into a group DM about qigong (he introduced me to [Chinese Shamanic Tiger Qigong](https://taalumot.space/writing/laohugong.html), which I still practice somewhat regularly) and meditation and divination and yoga and things of that nature.  At one point I wanted to do a group tarot reading for my wife and me on our anniversary and he introduced me to one Ashley McQuaid, a [UX designer](https://ashleymcquaid.com) with a [divination business](https://eightofpentacles.com).  We, along with many others, spent the early 20s sharing practice tips, experimenting with the internet as a tool for community building, and then watching in horror as Twitter was destroyed by a hostile entity.

Jon had already noticed the acute limitations of using social media as a static repository of content, and began turning his many tweet threads into blog posts on a Squarespace site. We [chatted](https://taalumot.space/tiger-time/4) at the time about the compromises of social media and the freedom of hosting your own internet presence, and I started a project shortly thereafter that eventually became [phils-web-site](https://phils-web-site.net).  After [helping a scene-mate with a project](https://www.giammattei.co/projects/mystics-almanac), I revealed to my online friends a desire to one day be my own boss and work on projects as a self-employed consultant, something that felt very far-off from my then-current status as a journeyman developer.

Thankfully, I was able to find the exact moment where, in a Signal chat in late 2023, Jon pitched the company:

![](</img/Screenshot 2026-07-18 at 2.04.45 PM.png>)![](</img/Screenshot 2026-07-18 at 2.05.03 PM.png>)

The plan formed instantly: Jon would bring a product vision honed from decades of experience making and using sites, Ash would create a design process that matched the vibes of the site to each individual client, I would turn all of that into code. We took to iMessage to figure out our brand, our values, and our pitch, which ended up being something like “We are all busy working and being parents to young children, we are probably still in our pajamas, and we want to make you something special in our spare time.  It will be good and it will be matched to your personality and aesthetics.”  While domain shopping for various potential names, I scored a hit:

![](</img/Screenshot 2026-07-18 at 2.32.14 PM.png>)

Things moved quickly after that.  I registered the domain and put up a one page site that rendered different header fonts on every load and slowly morphed text and background colors using CSS animation.

![](</img/Screenshot 2026-07-19 at 12.30.09 PM.png>)

Late in the winter of 2024, we were able to meet in person for the first (and, so far, only) time. Ashley was taking care of an infant so we went to her home in Massachusetts and spent three days nailing down our product offering, defining our systems, and doing photoshoots.

![](/img/first-meeting.jpg)

Our core product offering was a fast and reliable static site with no ongoing hosting costs, stripped of the cruft of the overwrought features of Wordpress or Squarespace and given a unique personality via Ashley’s design process (Ash asks clients to send her album art, movie posters, and other aesthetic favorites to help her create personalized “vibe boards” that match people’s personality). I spent considerable time trying to use [Eleventy](https://www.11ty.dev) as our preferred static site platform, but [had trouble with its tooling](https://www.giammattei.co/projects/giammattei-4).  Once I discovered [Astro](https://astro.build), our platform fell together effortlessly: an Astro site with a nontechnical user-facing CMS run by [Tina](https://tina.io).  The per-project Git-based CMS meant we didn’t have to worry about a database layer, and the only meaningful downside for users was approximately a minute delay between hitting publish and seeing the results live.  I hope one day to write a detailed post about how to get a site set up with this stack; I’ve found it useful for many projects for myself and others.  The site on which you are reading this was [migrated to the Tiger Stack](https://www.giammattei.co/projects/giammattei-4) in short order.  During this time—and this is very important—I wrote and my band recorded the official Tiger Pajamas radio jingle.

 <div class="jingle">
    <iframe
      style="border: 0; width: 100%; height: 42px;display: flex; align-items: center;"
      src="https://bandcamp.com/EmbeddedPlayer/track=282410800/size=small/bgcol=ffffff/linkcol=e99708/transparent=true/"
      seamless></iframe>
  </div>

Our first client was my friend and neighbor [Tom Pike](https://tomrpike.com), who needed a simple one-page site to list publications, awards, and reviews. I was able to get him up and running quickly, and we were able to work together to get the right structure for the page and embed some cool things like  a widget that shows GoodReads reviews and a custom React component that shows a carousel of testimonials.

![Tom Pike's website](/img/tomrpike.png)

More ambitious sites were soon to follow.  Emory professor [Paul Root Wolpe](https://paul.root.wolpe.family) hired us to build a travelogue as he embarked on a sabbatical journey through Europe and Asia.  This was an important project for us to establish our conventions, and we hashed out things like “does the previous post arrow point left or right” and “what happens if a nontechnical client uploads a 20MB image”. Paul used his site faithfully across his journey, and I’m proud to have contributed to a body of work that, now complete, waits for people to discover it anew.

![Paul Root Wolpe's website](/img/paul-root-wolpe.png)

We teamed up with Tom Morgan, a minister who leads homeless outreach efforts in Vermont, on a completely new site for [Green Mountain Justice](https://greenmountainjustice.org/), a nonprofit with an important mission and many stories to share.  This project, aside from being immensely spiritually rewarding, helped us figure out how to handle metadata (posts can be tagged into arbitrary collections) and we also created a number of utility classes that let the site admins easily float an image to the left or right, or show two images side-by-side, with optional captions.  One tradeoff of our barebones CMS choice is that we have to teach our clients a little bit of HTML for more advanced layout, but this lines up nicely with our belief that web sites are for everyone, and that learning a bit about how they work is never a bad idea.

![Green Mountain Justice's website](/img/green-mountain-justice.png)

Over two years, we built sites for poets and astrologers and actors and artists.  I started to think of the `global.css` file that was copied from project to project as a “sourdough starter”: a living document that wore the best practices that I’d picked up on my many engagements into deep grooves.  One of my formative texts for CSS writing is Heydon Pickering’s [CSS Inheritance, The Cascade And Global Scope: Your New Old Worst Best Friends](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/), which rejects overly formal structures like [BEM](https://getbem.com) that demand arbitrarily structured markup in favor of style code that plays to the strengths of semantic HTML and the eponymous Cascade.  The stylesheet always starts with the variables needed for fonts, sizes, and colors (did you know you don’t need [Sass](https://sass-lang.com) for variables and nested selectors anymore?), then I import my font-faces and begin with my element selector styles, starting with `html`, `body`, and `main`, and working my way down to `blockquote`s and `figure`s.  Class selectors follow, which aren’t needed much if I get the element styles right. I hate [Tailwind](https://tailwindcss.com), but have found a small set of utility classes that speed me up, particularly with my many flexboxes.  Finally, media queries for different viewport sizes.  [Ethan Marcotte](https://ethanmarcotte.com/books/responsive-web-design/) recommends designing mobile-first, but I typically start with desktop layout implementation and work my way down.

I remarked in a Tiger Pajamas [blog post](https://tigerpajamas.com/blog/we-dont-make-fucking-software/) that the vast majority of my time on a project was spent writing CSS.  Obviously this doesn’t scale well, and we had tentative plans to offer a cheaper product that would be made up of previously implemented designs and components. Ultimately this made the work feel special; running counter to the usual grain of software product thinking, we placed our emphasis on a holistic presentation, with every detail considered and every margin and line height polished to pixel perfection.  This results in a site that you simply cannot get from a DIY framework, or from Claude.

What I gained from the work was immense confidence in my skill at the craft of web development, with each project a chance to build on my skills and consider new problems.  The core tools of CSS are now permanently in my brain with quick recall, and I can rip through a new Figma file like a school of piranha. It is also uniquely rewarding to work together with a small group of creative and insightful people, without the pressure of shareholders or Senior Directors, to figure out what work is worth doing, and how to do it well.  Ashley and Jon and I are all immensely busy with our families and careers and projects, but I will always treasure our time as Tiger Pajamas, and do not doubt that our paths will cross again one day.
