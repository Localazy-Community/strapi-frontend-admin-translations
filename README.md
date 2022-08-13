# Strapi Frontend Admin Translations Boilerplate by Localazy

This project is a Strapi boilerplate for frontend admin translations. Currently, Strapi currently natively supports these languages:
* ar (Arabic)
* fr (French)
* cs (Czech)
* de (German)
* dk (Danish)
* es (Spanish)
* he (Hebrew)
* id (Indonesian)
* it (Italian)
* ja (Japanese)
* ko (Korean)
* ms (Malay)
* nl (Dutch)
* no (Norwegian Bokmål)
* pl (Polish)
* pt-BR (Portuguese (Brazil))
* pt (Portuguese (Portugal))
* ru (Russian)
* sk (Slovak)
* sv (Swedish)
* th (Thai)
* tr (Turkish)
* uk (Ukrainian)
* vi (Vietnamese)
* zh-Hans (Chinese (Simplified))
* zh (Chinese (Traditional))

The public project (you can contribute there) for managing translations is [Strapi Frontend Admin](https://localazy.com/p/strapi-frontend-admin).

This repository will be updated frequently with new translations and Strapi version updates.

Couple of notes:
* Strapi interprets Danish as "dk" (not "da", which is the ISO code)
* Strapi interprets Norwegian Bokmål as "no" (incorrectly, more specific version should be used)
* Strapi interprets Traditional Chinese as "zh" (incorrectly, more specific version should be used)

Localazy and this boilerplate resolves these issues (see `app.js`).

Currently, Strapi does not allow users to add other than the above languages. See [this issue](https://github.com/strapi/strapi/pull/13096) for more details.
Hopefully, this will be fixed in the one of the future Strapi releases...
