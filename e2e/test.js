import puppetteer from 'puppeteer';

jest.setTimeout(300000000); // default puppeteer timeout
describe('popover test', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'https://jira.netology-group.ru/secure/Dashboard.jspa';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 2,
      // devtools: false, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  function delay(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  test('should add .success class for valid inn', async () => {
    const password = 'secret';
    await page.goto(baseUrl);
    const form = await page.$('#loginform');
    const login = await form.$('#login-form-username');
    await login.type('login');
    const pass = await form.$('#login-form-password');
    await pass.type(password);
    let submit = await form.$('#login');
    submit.click();
    await page.waitForSelector('#create_link');
    await page.goto('https://jira.netology-group.ru/secure/admin/ConfigureCustomField!default.jspa?customFieldId=11306');
    await page.waitForSelector('#create_link');
    const pass2 = await page.$('#login-form-authenticatePassword');
    await pass2.type(password);
    submit = await page.$('#login-form-submit');
    await submit.click();
    await page.waitForSelector('#create_link');
    

    const data = [
      '0,5 часа',
      '1 час',
      '1,5 часа',
      '2 часа',
      '2,5 часа',
      '3 часа',
      '4 часа',
      '5 часов',
      '6 часов',
      '7 часов',
      '8 часов',
      '9 часов',
      '10 часов',
      '11 часов',
      '12 часов',
      '13 часов',
      '14 часов',
      '15 часов',
      '16 часов',
      '17 часов',
      '18 часов',
      '19 часов',
      '20 часов',
      '21 час',
      '22 часа',
      '23 часа',
      '24 часа',
      '25 часов',
      '26 часов',
      '27 часов',
      '28 часов',
      '29 часов',
      '30 часов',
      '31 час',
      '32 часа',
      '33 часа',
      '34 часа',
      '35 часов',
      '36 часов',
      '37 часов',
      '38 часов',
      '39 часов',
      '40 часов',
      '41 час',
      '42 часа',
      '43 часа',
      '44 часа',
      '45 часов',
      '46 часов',
      '47 часов',
      '48 часов',
      '49 часов',
      '50 часов',
      '51 час',
      '52 часа',
      '53 часа',
      '54 часа',
      '55 часов',
      '56 часов',
      '57 часов',
      '58 часов',
      '59 часов',
      '60 часов',
      '61 час',
      '62 часа',
      '63 часа',
      '64 часа',
      '65 часов',
      '66 часов',
      '67 часов',
      '68 часов',
      '69 часов',
      '70 часов',
      '71 час',
      '72 часа',
      '73 часа',
      '74 часа',
      '75 часов',
      '76 часов',
      '77 часов',
      '78 часов',
      '79 часов',
      '80 часов',
      '81 час',
      '82 часа',
      '83 часа',
      '84 часа',
      '85 часов',
      '86 часов',
      '87 часов',
      '88 часов',
      '89 часов',
      '90 часов',
      '91 час',
      '92 часа',
      '93 часа',
      '94 часа',
      '95 часов',
      '96 часов',
      '97 часов',
      '98 часов',
      '99 часов',
      '100 часов'
    ];

    await page.goto('https://jira.netology-group.ru/secure/admin/EditCustomFieldOptions!default.jspa?fieldConfigId=12819&selectedParentOptionId=19085');
    await page.waitForSelector('#create_link');

    for (let index = 0; index < data.length; index++) {
      // await delay(500);
      await page.waitForSelector('#create_link');
      const formik = await page.$('.fieldValueArea input');
      await formik.type(data[index]);
      submit = await page.$('#add_submit');
      submit.click();
      await delay(500);
      await page.waitForSelector('#create_link');
      // await delay(500);
    }

  });


  // test('should add .alert class for invalid inn', async () => {
  //   await page.goto(baseUrl);
  //   const button = await page.$('#button');
  //   button.click();
  //   await page.waitForSelector('.popover');
  //   await page.waitFor(100);
  //   button.click();
  //   await page.waitForSelector('.popover', hidden);
  // });
});
