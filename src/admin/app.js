import ar from '../admin/src/translations/ar.json';
import fr from '../admin/src/translations/fr.json';
import cs from '../admin/src/translations/cs.json';
import de from '../admin/src/translations/de.json';
// Strapi interprets Danish as "dk" (not "da", which is the ISO code)
import da from '../admin/src/translations/da.json';
import es from '../admin/src/translations/es.json';
import he from '../admin/src/translations/he.json';
import id from '../admin/src/translations/id.json';
import it from '../admin/src/translations/it.json';
import ja from '../admin/src/translations/ja.json';
import ko from '../admin/src/translations/ko.json';
import ms from '../admin/src/translations/ms.json';
import nl from '../admin/src/translations/nl.json';
// Strapi interprets Norwegian Bokmål as "no" (incorrectly, more specific version should be used)
import nb from '../admin/src/translations/nb.json';
import pl from '../admin/src/translations/pl.json';
import ptBR from '../admin/src/translations/pt-BR.json';
import pt from '../admin/src/translations/pt.json';
import ru from '../admin/src/translations/ru.json';
import sk from '../admin/src/translations/sk.json';
import sv from '../admin/src/translations/sv.json';
import th from '../admin/src/translations/th.json';
import tr from '../admin/src/translations/tr.json';
import uk from '../admin/src/translations/uk.json';
import vi from '../admin/src/translations/vi.json';
import zhHans from '../admin/src/translations/zh-Hans.json';
// Strapi interprets Traditional Chinese as "zh" (incorrectly, more specific version should be used)
import zhHant from '../admin/src/translations/zh-Hant.json';

const config = {
  locales: [
    'ar',
    'fr',
    'cs',
    'de',
    'dk',
    'es',
    'he',
    'id',
    'it',
    'ja',
    'ko',
    'ms',
    'nl',
    'no',
    'pl',
    'pt-BR',
    'pt',
    'ru',
    'sk',
    'sv',
    'th',
    'tr',
    'uk',
    'vi',
    'zh-Hans',
    'zh',
  ],
  translations: {
    ar: {
      ...ar,
    },
    fr: {
      ...fr,
    },
    cs: {
      ...cs,
    },
    de: {
      ...de,
    },
    dk: {
      ...da,
    },
    es: {
      ...es,
    },
    he: {
      ...he,
    },
    id: {
      ...id,
    },
    it: {
      ...it,
    },
    ja: {
      ...ja,
    },
    ko: {
      ...ko,
    },
    ms: {
      ...ms,
    },
    nl: {
      ...nl,
    },
    no: {
      ...nb,
    },
    pl: {
      ...pl,
    },
    'pt-BR': {
      ...ptBR,
    },
    pt: {
      ...pt,
    },
    ru: {
      ...ru,
    },
    sk: {
      ...sk,
    },
    sv: {
      ...sv,
    },
    th: {
      ...th,
    },
    tr: {
      ...tr,
    },
    uk: {
      ...uk,
    },
    vi: {
      ...vi,
    },
    'zh-Hans': {
      ...zhHans,
    },
    zh: {
      ...zhHant,
    },

  }
};

const bootstrap = app => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
