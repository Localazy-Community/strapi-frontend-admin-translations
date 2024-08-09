<div align="center">

[<img src="https://localazy.com/directus9/assets/9fc36b9c-81b7-4dbf-bd82-b64cd984090f" width="285" height="50" alt="Localazy" >](https://localazy.com)

### 📦 `@localazy/strapi-frontend-admin-translations`

Strapi boilerplate for frontend admin translations by Localazy.

The public project for managing translations is [Strapi Frontend Admin](https://localazy.com/p/strapi-frontend-admin) (you can contribute).

This repository will be updated frequently with new translations and Strapi version updates.

</div>

## 🚀 How to use

The repository is currently updated manually. 

```javascript
  "readKey": "a8120023039112376500-1d4129ec12f08f85b6892bf0955ad0d3af9aaabdfff8770e2be4e54102ee9546"
```

The `readKey` is present in the `localazy.json` file, allowing anyone to update language resources using the Localazy CLI Tool by running the `localazy download` command.

```bash
localazy download
```

- To use these translations, follow the code example structure and update your `app.js` file.
- Then navigate to the **User Settings page** in **Strapi** to change the UI language.


## ✅ Available Languages

Strapi natively supports the following languages:

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

## 🗒 Notes

* Strapi interprets Danish as "dk" instead of the correct ISO code "da".
* Strapi interprets Norwegian Bokmål as "no"; a more specific version should be used.
* Strapi interprets Traditional Chinese as "zh"; a more specific version should be used.

Localazy and this boilerplate resolve these issues (see `app.js`).

Currently, Strapi does not allow users to add other than the above languages.

- See [this issue](https://github.com/strapi/strapi/pull/13096) for more details.
- This will be fixed in the one of the future Strapi releases.

## 🛟 Support

- [Intercom chat](https://localazy.com)
- [GitHub issues](https://github.com/localazy/strapi-frontend-admin-translations/issues)
- [Discussion forum](https://discuss.localazy.com/)
- [team@localazy.com](mailto:team@localazy.com)

## 💙 Localazy Packages

Check out all npm packages from Localazy:

| Package                                                                                                      | Description                                                              |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [@localazy/cli](https://www.npmjs.com/package/@localazy/cli)                                                 | Localazy CLI tool for app and software localization and translation.     |
| [@localazy/api-client](https://www.npmjs.com/package/@localazy/api-client)                                   | Node.js module that allows you to easily interact with the Localazy API. |
| [@localazy/cdn-client](https://www.npmjs.com/package/@localazy/cdn-client)                                   | Node.js module that allows you to easily interact with the Localazy CDN. |
| [@localazy/languages](https://www.npmjs.com/package/@localazy/languages)                                     | Available Localazy Languages                                             |
| [@localazy/strapi-plugin](https://www.npmjs.com/package/@localazy/strapi-plugin)                             | The official Strapi Plugin by Localazy.                                  |
| [@localazy/directus-extension-localazy](https://www.npmjs.com/package/@localazy/directus-extension-localazy) | The official Localazy module extension for Directus                      |


Discover all available [integration options](https://github.com/localazy) and [localization examples](https://github.com/localazy).
