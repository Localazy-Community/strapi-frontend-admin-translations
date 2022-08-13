import ar from '../../../src/admin/src/translations/ar';
import fr from '../../../src/admin/src/translations/fr';
import cs from '../../../src/admin/src/translations/cs';
import de from '../../../src/admin/src/translations/de';
// Strapi interprets Danish as "dk" (not "da", which is the ISO code)
import da from '../../../src/admin/src/translations/da';
import es from '../../../src/admin/src/translations/es';
import he from '../../../src/admin/src/translations/he';
import id from '../../../src/admin/src/translations/id';
import it from '../../../src/admin/src/translations/it';
import ja from '../../../src/admin/src/translations/ja';
import ko from '../../../src/admin/src/translations/ko';
import ms from '../../../src/admin/src/translations/ms';
import nl from '../../../src/admin/src/translations/nl';
// Strapi interprets Norwegian Bokmål as "no" (incorrectly, more specific version should be used)
import nb from '../../../src/admin/src/translations/nb';
import pl from '../../../src/admin/src/translations/pl';
import ptBR from '../../../src/admin/src/translations/pt-BR';
import pt from '../../../src/admin/src/translations/pt';
import ru from '../../../src/admin/src/translations/ru';
import sk from '../../../src/admin/src/translations/sk';
import sv from '../../../src/admin/src/translations/sv';
import th from '../../../src/admin/src/translations/th';
import tr from '../../../src/admin/src/translations/tr';
import uk from '../../../src/admin/src/translations/uk';
import vi from '../../../src/admin/src/translations/vi';
import zhHans from '../../../src/admin/src/translations/zh-Hans';
// Strapi interprets Traditional Chinese as "zh" (incorrectly, more specific version should be used)
import zhHant from '../../../src/admin/src/translations/zh-Hant';

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
