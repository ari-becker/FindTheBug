This is one of those bugs where you bang your head against the wall once you figure it out.
Simply, if you look closely at: property('localVersion', 'severVersion') you'll see that 'severVersion' is misspelled; it should be 'serverVersion'. See it? The first one was just missing an r.
I'm so used to having a compiler smooth out my human flaws that this one took me by surprise.
Of couse in Javascript it ran perfectly fine without any errors at all - it just didn't do what I expected it to.