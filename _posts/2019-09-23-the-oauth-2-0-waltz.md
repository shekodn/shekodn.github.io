---
published: true
layout: post
title: "The OAuth 2.0 Waltz"
categories: blog
tags: [tech, security]
image:
---
<img class="s t u fs ai" src="https://miro.medium.com/max/10944/0*49RyqxJQQc4LygpQ" width="5472" height="3648" role="presentation"/>

<small class="img-caption">
Photo by [Thomas AE](https://unsplash.com/@thomasae?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)
</small>

This post covers an overview on how the OAuth 2.0 protocol works and a practical example in golang in order to apply and better understand it’s flow.

Why OAuth?
==========

Imagine that Alice just got the car of her dreams. To celebrate, she decides to go out to eat in a fancy restaurant and there is a valet parking service. When she gives her keys to the valet, she is giving that person access to practically everything: Trunk, dashboard, and being able to go anywhere at full speed. Wouldn’t it be nice for Alice to have a valet key?

*   One that tells the car that the maximum speed is 30 km/h
*   One that sends Alice an alert if the car goes too far away from her
*   One that doesn’t allow the trunk to be open

After all, the valet is supposed to go and park the car. So why would she need full access when she can exactly have the permissions she need in order to do the job?

Well, that’s exactly the problem that OAuth 2.0 (OAuth) solves. This protocol is used to exchange _valet keys_ or permissions across the internet. For example, let’s say that Alice just signed up into a popular contact application. Then the app asks her if she wants to import her contacts from her Google account. Instead of Alice giving the app her google username and password, the contact application get Alice’s contacts using a magic number that was obtained by using the OAuth protocol.

The OAuth Jargon
================

After having an overview of why the OAuth protocol is used, is time to get more technical and get to know some of the OAuth terminology.

Resource owner
--------------

The data owner, in this case Alice.

Client
------

The entity that asks the resource owner permission to get the respective resources, in this case the popular contact application.

Authorization Server
--------------------

The system that the resource owner (Alice) uses to accept and give permission to the client (Contacts app) to use the respective resources (Alice’s contacts), in this case Google.

Resource Server
---------------

The system or API that holds the data that the client wants to get to, in this case Google’s People API.

Authorization Grant
-------------------

The code that proves that the resource owner has accepted to share the respective resources.

Scope
-----

Defines how much authorization will the Access Token have. For example, The Resource Owner might agree to share only her name or the whole access to her Gmail account.

Redirect URI
------------

The redirect or callback URI indicates where the Authorization Server should go once the Authorization has been granted.

Access token
------------

The Access Token is the magic number (cryptographically generated) that the client needs in order to ask for the resources to the Resource Server. In this case, the resource server will get the token and verify whether it is valid or not. If it’s a legit one, the Resource Server will give back the respective resources (the ones agreed by the scope) to the client.

From Theory To Practice
=======================

Now that we know the OAuth’s jargon we can now proceed to make a tangible use of it.

Quickstart
----------

*   Create the **authorization server** [here](http://console.developers.google.com).

<img class="s t u fs ai" src="https://miro.medium.com/max/3096/1*NJ7BGn8N8teeaKdDTcv9dQ.png" width="1548" height="600" role="presentation"/>

*   In the _Authorized redirect URIs_ don’t forget to include the application’s callback URI: [_http://localhost:8000/callback_](http://localhost:8000/callback)

<img class="s t u fs ai" src="https://miro.medium.com/max/2680/1*s00VRbcn1qeTjL_PdFxfjQ.png" width="1340" height="466" role="presentation"/>

<small class="img-caption">
https://console.developers.google.com/apis/credentials/…
</small>

*   Clone the [git repository](https://github.com/shekodn/oauth_contacts) in the respective $GOPATH ($GOPATH/src/github.com/shekodn/)
*   Create an _.env_ file with the respective Client ID and Client Secret

```
GOOGLE_CLIENT_ID=xxx  
GOOGLE_CLIENT_SECRET=xxx  
PORT=8000
```

*   In your terminal just do _make run_
*   Go to the **client** that should be running in [http://localhost:8000/contacts](http://localhost:8000/contacts)
*   Click on _Import Contacts From Google_

<img class="s t u fs ai" src="https://miro.medium.com/max/800/1*RyUAJi50XtM9c36J5u2o2Q.png" width="400" height="243" role="presentation"/>

*   Select your Google account and give permission to the **client** to get the respective **resources**

<img class="s t u fs ai" src="https://miro.medium.com/max/800/1*GzODX91zeNxQg7xArWJJ_Q.png" width="400" height="513" role="presentation"/>

*   Sit back and wait for the **client** to retrieve the **resource owner’s** contacts

What happened?
==============

<img class="s t u fs ai" src="https://miro.medium.com/max/6632/0*nN0Cdi_288PmRV9v" width="3316" height="4416" role="presentation"/>

<small class="img-caption">
Photo by [Julius Drost](https://unsplash.com/@juliusdrost?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)
</small>


If we go to our terminal, we can find the logs and see the OAuth Waltz in action:

<script src="https://gist.github.com/shekodn/cea1d36addba1a6f3ad8b850c1c06869.js"></script>

<small class="img-caption">
[https://gist.github.com/shekodn/cea1d36addba1a6f3ad8b850c1c06869.js](https://gist.github.com/shekodn/cea1d36addba1a6f3ad8b850c1c06869.js)
</small>

*   The **resource owner** selected _Import Contacts From Google_ (line 4)
*   The **client** redirected the **resource owner** to the **authorization server** (line 5)
*   The **resource owner** gave a specific permission or a **scope** to the **client** by selecting _allow_

<img class="s t u fs ai" src="https://miro.medium.com/max/800/1*Px_pHsLx7u_zABLhvKaxww.png" width="400" height="468" role="presentation"/>

*   Since the **resource owner** allowed the **client** to use the respective resource, the **redirect URI** was processed (line 7)
*   Under the hood, the **client** is using the **authorization grant** that was sent from the **authorization server** to retrieve a valid **access token** (line 10)
*   The **access token** was granted to the **client** and now the **client** is using it to retrieve the contacts from the **resource server** (line 11)
*   Finally, the **client** received the **resource owner’s** contacts and the displays them in the application

OAuth Flows
===========

<img class="s t u fs ai" src="https://miro.medium.com/max/10368/0*4ZQXw8VRWYpX5uoA" width="5184" height="3456" role="presentation"/>

<small class="img-caption">
Photo by [Akhil Chandran](https://unsplash.com/@akhiltchandran?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)
</small>

OAuth 2.0 has four different flows:

*   Authorization Code
*   Implicit
*   Resource Owner
*   Client Credentials

In this case we used the **authorization code** flow, because we had a front and a back channel. In other words, we had a front-end and a back-end.

**Back-channel**
----------------

When communication is done from server to server (e.g. back-end to back-end), it is more secure since it is done by using end-to-end encryption.

Front-channel
-------------

The front channel in this case is the browser. Browsers are becoming more and more secure, but compared to communication from server to server, it is not as secure. An attacker might be able to obtain access to the application tokens (e.g. using XSS) or if she has access to your computer, the cookies and tokens are stored in the browser’s storage for anyone to see.

Now that we know what a front and back channel is, we can justify why we used the **Authorization Code** flow. First, we used the front-channel (less secure channel) to retrieve an **authorization grant,** which is useless by itself, because in order to exchange that grant for an **authorization token** we need the **authorization grant** plus the **client secret** which is only known by the server (back-channel), not the browser (front-channel). So we obtain the token in a more secure way by relying on the back-channel.

Using another flow
==================

There are cases in which an application might lack a back-end (Single Page Application) or when the authorization might be from back-end to back-end. So, before implementing OAuth for an application, we need to know which is the most convenient flow according to the project’s needs.

Wrapping It Up
==============

After going through this post, now we have a general overview of how OAuth 2.0 works, it’s flow, and how we can use it in order to ask for specific resources. Last but not least, let’s not forget the OAuth was made for **authorization** and not for **authentication**. If we want to use this protocol for the latter, we should include something like [OpenID](https://openid.net/connect/) since it will allow to have a better session management, but that’s a topic for another post. Thanks for reading and if you have any question or suggestions, feel free to leave a comment.

Resources
=========

[https://developers.google.com/identity/protocols/googlescopes](https://developers.google.com/identity/protocols/googlescopes)

[https://www.youtube.com/watch?v=996OiexHze0](https://www.youtube.com/watch?v=996OiexHze0)

[https://livebook.manning.com/book/understanding-api-security/chapter-1](https://livebook.manning.com/book/understanding-api-security/chapter-1)

[Write a Kubernetes-ready service from zero step-by-step](https://blog.gopheracademy.com/advent-2017/kubernetes-ready-service/)

_Also published on [Medium](https://medium.com/@sergiodn/the-oauth-2-0-waltz-957879e5316d)._
