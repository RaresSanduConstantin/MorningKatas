/* 
You are given a small extract of a catalog:

s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

...
(prx stands for price, qty for quantity) and an article i.e "saw".

The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:

"table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."
If the article is not in the catalog return "Nothing".

Notes
There is a blank line between two lines of the catalog.
The same article may appear more than once. If that happens return all the lines concerned by the article (in the same order as in the catalog).
The line separator of results may depend on the language \nor \r\n. In Pascal \n is replaced by LineEnding.
in Perl use "£" instead of "$" before the prices.
You can see examples in the "Sample tests".

https://www.codewars.com/kata/59d9d8cb27ee005972000045/train/javascript

*/

function catalog(s, article) {
  // your code

  let arr = s.split('\n\n');

  let solution = [];

  arr.forEach((item) => {
    if (item.includes(article)) {
      let prodTagOpen = item.indexOf('<name>');
      let prodTagClose = item.indexOf('</name>');
      let prod = item.slice(prodTagOpen + 6, prodTagClose);

      let priceTagOpen = item.indexOf('<prx>');
      let priceTagClose = item.indexOf('</prx>');
      let price = item.slice(priceTagOpen + 5, priceTagClose);

      let qtyTagOpen = item.indexOf('<qty>');
      let qtyTagClose = item.indexOf('</qty>');
      let qty = item.slice(qtyTagOpen + 5, qtyTagClose);

      solution.push(`${prod} > prx: $${price} qty: ${qty}`);
    }
  });
  if (solution.length === 0) return 'Nothing';
  if (solution.length > 1) {
    return solution.join('\r\n');
  } else {
    return solution[0];
  }
}
