# JS-COLLECTION

A library for managing collections :)
## Examples
#### Instantiating
```javascript
    //collection to 5 seconds in the future
    //will output the deadline object
    var collection = new Collection;
```
#### Adding elements
```javascript
    collection.add(1);
```
#### Iterating over the collection
```javascript
    collection.each(function(item){console.log(arguments)});
```
# License
[MIT](http://opensource.org/licenses/mit-license.php)

## Installing
### Bower

```bash
bower install js-collection
```
## Build
### Requirements

+ [jasmine-node](https://github.com/mhevery/jasmine-node)
+ [ant](http://ant.apache.org)

### Prepeare release

work in progress

### Tests

```bash
ant test
```
