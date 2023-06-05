import puppeteer from "puppeteer";
import dotenv from "dotenv";
dotenv.config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://app.keka.com/Account/Login");

  const googleBtn = await page.waitForSelector('button[value="Google"]');
  await googleBtn.click();
  await page.waitForNavigation();

  const emailField = await page.waitForSelector('input[type="email"]');
  await emailField.type(EMAIL);
  await page.keyboard.press("Enter");

  const passwordField = await page.waitForSelector('input[type="password"]', {
    visible: true,
  });
  await passwordField.type(PASSWORD);
  await page.keyboard.press("Enter");
  await page.waitForNavigation();

  //   setTimeout(async () => {
  //     await browser.close();
  //   }, 10000);
})();
