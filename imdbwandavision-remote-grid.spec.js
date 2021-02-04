// Generated by Selenium IDE
const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver')
const assert = require('assert')

describe('imdb-wandavision', function() {
  this.timeout(60000)
  let driver
  let vars
  let capabilities = new Capabilities().setBrowserName("firefox");
  beforeEach(async function() {
    driver = await new Builder()
        .usingServer("http://localhost:4444/wd/hub")   
        .withCapabilities(capabilities)
        .build();
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('imdb-wandavision', async function() {
    // Test name: imdb-wandavision
    // Step # | name | target | value
    // 1 | open | https://www.imdb.com/ | 
    await driver.get("https://www.imdb.com/")
    // 2 | setWindowSize | 771x695 | 
    await driver.manage().window().setRect(771, 695)
    // 3 | click | name=q | 
    await driver.wait(until.elementLocated(By.name("q"))).click() 
    //await driver.findElement(By.name("q")).click()
    // 4 | type | name=q | wandavision
    await driver.findElement(By.name("q")).sendKeys("wandavision")
    // 5 | sendKeys | name=q | ${KEY_ENTER}
    await driver.findElement(By.name("q")).sendKeys(Key.ENTER)
    // 6 | click | linkText=WandaVision | 
    await driver.wait(until.elementLocated(By.linkText("WandaVision"))).click() 
    //await driver.findElement(By.linkText("WandaVision")).click()
    // 7 | click | linkText=TRIVIA | 
    await driver.findElement(By.linkText("TRIVIA")).click()
  })
})
