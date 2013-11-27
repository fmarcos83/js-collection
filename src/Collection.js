/**
 * @depends
 */
Collection = function(){
    var i=true;
    var list = [];
    var resetCounterValue = 0;
    var internalCounter = resetCounterValue;
    return {
        toArray: function(){
            return list.slice();
        },
        add: function(el){
            (!el instanceof Array)?
                list.push(el):
                list=list.concat(el);
            return this;
        },
        removeAt: function(position){
            var pos = (position<0)?list.length:position;
            list.splice(pos,1);
            return this;
        },
        removeAll: function(){
            list.splice(list, list.length);
            return this;
        },
        count: function(){
            return list.length;
        },
        isEmpty: function(){
            return list.length==0;
        },
        rewind: function(){
            internalCounter = resetCounterValue;
        },
        each: function(callback, context){
            var item;
            this.rewind();
            context = context||this;
            while(item = this.next()){
                callback.call(context, item);
            }
        },
        current: function(){
            return list[this.getPos()];
        },
        getPos: function(){
            return internalCounter;
        },
        next: function(){
            return (internalCounter>=this.count())
                    ?false:
                    list[internalCounter++];
        }
    };
};
