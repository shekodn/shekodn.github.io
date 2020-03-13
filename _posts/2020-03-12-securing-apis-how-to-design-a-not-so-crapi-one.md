---
layout: post
title: "Securing APIs: How to Design a Not So crAPI One"
categories: blog
tags: [tech, security, apis]
---

In this post we discuss about some components that every API should have in order to not build a [**C**ompletely **R**idiculous **API**](https://owasp.org/www-project-api-security/) **(**A.k.a crAPI).

<img class="s t u gl ai" src="https://miro.medium.com/max/2560/1*wiw989th0OsrlOiI3CTgbQ.jpeg" width="1280" height="1065" role="presentation"/>

You cannot longer afford to build crAPI ones
============================================

Is no secret that APIs are becoming more popular because of initiatives such as Open Banking (PSD2) and IoT. This means that data is being exposed, and while some of it might be meant to be public, sensitive data such as PII (Personal Identifiable Information) is also being served. As a result, these initiatives need to take a secure approach since data breaches are becoming more common. Similarly, regulations such as GDPR are making sure the companies that are leading these initiatives are being held accountable, thus designing a secure API (and every other piece of software in general) has become both: A critical **business** and **technical** need.

Getting Started
===============

One way to build a not so crAPI API is by adding security layers. Each one of them will provide a specific control that will make it harder for an attacker to compromise the application. One way an attacker can do so is by taking advantage of the following:

*   [**S**poofing](https://en.wikipedia.org/wiki/Spoofing_attack)
*   [**T**ampering](https://en.wikipedia.org/wiki/Tampering_(crime))
*   [**R**epudiation](https://en.wikipedia.org/wiki/Non-repudiation)
*   **I**nformation disclosure ([privacy breach](https://en.wikipedia.org/wiki/Data_privacy) or [data leak](https://en.wikipedia.org/wiki/Data_leak))
*   [**D**enial of service](https://en.wikipedia.org/wiki/Denial-of-service_attack)
*   [**E**levation of privilege](https://en.wikipedia.org/wiki/Privilege_escalation)

These set of threats are often referred as [**STRIDE**](https://en.wikipedia.org/wiki/STRIDE_(security)), a model used to help reason and find threats to a system. Today you will use this model to harden the following application (see diagram below):

<img class="s t u gl ai" src="https://miro.medium.com/max/698/1*lcIFqET90HETSonh54X3AA.png" width="349" height="196" role="presentation"/>

<small class="img-caption">
crAPI diagram
</small>

Although the current state of it is vulnerable to **all** of the STRIDE threats, at the end of this post the application will be more difficult to compromise just by adding some security layers.

The Authenticator Layer
=======================

<img class="s t u gl ai" src="https://miro.medium.com/max/960/1*w3nt2dTvWQVAdcTmgDACUA.gif" width="480" height="270" role="presentation"/>

<small class="img-caption">
Let me in! Please?
</small>

Imagine that you receive an invitation to a wedding. When you arrive to the event, you go to the entrance and show your invitation and you use your name to get it. Then, you go inside and you have a seat, a 3-course meal, and you can ask the waiter for drinks. Once inside no one will ask for your an invitation, because that already happened at the entrance and you are going to be treated as an invited guest.

Just as you don’t want uninvited people in a wedding that it is supposed to be for close friends and family, you don’t want unauthenticated (uninvited) users consuming resources that are meant for authenticated (invited) users. As a result, you need to make sure that authenticated requests are the only ones that are processed. If you receive an unauthenticated one, it should be ignored by the system.

> “Protecting each API endpoint behind authentication requirements should be the norm. Don’t allow free passes on a resource unless necessary for functionality.”

<img class="s t u gl ai" src="https://miro.medium.com/max/1136/1*w40CcZ4QYIQOq7a5cm2Ndw.png" width="568" height="145" role="presentation"/>

<small class="img-caption">
Adding The Authenticator Layer
</small>

In order to do so, the authenticator needs to be able to ensure that users and clients are who they say they are. This process involves at least one of the following three things:

*   Something that you know (e.g. Password)
*   Something that you have (e.g. Your phone)
*   Something that you are (e.g. Your fingerprint)

To be able to authenticate users in an interoperable and manageable way, you can rely on protocols such as OAuth2, OpenID Connect, and JWT. Using one of these solutions, which provide a security control, will also give you the possibility to manage aspects of user identity such as log in, sign up, logout, and more. The ability to manage these aspects and being able to distinguish _user A_ from _user B_ can be really useful in order to **provide business value** to your application. Furthermore, when it comes down to security you will be able to ensure accountability (e.g. Who performed X?).

The Access Controller Layer
===========================

<img class="s t u gl ai" src="https://miro.medium.com/max/800/1*unoiOPhjl04Qm7zPhm2EDg.gif" width="400" height="194" role="presentation"/>

<small class="img-caption">
You shall not pass!
</small>

Now that you have the authenticator in place, let’s go back to the previous wedding example: After being enjoying the event for a while, you go to the toilet and you pass by the bar. Then you see a really fancy wine bottle. You ask the waiter for one glass, but she politely tells you that the bottle is only meant for the family of the bride. In other words, _not because you are already inside means that you can do anything you want_. As a result, you need to add a second component: The Access Controller.

<img class="s t u gl ai" src="https://miro.medium.com/max/1540/1*15Qnm7zjRhi9Z06La9LFXA.png" width="770" height="145" role="presentation"/>

<small class="img-caption">
Adding The Access Controller Layer
</small>

This component will allow you to identify, not **who**, but **which** permissions or claims the user that is making the request has (Remember: authentication !=authorization).

In addition, the Access Controller will help to preserve confidentiality and integrity within the system. How? Data will only be accessed and modified by users that have the necessary claims to do so. One way to represent claims securely between two parties is by using a JSON Web Token (JWT). This is an open, industry standard [**RFC 7519**](https://tools.ietf.org/html/rfc7519) to manage authorization.

P.S. Because the JWT could be leaked, remember to add an expiration time claim that meets your business needs and to use a **strong** secret.

The Rate Limiter Layer
======================

<img class="s t u gl ai" src="https://miro.medium.com/max/960/1*xm5TcoJyR5lQt8dqQ9wLRA.gif" width="480" height="358" role="presentation"/>

<small class="img-caption">
The _rate_ limit here is 12.
</small>

For every piece of software out there (even if it is in the cloud), there is a physical server plugged somewhere. This server has limitations such as memory and CPU. As a result, you want to make sure that no one is overusing those resources, because this would mean that it would be at the expense of other legit clients. One way to prevent this is to add a Rate Limiter Layer. As it name suggests, this component indicates how many calls your application may make per time window. Adding this layer of protection will also help to slow down brute force attacks (e.g. login endpoint) and to protect the overall availability of the system.

<img class="s t u gl ai" src="https://miro.medium.com/max/1864/1*PQ3osb68_dUSdx3eSFkhoQ.png" width="932" height="145" role="presentation"/>

<small class="img-caption">
Adding The Rate Limiter Layer
<small>

To implement this solution, you can introduce a rate limiter application middleware or you can delegate the rate limiting duties to a load balancer such as NGINX. In this case, we can use the latter to protect the Application Logic servers from being overwhelmed by too many user requests at the same time. This is done by a rate limiting algorithm (e.g. [Leaky Bucket](https://www.youtube.com/watch?v=nJGTJ5Hd6Hk)) used to check if the user session (or IP address) has to be limited based on the information in the session cache. In case a client made too many requests within a given time frame, the Rate Limiting Layer will prevent traffic interfering with the other layers that are meant to be consumed by legit users.

Although it would be possible for client X to use different IPs to ‘fool’ the Rate Limiter, you need to remember that there is dollar cost of each legit IP (e.g. [Amazon Light Sail cost 3.50 USD/month](https://www.youtube.com/watch?v=nJGTJ5Hd6Hk)). So is up to the attacker to decide whether is worth the money to obtain a bunch of different IPs or not. If the attacker decides to do so, using a solution such as NGINX will also allow you to become more granular when it comes down to block or blacklists IP addresses or even IP ranges.

The Logger Layer
================

<img class="s t u gl ai" src="https://miro.medium.com/max/2560/1*1qGyVFQix5MHj4pJl29aSg.jpeg" width="527" height="473" role="presentation"/>

_Where are the logs?_ This question is probably going to be the first one asked by Law Enforcement or Compliance as soon as there is a security incident or an audit. Having a Logger (Audit System) will allow you to take a break when this happens. Furthermore, it will give you an understanding of what is going on. For example, questions such as **who** is making the API call, **which** type of request is it, and from **where** is that call coming from are going to be easily answered.

Besides, a good Audit System will allow you to create alerts that will help you to respond accordingly (and hopefully in time) if something bad happens. In addition, you need to ensure that every authenticated request (even though it is not authorized) goes through the Logger layer. By doing this, you are going to be able to identify if Alice, an authenticated client, is trying to access Bob’s private resources or if she is making calls to unauthorized endpoints.

<img class="s t u gl ai" src="https://miro.medium.com/max/2122/1*EKPg8w6TWtbjU0L0VkA-SQ.png" width="1061" height="145" role="presentation"/>

<small class="img-caption">
Adding The Logger Layer
</small>

Failing to have a good Audit System will make Forensic Evidence and Long Term Analysis really difficult, because going back to understand what happened or wanting to go through old logs (the ones that will help you comply with your retention policy)  is not going to be possible. In addition, [according to the OWASP](https://owasp.org/www-project-api-security/), most breach studies demonstrate the time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.

Wrapping it Up
==============

After adding the Authenticator, Access Controller, Rate Limiter, and the Logger, you have been able to mitigate some of the STRIDE threats discussed at the beginning of this post.

<img class="s t u gl ai" src="https://miro.medium.com/max/2122/1*yOw-FDROVVglDE9Gn9B1eA.png" width="1061" height="145" role="presentation"/>

<small class="img-caption">
Final Diagram: [https://gist.github.com/shekodn/81eeefdefc7ae810947269ad15d1bbb2](https://gist.github.com/shekodn/81eeefdefc7ae810947269ad15d1bbb2)
</small>

**Spoofing** now is less likely, because you have an authenticator in place to be able to differentiate between Alice and an unauthenticated (uninvited) user. And because you know that Alice is supposed to only read and modify her own data, **Information Disclosure** and **Tampering** are more difficult to exploit since you have an Access Controller in place. And not only that, if someones is trying to maliciously modify data, you (and the CISO) can sleep better since the Logger will be able to identify who is making the malicious call without the risk of someone denying or **repudiating** it. Last but not least, if an attacker wants to cause a **Denial of Service (DoS)** attack or brute force a specific endpoint, she will have a hard time doing so (or at least it will be more expensive $$$) since the rate limiter is up and running.

Final Thoughts
==============

This was just an overview of some components that should be taking into account when designing an API. As [Chema Alonso](https://medium.com/u/af057c1bb0f0?source=post_page-----fe94b15ea821----------------------) and many other Security Researchers would say: _You can always spend more time and money in security_. So you can always add breath and depth to this implementation. However, omitting or misconfiguring one of these layers could lead to a security incident or fail to respond and learn from one. Furthermore you will bring bad PR to your entire company. And while we all want to be on TV someday, there are better ways to go about that. Remember, nothing is un-hackable, but you can make your API a real pain in the arse to be compromised.

If you have any suggestions, I would love to hear them. I’m pretty sure we can include more ways on how to design (or not) an API.

P.S. If you want to go deeper into secure API design, I highly recommend having a look on the [Project API Security](https://owasp.org/www-project-api-security/).

Resources
=========

[https://www.finextra.com/newsarticle/34820/trust-in-open-banking-negotiating-data-liability-between-banks-and-tpps](https://www.finextra.com/newsarticle/34820/trust-in-open-banking-negotiating-data-liability-between-banks-and-tpps)

[A Massive Guide to Building a RESTful API for Your Mobile App](https://savvyapps.com/blog/how-to-build-restful-api-mobile-app)

[STRIDE](https://en.wikipedia.org/wiki/STRIDE_(security))

[OWASP API Security Project](https://owasp.org/www-project-api-security/)

[https://www.nginx.com/blog/rate-limiting-nginx/](https://www.nginx.com/blog/rate-limiting-nginx/)

Diagrams were made using: [https://www.planttext.com/](https://www.planttext.com/)
