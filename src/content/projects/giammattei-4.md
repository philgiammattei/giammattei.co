---
title: giammattei.co, Part 4
description: Blast off.
pubDate: 04/05/2024
heroImage: /img/waveform.png
featured: true
---

I've joked before that I don't write on this site enough, and that I love to remake the entire website on a new framework, so about half the posts on giammattei.co are me talking about how I completely remade giammattei.co. In that proud tradition, I welcome you to the FOURTH iteration of giammattei.co.

## A Brief Recap

In 2019, wanting to make a portfolio site for myself while I looked for a programming job, I hardcoded my fledgling site using HTML and CSS. This was a true labor of love: manually copy pasting a full HTML page every time I created a new blog post, creating my own custom SVGs that manually matched the color theme, creating a dynamic, responsive CSS layout, one line at a time. I worked really hard on it and I’m still really proud of it.

Then in 2020, after getting my first programming job and learning more about modern front-end web development, I converted my hardcoded site into an Angular single-page app. I moved over my code pretty much as-is, so the site looked and felt the same to visitors, but I greatly improved my experience maintaining it.

But it annoyed me that a simple information site would be using a tool better suited for a full-scale web app, and so in 2023 I redid it again in next.js, which allowed me to take advantage of its Static Site Generation abilities and serve simple HTML pages, lightning fast, while getting a modern React-based environment on the dev side.

## What’s Wrong with Next.js

I was initially very happy with the developer experience of my new Next site; I set up scripts to create new markdown documents for my blog posts with most metadata fields pre-filled, and it was easy to get into a flow and focus on the writing. But the more I used it, the more two things started to really annoy me.

First was the design. For the first time, I moved on from my initial design and used a starter template called [devii](https://devii.dev) that gave my site a Medium-ish feel. Very professional! Very slick! Very like 10,000 other sites out there! I told myself I’d redo the design later and never got around to it.

Second, next.js is an enterprise framework designed for gigantic projects, with reams of state management, advanced serverless cloud capabilities, and APIs for performance-intensive resource loading and the like. Moreover, Next is a framework that produces a “div thicket”, sacrificing clean HTML output for an improved “developer experience”, but in a way that made figuring out where to put a simple tracking tag a frustrating, error-prone chore. I have a (to use industry jargon) “dinky-assed website” with very simple needs, and once again, I felt like I was using the wrong tool for the job.

## Eleventy

In late 2023, I started to have conversations with two of my online friends that eventually grew into a full-fledged [company](https://tigerpajamas.com), and out of those conversations came a crystallization of the _values_ that I am interested in embodying with my online presence. It became more imperative for me to represent myself online in an authentic way, to join the [Indie Web](https://en.wikipedia.org/wiki/IndieWeb) and wrest some personal autonomy away from giant social media companies. As I explored this community, I found a lot of people who had made very conscious decisions about what tools to use, and a name kept coming back around and around: [11ty](https://www.11ty.dev).

Eleventy is a bare-bones static site generator that uses a simple data model and templating languages like Liquid and Nunjucks to help people quickly create static blogs and sites. It’s developed by a [single guy](https://www.zachleat.com), and is clearly a labor of love with an [enthralled community](https://11tybundle.dev) of indie web makers making very cool sites ([this one](https://chriskirknielsen.com) might be my favorite).

I made a few small sites with it and appreciated how quickly it got me up and running, and the simplicity of the data model. I tried making giammattei.co using 11ty, and then I got frustrated and scrapped my whole project and tried again. Once again, I hit a wall and got very dispirited, and gave up.

What happened? First off, I had major issues with how data flowed through the application. I had no issues setting up blog pages and collections and the like, but what I thought would be a simple and common addition to the homepage (a few featured projects along with their associated images) became a futile and frustrating effort.

I’m no stranger to tedious programming problems, but what really made 11ty non-viable for me was its debugging environment. I’m used to dumping my JavaScript data on the console, or directly in the page as stringified JSON, to help me understand my context, but 11ty uses some sort of circular dependency logic that makes this impossible. I searched and discovered a few workarounds, but nothing that worked 100% of the time, and I couldn’t shake the feeling that I was flying blind.

A less critical, but still important, issue was that I just really don’t like traditional template languages. React is the big bad in frontend but JSX syntax is really nice! If I want to list out the names of all of my blog posts with links and images, here’s how it looks:

**JSX**

```

<div>
{posts.map((post) => {
	<div>
		{post.image && <img src={post.image} />}
		<a href={post.url}>{post.title}</a>
	</div>
})}
<div>
```

**Nunjucks**

```
<div>
{% for post in posts %}
	<div>
		{% if post.image %}
			<img src="{{ post.image }}" />
		{% endif %}
		<a href="{{ post.url }}">{{ post.title }}</a>
	</div>
{% endfor %}
</div>
```

Maybe I’m scarred from my extensive time with Liquid, but I’m just not a fan of the tag structure, all the % signs and ending tags feel less elegant.

So I did what one does in the mid-2020s: I asked ChatGPT for help.

## Astro

I laid out my desire to use a simple static site generator to make a small website, as close to native HTML and CSS as makes sense, but with a better developer experience and the option to use a JSX-like template language. And ChatGPT recommended [Astro](https://astro.build).

I feel like a bad indie web participant saying this, but a weight was immediately lifted from my shoulders. After a few months of struggling against the tools, I was effortlessly building the sites I was envisioning. Coding was fun again!

Astro feels like the perfect marriage of influences to create, for me, the perfect set of tradeoffs: the simplicity and scrappiness of a little website tool, with the developer experience of a modern JavaScript framework. Styles are done with CSS, in `<style>` tags directly in the template, and there’s a big distinction drawn between the JavaScript you’re writing to generate the proper pages at build time, and the scripts that need to run in browser at runtime. It feels very intentional, and points the developer toward smart component design. It also makes it very easy to incorporate more fancy components: the checkbox on the blog page that allows you to see all of my posts together, along with the list of posts itself, is a React component, giving me responsive interactivity that would be much more difficult with raw HTML and JavaScript. I was also able to restore the original design of my site pretty effortlessly, which makes me very happy.

I hope that I don’t write another one of these posts for a long time. This feels like a site architecture that I can use for a long, long time, and tweak to my liking as I go, rather than starting from scratch again soon. Maybe this time around I’ll write some more posts!
