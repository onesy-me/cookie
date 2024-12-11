/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

group('OnesyCookie', () => {

  preTo(async () => {
    await evaluate((window: any) => new window.OnesyCookie().clear);
  });

  group('OnesyCookie', () => {

    preTo(async () => {
      await evaluate((window: any) => window.OnesyCookie.clear);
    });

    to('cookie', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesyCookie = new window.OnesyCookie();

        onesyCookie.add('a', 'a');
        onesyCookie.add('ab', 4);
        onesyCookie.add('ad', 4);

        return window.OnesyCookie.cookie;
      });
      const values = [...valueBrowsers];

      values.forEach(value => {
        assert(value).eql('onesy_a=a; onesy_ab=4; onesy_ad=4');
      });
    });

    to('clear', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesyCookie = new window.OnesyCookie();

        onesyCookie.add('a', 'a');
        onesyCookie.add('ab', 4);
        onesyCookie.add('ad', 4);

        window.document.cookie = `a=a`;

        window.OnesyCookie.clear;

        return window.OnesyCookie.cookie;
      });
      const values = [...valueBrowsers];

      values.forEach(value => {
        assert(value).eq('');
      });
    });

  });

  group('options', () => {

    preTo(async () => {
      await evaluate((window: any) => window.OnesyCookie.clear);
    });

    group('namespace', () => {

      preTo(async () => {
        await evaluate((window: any) => window.OnesyCookie.clear);
      });

      to('default', async () => {
        const valueBrowsers = await evaluate((window: any) => new window.OnesyCookie().namespace);
        const values = [...valueBrowsers];

        values.forEach(value => {
          assert(value).eq('onesy_');
        });
      });

      to('namespace', async () => {
        const valueBrowsers = await evaluate((window: any) => new window.OnesyCookie({ namespace: 'a' }).namespace);
        const values = [...valueBrowsers];

        values.forEach(value => {
          assert(value).eq('a_');
        });
      });

      to('namespace_separator', async () => {
        const valueBrowsers = await evaluate((window: any) => new window.OnesyCookie({ namespace_separator: ',' }).namespace);
        const values = [...valueBrowsers];

        values.forEach(value => {
          assert(value).eq('onesy,');
        });
      });

      to('namespace in a document cookie', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          const onesyCookie = new window.OnesyCookie();

          onesyCookie.add('a', 'a');
          onesyCookie.add('ab', 4);
          onesyCookie.add('ad', 4);

          return window.OnesyCookie.cookie;
        });
        const values = [...valueBrowsers];

        values.forEach(value => {
          assert(value).one.eq([
            'onesy_a=a; onesy_ab=4; onesy_ad=4',
            'onesy_ab=4; onesy_ad=4; onesy_a=a'
          ]);
        });
      });

    });

  });

  to('properties', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyCookie = new window.OnesyCookie();

      onesyCookie.add('a', 4);
      onesyCookie.add('ab', 4);
      onesyCookie.add('ad', 4);

      return onesyCookie.properties;
    });
    const values = [...valueBrowsers];

    values.forEach(value => {
      assert(value.sort()).eql(['a', 'ab', 'ad']);
    });
  });

  to('values', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyCookie = new window.OnesyCookie();

      onesyCookie.add('a', 'a');
      onesyCookie.add('ab', 4);
      onesyCookie.add('ad', 4);

      return onesyCookie.values;
    });
    const values = [...valueBrowsers];

    values.forEach(value => {
      assert(value.sort()).eql([4, 4, 'a']);
    });
  });

  to('items', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyCookie = new window.OnesyCookie();

      onesyCookie.add('a', 'a');
      onesyCookie.add('ab', 4);
      onesyCookie.add('ad', 4);

      return onesyCookie.items;
    });
    const values = [...valueBrowsers];

    values.forEach(value => {
      assert(value).eql({
        a: 'a',
        ab: 4,
        ad: 4,
      });
    });
  });

  to('clear', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyCookie = new window.OnesyCookie();

      onesyCookie.add('a', 'a');
      onesyCookie.add('ab', 4);
      onesyCookie.add('ad', 4);

      window.document.cookie = `onesy_a=4`;

      onesyCookie.clear;

      return window.OnesyCookie.cookie;
    });

    const values = [...valueBrowsers];

    values.forEach(value => {
      assert(value).eq('');
    });
  });

  to('get', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyCookie = new window.OnesyCookie();

      onesyCookie.add('a', 'a');

      return onesyCookie.get('a');
    });
    const values = [...valueBrowsers];

    values.forEach(value => {
      assert(value).eq('a');
    });
  });

  to('has', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyCookie = new window.OnesyCookie();

      onesyCookie.add('a', 'a');

      return onesyCookie.has('a');
    });
    const values = [...valueBrowsers];

    values.forEach(value => {
      assert(value).eq(true);
    });
  });

  group('add', () => {

    to('add', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesyCookie = new window.OnesyCookie();

        onesyCookie.add('a', 'a');

        return [onesyCookie.get('a'), window.document.cookie.indexOf('onesy_a=a') > -1];
      });
      const values = [...valueBrowsers];

      values.forEach(value => {
        assert(value).eql(['a', true]);
      });
    });

    to('add reference value', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        const onesyCookie = new window.OnesyCookie();

        onesyCookie.add('a', 'a');
        onesyCookie.add('ay', true);
        onesyCookie.add('au', [1, 4]);
        onesyCookie.add('ao', { a: 'a' });

        return [onesyCookie.get('a'), onesyCookie.get('ay'), onesyCookie.get('au'), window.document.cookie.split('; ')[2], onesyCookie.get('ao')];
      });
      const values = [...valueBrowsers];

      values.forEach(value => {
        assert(value).eql(['a', true, [1, 4], 'onesy_au=[1,4]', { a: 'a' }]);
      });
    });

  });

  to('update', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyCookie = new window.OnesyCookie();

      onesyCookie.add('a', 4);
      onesyCookie.update('a', 'a');

      return [onesyCookie.get('a'), window.document.cookie.indexOf('onesy_a=a') > -1];
    });
    const values = [...valueBrowsers];

    values.forEach(value => {
      assert(value).eql(['a', true]);
    });
  });

  to('remove', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyCookie = new window.OnesyCookie();

      onesyCookie.add('a', 'a');

      onesyCookie.remove('a');

      return [onesyCookie.get('a'), window.document.cookie];
    });
    const values = [...valueBrowsers];

    values.forEach(value => {
      assert(value).eql([undefined, '']);
    });
  });

});
