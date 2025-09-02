---
title: "To RAG or not to RAG - This is the question. And the answer is \"No\"."
pubDate: 2025-09-01
description: "A healthy dose of hype emerged over RAG (Retrieval Augmented Generation) and Vector DBs. Is it actually any good?"
author: "Loo0D"
---

Allow me to declare my bias at the start. RAG is just keyword search. Pulling out chunks of text from across the document which contain some search terms doesn't appear to be a very sensible approach to a forensic document review. 

If we think about it, this shouldn't be a controversial point - would you hire a lawyer if you knew they will Ctrl+F their way through your legal problems? 

This is far from ideal for the obvious reason - the reviewing LLM does not see the entire document. It is unable to connect the dots, make inferences on changes of tone or relevant but thematically unrelated data elsewhere in the document. The defendant is accused of causing a car crash, it is unfortunate that our notional AI lawyer won't know that they were also involved in a plane crash as the search term was "car".

And how about observability and accountability - what is the mechanism for generating the search terms? And then if a vector database is involved, which specific settings were used to determine "nearest neighbours", and how large were the chunks extracted around the matches? Who made those decisions and why? What was the governance process around it, where was it documented and how often is it reviewed and by whom? If you are running RAG in production in a high stakes use case - you need to be very aware that there is a non-trivial chance of you having to answer those sorts of questions in front of people in a "formal setting" when things inevitably go wrong.

The easy way out is to give the entire document to the LLM. If this cannot be done, then there is a clear technical limitation that is self-documented in the code, and your inevitable chunking solution (such as a map/reduce operation) is the "best effort" given current technological constraints, but in any event LLM gets to see all the text. Easy.

So what is RAG good for? Two things:

1. Saving money for hyperscalers on low-effort consumer AI use cases: "Talk to your files! All your files!" (*Sort of, *Mistakes Will Be Made)

2. Large homogeneous documents with small relevant sections - a million row CSV dump where you are looking for a row with a given name. RAG in this case is the right solution, but even so, in this case a vector DB adds an unnecessary and potentially harmful complexity. 