require('../src/Collection.js');
describe('collection check emptiness', function(){
    var collection;
    beforeEach(function(){
        collection = new Collection();
    });
    it('on instantiation collection is empty', function(){
        expect(collection.isEmpty()).toBe(true);
    });
    it('on add collection is not empty', function(){
        collection.add(1);
        expect(collection.isEmpty()).toBe(false);
    });
    it('on add and remove on collection collection is empty', function(){
        collection.add(1);
        collection.removeAt(1);
        expect(collection.isEmpty()).toBe(false);
    });
    it('on add and remove on collection collection  size equals 0', function(){
        collection.add(1);
        collection.removeAt(0);
        expect(collection.count()).toBe(0);
    });
    it('on remove on a non empty position', function(){
        collection.add(1);
        collection.removeAt(20);
        expect(collection.count()).toBe(1);
    });
    it('on remove on a negative position', function(){
        collection.add(1);
        collection.removeAt(-1);
        expect(collection.count()).toBe(1);
    });
});

describe('collection check emptiness', function(){
    var collection;
    beforeEach(function(){
        collection = new Collection();
    });
    it('on add 3 elements and remove 1', function(){
        collection.add(1);
        collection.add(2);
        collection.removeAt(1);
        expect(collection.isEmpty()).toBe(false);
    });
    it('on removeAll size is empty', function(){
        collection.add([1,2,3]);
        expect(collection.count()).toBe(3);
        expect(collection.removeAll().count()).toBe(0);
    })

});

describe('collection check size on add', function(){
    var collection;
    beforeEach(function(){
        collection = new Collection();
    });
    it('on instantation collection size equals 0', function(){
        expect(collection.count()).toBe(0)
    });
    it('on add collection size not 0', function(){
        collection.add(1);
        expect(collection.count()).not.toBe(0)
    });
});

describe('collection toArray is an array', function(){
    var collection;
    beforeEach(function(){
        collection = new Collection();
    });
    it('on instantation collection export an empty Array', function(){
        expect(collection.toArray() instanceof Array).toBe(true);
        expect(collection.toArray()).toEqual([]);
    });
    it('on add 3 items collection export equals', function(){
        var expectedArray=[1,2,3];
        collection.add(1);
        collection.add(2);
        collection.add(3);
        expect(collection.count()).toBe(3);
        expect(collection.toArray()).toEqual(expectedArray);
    });
    it('return list is a copy not the collection list', function(){
        var arr = collection.toArray();
        arr.push(1);
        expect(collection.count()).toBe(0);
        expect(collection.toArray()).toEqual([]);
    });
});

describe('check add concats results if array', function(){
    var collection;
    beforeEach(function(){
        collection = new Collection();
    });
    it('checks the length', function(){
        var expectedArray = [1,2,3,4];
        expect(collection.add([1,2,3,4]).toArray().length).toBe(expectedArray.length);
    });
    it('checks the content', function(){
        var expectedArray = [1,2,3,4];
        expect(collection.add([1,2,3,4]).toArray()).toEqual(expectedArray);
    });
    it('checks the content adding on a non empty collection', function(){
        var expectedArray = [2,1,3,1,4,1,5,1,6,1,7];
        expect(collection.add(2).add(1).add(3).add(expectedArray.slice(3,expectedArray.length)).toArray()).toEqual(expectedArray);
    });
});

describe('collection iterator methods', function(){
    var collection;
    var expectedArray = [];
    beforeEach(function(){
        collection = new Collection();
        expectedArray = [];
        for(var i=0;i<100;i++){
            expectedArray.push(Math.random()*57);
        }
    });
    it('iterating the same number of elements that we add', function(){
        var len = expectedArray.length;
        collection.add(expectedArray);
        var counter = 0;
        var rewindCounter = 0;
        collection.rewind();
        while(collection.next()){
            ++counter;
        };
        expect(counter).toBe(len);
    });
    it('checking that we iterate over the same elements on next', function(){
        collection.add(expectedArray);
        var item = null;
        var pos;
        while(item = collection.next()){
            pos = collection.getPos()-1;
            expect(item).toEqual(expectedArray[pos]);
        }
    });
    it('checking over small iteration', function(){
        collection.add([1,2,3]);
        expectedArray = [1,2,3]
        var pos = 0;
        collection.rewind();
        expect(collection.next()).toEqual(1);
        expect(collection.next()).toEqual(2);
        expect(collection.next()).toEqual(3);
    });
});

describe('check internal pos', function(){
    var collection;
    beforeEach(function(){
        collection = new Collection();
        collection.add([1,2,3])
    });
    it('is 0 in the begining', function(){
        expect(collection.getPos()).toEqual(0);
    })
    it("equals count after iterating", function(){
        collection.each(function(){});
        expect(collection.getPos()).toEqual(collection.count());
    });
    it("equals 0 after iterating and rewind", function(){
        collection.each(function(){});
        collection.rewind();
        expect(collection.getPos()).toEqual(0);
    });
    it("equals count after sucesive calls to next after iterating",function(){
        collection.each(function(){});
        collection.next();
        collection.next();
        collection.next();
        expect(collection.getPos()).toEqual(collection.count());
    });
});

describe('check current item', function(){
    var collection;
    var itemArray = [1,2,3,4];
    beforeEach(function(){
        collection = new Collection();
        collection.add(itemArray);
    });
    it('on next call', function(){
        collection.rewind();
        expect(collection.next()).toBe(itemArray[0]);
        expect(collection.next()).toBe(itemArray[1]);
        expect(collection.next()).toBe(itemArray[2]);
        expect(collection.next()).toBe(itemArray[3]);
        expect(collection.next()).toBe(false);
    });
});

describe('check collection add', function(){
    var collection;
    var itemArray = [1,2,3,4];
    beforeEach(function(){
        collection = new Collection();
    });
    it('appends elements at the end', function(){
        collection.add(1);
        collection.add(itemArray);
        collection.add(4);
        expect(collection.toArray()).toEqual([1,1,2,3,4,4]);
    });
});

describe('check it can only iterate over the image at the begining', function(){
})
