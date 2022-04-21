import Backbone from "backbone";


class Collection {

}
class Model {

}
Model.prototype.idAttribute = 'id'

Collection.prototype.model = Model;

Collection.prototype.modelId = function(attrs) {
    return attrs[this.model.prototype.idAttribute || 'id'];
}
Collection.prototype.get = function(obj) {
    if (obj == null) return void 0;
    return this.modelId(obj)
};

export class CardCollection extends Collection {
    model() {
        return Model;
    }
}


const collection = new CardCollection()

collection.get('someId');
