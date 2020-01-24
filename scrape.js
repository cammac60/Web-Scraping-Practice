const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('http://www.whatthefuckshouldimakefordinner.com/index.php')
  .click('a[href="../index.php"]')
  .evaluate(() => {
    let meal = document.querySelector('a[target="_blank"]');
    return meal.innerText
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
