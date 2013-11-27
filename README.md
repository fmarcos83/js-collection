# JS-COLLECTION

A library for managing collections :)
## Examples
#### Instantiating
```javascript
    var collection = new Collection;
```
#### Adding elements
```javascript
    collection.add(1);
    collection.add([1,2,3]);
    collection.toArray();
    //the expected array representation
    //will be [1,1,2,3]
```
#### Iterating over the collection
```javascript
    collection.each(function(item){console.log(arguments)});
    //NOTE: collection iterate over the internal representation
    //not a cached version so please take into acount that very
    //funny things can happen if you try to modify the collection
    //inside the loop without security checks
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
