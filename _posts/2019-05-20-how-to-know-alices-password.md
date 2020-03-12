---
published: true
layout: post
title: "How To Know Alices Password"
categories: blog
tags: [tech, security]
image:
---

<img class="s t u ft ai" src="https://miro.medium.com/max/11196/0*tBDMUSYMhZfl5uki" width="5598" height="3657" role="presentation"/>

<small>
Photo by [CMDR Shane](https://unsplash.com/@cmdrshane?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)
<small>

Couple of days ago Alice, a friend of mine, called me and showed me the following email that she received earlier that morning.

TL;DR for Alice’s received email
--------------------------------

“Hi Alice! I have your password, so I was able to get access to all your contacts. If you don’t pay me, I’ll send them a video I took of you while visiting a porn website.”

<img class="s t u ft ai" src="https://miro.medium.com/max/4412/1*rU4_hLoDsN-7uUL0bW2ZjA.png" width="2206" height="846" role="presentation"/>
<small>
Actual phishing email sent to Alice
<small>


Alice confessed to me that she was only worried by the fact that _ALICE_PASSWORD_ was in fact her real password. She didn’t understand how it was possible so I showed her what happened.

How it was done?
================

How in the world would a random person know Alice’s password? Nowadays, is not uncommon to hear about how Company X got hacked or how Company Y left an unprotected database out there. As a result, there are thousands of files in the web with information that has been leaked. Take for example Collection #1. The latter is made up of more than 12,000 files weighing in at 87 gigabytes and containing ‘just’ 772,904,991 unique email addresses and passwords. So I told Alice that the attacker probably got her email and her password from one of those leaked databases and then proceeded to send her a phishing email.

If it happened to Alice…can it also happen to me?
=================================================

There is a really simple way to know if your credentials are in any of those databases. [Have I been pwned](https://haveibeenpwned.com/) (HIBP) is a free resource for anyone to quickly assess if they may have been put at risk due to an online account of theirs having been compromised or “pwned” in a data breach.

<img class="s t u ft ai" src="https://miro.medium.com/max/3184/1*xpNft0pfzNDDnrTHM2X9iw.png" width="1592" height="775" role="presentation"/>
<small>
Alice has been pwned!
<small>

As you can see Alice has been pwned, in other words, information such as her email and password is somewhere out there in the internet. Although this might sound like it is game over, it doesn't necessarily need to be that way. Just as HIBP suggests, you need to ensure to do the following:

<img class="s t u ft ai" src="https://miro.medium.com/max/1000/1*fE2_Yx5OzvQ6JrSvb5XhQA.gif" width="500" height="250" role="presentation"/>

Use a password manager
======================

According to a survey done by [Mcafee](https://securingtomorrow.mcafee.com/consumer/consumer-threat-notices/security-world-password-day/), consumers have an average of 23 online accounts that require a password, but on average only use 13 unique passwords for those accounts. 31% only use two to three passwords for all their accounts so they can remember them more easily. This is because humans are really bad when it comes down to remember stuff. So why not rely on computers to do the complicated job for us? That is why we should use a password manager, since it helps to generate and remember both: Good and strong passwords. You only need to remember one master password and the rest will be taken care of for you.

There are a lot of [good options](https://lifehacker.com/the-five-best-password-managers-5529133) out there. Also, I would highly suggest [taking a nice and secure approach](https://www.rempe.us/diceware/#eff) when it comes down to create THE master password or better said: THE master passphrase. After all, it is the one that protects your other accounts.

2 >>> 1
=======

Enable Second Factor Authentication (2FA) as soon as possible. Basically, authentication involves one of the following three things:

1.  Something that you know (e.g. Your password)
2.  Something that you have (e.g. Your phone)
3.  Something that you are (e.g. Your fingerprint)

On the one hand, the attacker had access to Alice real password, so in theory she could have logged in successfully to one of Alice’s accounts which is super scary. On the other hand, if Alice had 2FA enabled, the attacker would have needed physical access to Alice’s phone, which is way harder to obtain. This means that 2FA adds another layer of security to address the [vulnerabilities](https://blog.centrify.com/sfa-mfa-difference/) of a standard password-only approach (a.k.a Single Factor Authentication).

Use HIBP
========

Use [Have I been pwned](https://haveibeenpwned.com/NotifyMe) in order to receive an alert as soon as your email is found in a known database breach.

<img class="s t u ft ai" src="https://miro.medium.com/max/1600/1*-Z4PlTwt6tqp6ZBaUjorAQ.jpeg" width="800" height="450" role="presentation"/>

<small>
Detect. Protect. Respond
<small>

Conclusion
==========

Changing all your passwords from all your websites and enabling 2FA might be a little bit tedious at the beginning, but imagine the pain of being locked out of your own accounts? Imagine not having access to invaluable data such as your email, photos, and contacts? Imagine being robbed from your online bank or paypal account. Not taking action today could become a big regret in the near future. Remember, if it already happened to Alice, it can also happen to you.

P.S. It is too late to fix the roof when it is already raining.

References
----------

[https://securingtomorrow.mcafee.com/consumer/consumer-threat-notices/security-world-password-day/](https://securingtomorrow.mcafee.com/consumer/consumer-threat-notices/security-world-password-day/)

[https://haveibeenpwned.com/](https://haveibeenpwned.com/)

[https://inversegravity.net/2019/vulnerability-disclosure-at-signup/](https://inversegravity.net/2019/vulnerability-disclosure-at-signup/)

[https://www.forbes.com/sites/kateoflahertyuk/2019/01/17/collection-1-breach-how-to-find-out-if-your-password-has-been-stolen/#475e78322a2e](https://www.forbes.com/sites/kateoflahertyuk/2019/01/17/collection-1-breach-how-to-find-out-if-your-password-has-been-stolen/#475e78322a2e)

[https://www.forbes.com/sites/daveywinder/2019/01/17/collection-1-more-than-770m-people-pwned-in-biggest-stolen-data-dump-yet/?ss=cybersecurity#4e1abc79509f](https://www.forbes.com/sites/daveywinder/2019/01/17/collection-1-more-than-770m-people-pwned-in-biggest-stolen-data-dump-yet/?ss=cybersecurity#4e1abc79509f)

_Also published on [Medium](https://medium.com/@sergiodn/how-to-know-alices-password-49e8f86e1882)._
